#!/usr/bin/env node
import fs from 'fs';
import capitalize from 'capitalize';

import basic_data_groups from './prebuild/basic_data_groups.js';
import { convertTextToLink } from './prebuild/tests/checkForEncodedLink.js';

const SEARCHGROUPS = [
	"class", // 1
	"archetype", // 2
	"feat", // 3
	"trait", // 4
	"magic", // 5
	"equip", // 6
	"tech", // 7
	"spell", // 8
	"race", // 9
	"faith", // 10
	"monster", // 11
	"rule", // 12
	"source" // 13
];
const SEARCHINDEX = [
	"Classes and Class Abilities", // 1
	"Class Archetypes", // 2
	"Feats", // 3
	"Traits", // 4
	"Magic Items", // 5
	"Equipment", // 6
	"Technology", // 7
	"Spells", // 8
	"Races", // 9
	"Deities/Faiths", // 10
	"Monsters", // 11
	"Rules", // 12
	"Sourcebooks", // 13
];

const $groupingData = {};

// Gather 'Type' info
const $typesFound = {};
const $allTypes = [];
// Gather link prefix info
const $prefixesFound = {};
const $allPrefixes = [];
// The bare index of names/titles
const $fuseIndex = [];
// The raw info to be used by SearchPage
const $dataIndex = [];
// A list of plain copies that don't need to be indexed
const $allIncludingCopies = [];
// Raw info containing redirects
const $redirects = {};
// Index of pages that reference sources
const $sources = {};
// Whether we announce every unchanged file
let $verbose = false;
// Count changed files
let $changed = 0;
// Count total files
let $counter = 0;
// Count unreported files
let $unreported = 0;


// Parse command-line arguments
process.argv.forEach(bit => {
	if(!bit.match(/^[A-Z]:[\\/]/)) {
		// Ignore file stuff
		if(bit.indexOf("verbose") === 0 || bit.indexOf("--verbose") === 0) {
			// old verbose output
			$verbose = "verbose";
		} else if(bit.indexOf("quiet") === 0 || bit.indexOf("--quiet") === 0) {
			// restore feat tree
			$verbose = "quiet";
		}
	}
});

const announce = (message, priority = 0) => {
	if($verbose) {
		if($verbose === "quiet") {
			if(priority < 100) {
				$unreported++;
				if($unreported >= 25) {
					announce(`...still working`, 200);
				}
				return;
			}
		}
	} else if (priority < 1) {
		$unreported++;
		if($unreported >= 25) {
			announce(`...still working`, 200);
		}
		return;
	}
	$unreported = 0;
	console.log(message);
};


const recordType = (type) => {
	if(!$typesFound[type]) {
		$typesFound[type] = $allTypes.length;
		$allTypes.push(type);
	}
};

// Get file contents
const get = (filename, logError = false) => {
	try {
		return fs.readFileSync(filename, 'utf8');
	} catch (err) {
		if (err.code === 'ENOENT') {
			logError && console.error(`>>>ERROR>>> ${filename} does not exist.`);
			return "";
		}
		throw err;
	}
};

Object.entries(basic_data_groups).forEach(([file, groupobject]) => {
	const {data, link, num, type, searchgroup: sg} = groupobject;
	recordType(type);
	if(!$prefixesFound[link]) {
		$prefixesFound[link] = $allPrefixes.length;
		$allPrefixes.push(link);
	}
	if(num && !$groupingData[link]) {
		$groupingData[link] = {};
	}
	Object.entries(data).forEach(([prop, value]) => {
		const {
			name: n,
			title,
			sources,
			copyof,
			redirect,
			subtitle,
			tags,
			searchgroup: sg2,
			alternateOf,
			type: typeOverride,
			disambiguation
		} = value;
		typeOverride && recordType(typeOverride);
		if(copyof && !data[copyof]) {
			announce(`>>>ERROR>>> ${file}.${prop}.copyof = [${copyof}], not found in same file`, 100);
			return;
		} else if (redirect) {
			if(!data[redirect]) {
				announce(`>>>ERROR>>> ${file}.${prop}.redirect = [${redirect}], not found in same file`, 100);
			} else {
				$redirects[`${link}/${prop}`] = `${link}/${redirect}`;
			}
			// Either way, we can now ignore this entry.
			return;
		} else if (alternateOf && !data[alternateOf]) {
			announce(`>>>ERROR>>> ${file}.${prop}.alternateOf = [${alternateOf}], not found in same file`, 100);
			return;
		}
		if(prop === "not_found") {
			// Skip, no need to put this in group data or search index
			return;
		} else if (num && $groupingData[link][prop]) {
			announce(`>>>ERROR>>> Duplicate [${prop}] in ${link} <${file}>`, 100);
		}
		if (num) {
			// This is a part of a multi-file group.
			$groupingData[link][prop] = num;
		}
		const named = n || title || (alternateOf ? (data[alternateOf].name || data[alternateOf].title) : "");
		if(copyof && !named) {
			// This is a plain copy, no name change or anything.
			// No need to put this in the searchable index.
			// However, we do need to save a name for other functions to use.
			let cc = data[copyof];
			while(cc && cc.copyof) {
				cc = data[cc.copyof];
			}
			if(!cc) {
				announce(`>>>ERROR>>> ${file}.${prop}.copyof = [${copyof}], which does not lead to a stable entry`, 100);
			} else {
				$allIncludingCopies.push([`${link}/${prop}`, cc.name || "BLANK"]);
			}
			return;
		}
		// Save for search index, used directly by Fuse.js
		const indexable = {
			name: capitalize.words(
				named,
				{
					skipWord: /^(a|the|an|and|or|but|in|on|of|it)$/,
					preserve: true
				}
			) || "BLANK" };
		subtitle && (indexable.subtitle = subtitle);
		tags && (indexable.tags = tags);
		if(!disambiguation) {
			$fuseIndex.push(indexable);
			// Save for extra data to be used by the search page
			const searchgroup = (sg2 && (SEARCHGROUPS.indexOf(sg2) + 1)) || sg;
			const obj = {
				t: $typesFound[typeOverride || type],
				p: $prefixesFound[link],
				l: prop,
				s: searchgroup
			};
			$dataIndex.push(obj);
			sources && sources.forEach(source => {
				const s = convertTextToLink(source);
				if(!$sources[s]) {
					$sources[s] = [];
				}
				const {t,p} = obj;
				$sources[s].push([t,p,prop,named]);
			});
		}
		// Save for other functions to find a page name quickly
		$allIncludingCopies.push([`${link}/${prop}`, indexable.name]);
	});
});

Object.entries($groupingData).forEach(([prop, value]) => {
	const url = `./src/json/_GEN_${prop}.json`;
	const file = JSON.stringify(value);
	if(get(url).trim() === file) {
		announce(`UNCHANGED ${url}`);
		$counter++;
	} else {
		fs.writeFileSync(url, file);
		announce(`Saved ${url}`, 1);
		$changed++;
		$counter++;
	}
});

const $allSourcesMap = [
	`const output = {`
];
const $allSourcesElements = [
	"import {lazy} from 'react';\n"
];
Object.entries($sources).forEach(([prop, value]) => {
	const transformedProp = convertTextToLink(prop);
	const transformedElement =
		"Source"
		+ transformedProp.slice(0,1).toUpperCase()
		+ transformedProp.slice(1).replace(/_([a-z])/g, (x, m) => (m || "").toUpperCase()).replace(/_/g, "");
	const baseurl = `_GEN_source_${transformedProp}`;
	const url = `./src/pages/subpages/${baseurl}.tsx`;
	$allSourcesElements.push(`const ${transformedElement} = lazy(() => import("./${baseurl}"));\n`);
	$allSourcesMap.push(`${transformedProp}: <${transformedElement} />,`);
	const data = {};
	const types = [];
	const output = [];
	value.forEach(page => {
		const [typeNumber, prefixNumber, prop, title] = page;
		const type = $allTypes[typeNumber];
		const link = `${$allPrefixes[prefixNumber]}/${prop}`;
		if(data[type]) {
			data[type].push([title, link]);
		} else {
			types.push(type);
			data[type] = [[title, link]];
		}
	});
	types.sort().forEach(t => {
		output.push(`<h3>${t}</h3><ul>`);
		data[t].sort((a, b) => a[0].localeCompare(b[0])).forEach(pair => {
			const [title, link] = pair;
			output.push(`<li><Link key="/${link}" to="/${link}">${title}</Link></li>`);
		});
		output.push(`</ul>`);
	});
	const file = `import Link from '../../components/Link';\nconst References: React.FC = () => <>${output.join("")}</>;\nexport default References;`;
	if(get(url).trim() === file) {
		announce(`UNCHANGED ${url}`);
		$counter++;
	} else {
		fs.writeFileSync(url, file);
		announce(`Saved ${url}`, 1);
		$changed++;
		$counter++;
	}
});
$allSourcesMap.push(`};\nexport default output;`)

const $allLinks = {};
const $featLinks = {};
$allIncludingCopies.forEach(([link, title]) => {
	$allLinks[link] = title || "BLANK";
	if(link.match(/feat[/]/)) {
		$featLinks[link] = title;
	}
});

// Create regex matcher for prefixes
const $matcher = [];
let temp = [], previous = false;
$allPrefixes.toSorted().forEach(p => {
	const m = p.match(/^([^-]+)-(.+)$/);
	if(m) {
		if(previous === m[1]) {
			temp.push(m[2]);
			return;
		} else if (previous) {
			$matcher.push(`${previous}-(?:${temp.join("|")})`);
		}
		previous = m[1];
		temp = [m[2]];
		return;
	} else if(previous) {
		$matcher.push(`${previous}-(?:${temp.join("|")})`);
		temp = [];
		previous = false;
	}
	$matcher.push(p);
});

const $data_pairs = [
	[
		'./src/json/_GEN_prefixes.tsx',
		`export const prefixMatcher = "${
			$matcher.join("|")
		}";\nconst prefixes: string[] = ${
			JSON.stringify($allPrefixes)
		};\nexport default prefixes;`
	],
	[
		'./public/_GEN_fuseIndex.json',
		JSON.stringify($fuseIndex)
	],
	[
		'./src/json/_GEN_allLinks.tsx',
		`import {Gen} from "../types";\nconst links: Gen<string, string> = ${
			JSON.stringify($allLinks)
		};\nexport default links;`
	],
	[
		'./src/json/_GEN_redirects.tsx',
		`import {Gen} from "../types";\nconst links: Gen<string, string> = ${
			JSON.stringify($redirects)
		};\nexport default links;`
	],
	[
		'./src/pages/subpages/_GEN_sources.tsx',
		$allSourcesElements.concat($allSourcesMap).join("")
	],
	[
		'./public/_GEN_fuse-translated_data.json',
		JSON.stringify({
			data: $dataIndex,
			types: $allTypes,
			searchindex: SEARCHINDEX
		})
	],
	[
		'./prebuild/_GEN_featNames.json',
		JSON.stringify($featLinks)
	]
];

$data_pairs.forEach(pair => {
	const [filename, data] = pair;
	if(get(filename).trim() === data) {
		announce(`UNCHANGED ${filename}`);
		$counter++;
	} else {
		fs.writeFileSync(filename, data);
		announce(`Saved ${filename}`, 1);
		$changed++;
		$counter++;
	}
});

announce(`\n\n>> Saved [${$changed}] files (out of ${$counter}).`, 500);
