#!/usr/bin/env node
import fs from 'fs';
import capitalize from 'capitalize';
import basic_data_groups from './basic_data_groups.js';

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
			console.log(`>>>ERROR>>> ${file}.${prop}.copyof = [${copyof}], not found in same file`);
			return;
		} else if (redirect) {
			if(!data[redirect]) {
				console.log(`>>>ERROR>>> ${file}.${prop}.redirect = [${redirect}], not found in same file`);
			} else {
				$redirects[`${link}/${prop}`] = `${link}/${redirect}`;
			}
			// Either way, we can now ignore this entry.
			return;
		} else if (alternateOf && !data[alternateOf]) {
			console.log(`>>>ERROR>>> ${file}.${prop}.alternateOf = [${alternateOf}], not found in same file`);
			return;
		}
		if(prop === "not_found") {
			// Skip, no need to put this in group data or search index
			return;
		} else if (num && $groupingData[link][prop]) {
			console.log(`>>>ERROR>>> Duplicate [${prop}] in ${link} <${file}>`);
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
				console.log(`>>>ERROR>>> ${file}.${prop}.copyof = [${copyof}], which does not lead to a stable entry`);
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
				const s = source.toLowerCase().replace(/[-_ ]/g, "_").replace(/[^0-9_a-z]/g, "");
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
	const url = `./src/json/_data_${prop}.json`;
	const file = JSON.stringify(value);
	if(get(url).trim() === file) {
		console.log(`UNCHANGED ${url}`);
	} else {
		fs.writeFileSync(url, file);
		console.log(`Saved ${url}`);
	}
});

const $allSourcesMap = [
	`import {lazy} from 'react';\nconst output = {`
];
Object.entries($sources).forEach(([prop, value]) => {
	const transformedProp = prop.toLowerCase().replace(/[-_ ]/g, "_").replace(/[^0-9_a-z]/g, "");
	const baseurl = `__source_${transformedProp}`;
	const url = `./src/pages/subpages/${baseurl}.tsx`;
	$allSourcesMap.push(`${transformedProp}: lazy(() => import("./${baseurl}")),`);
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
	const file = `import Link from '../../components/Link';\nconst References = () => <>${output.join("")}</>;\nexport default <References />;`;
	if(get(url).trim() === file) {
		console.log(`UNCHANGED ${url}`);
	} else {
		fs.writeFileSync(url, file);
		console.log(`Saved ${url}`);
	}
});
$allSourcesMap.push(`};\nexport default output;`)

const $allLinks = {};
$allIncludingCopies.forEach(([link, title]) => ($allLinks[link] = title || "BLANK"));

const $data_pairs = [
	['./src/json/_data__fuse-translated_data.json', JSON.stringify({
		data: $dataIndex,
		types: $allTypes,
		prefixes: $allPrefixes,
		searchindex: SEARCHINDEX
	})],
	['./src/json/_data__fuse-index.json', JSON.stringify($fuseIndex)],
	['./src/json/_data__all_links.json', JSON.stringify($allLinks)],
	['./src/json/_data__redirects.json', JSON.stringify($redirects).trim()],
	['./src/pages/subpages/_data__sources.tsx', $allSourcesMap.join("")]
];

$data_pairs.forEach(pair => {
	const [filename, data] = pair;
	if(get(filename).trim() === data) {
		console.log(`UNCHANGED ${filename}`);
	} else {
		fs.writeFileSync(filename, data);
		console.log(`Saved ${filename}`);
	}
});
