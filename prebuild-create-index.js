import fs from 'fs';
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
			copyof,
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
		const indexable = { name: named || "BLANK" };
		subtitle && (indexable.subtitle = subtitle);
		tags && (indexable.tags = tags);
		if(!disambiguation) {
			$fuseIndex.push(indexable);
			// Save for extra data to be used by the search page
			const searchgroup = (sg2 && (SEARCHGROUPS.indexOf(sg2) + 1)) || sg;
			$dataIndex.push({
				t: $typesFound[typeOverride || type],
				p: $prefixesFound[link],
				l: prop,
				s: searchgroup
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
	['./src/json/_data__all_links.json', JSON.stringify($allLinks)]
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
