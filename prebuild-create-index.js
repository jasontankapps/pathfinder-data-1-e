import fs from 'fs';
import basic_data_groups from './basic_data_groups.js';

const read = (file) => fs.readFileSync(file, 'utf8');

const GET = (file, joiner = " ") => JSON.parse(read("./src/json/" + file).replace(/\r/g, "").replace(/ *\n */g, joiner));
const searchgroups = [
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
];
const searchindex = [
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
	"Rules" // 12
];

const grouping_data = {};

// Gather 'Type' info
const checkForType = {};
const types = [];
// Gather link prefix info
const checkForPrefix = {};
const prefixes = [];
// The bare index of names/titles
const fuseIndex = [];
// The corresponding index of links
const linkIndex = [];
// The raw info to be used by SearchPage
const dataIndex = [];

Object.entries(basic_data_groups).forEach(([file, groupobject]) => {
	const {data, link, num, type, searchgroup: sg, properties = []} = groupobject;
	if(!checkForType[type]) {
		checkForType[type] = types.length;
		types.push(type);
	}
	if(!checkForPrefix[link]) {
		checkForPrefix[link] = prefixes.length;
		prefixes.push(link);
	}
	if(num && !grouping_data[link]) {
		grouping_data[link] = {};
	}
	const has_properties = properties.length > 0;
	Object.entries(data).forEach(([prop, value]) => {
		const { name: n, title, copyof, subtitle, tags, searchgroup: sg2 } = value;
		if(copyof && !data[copyof]) {
			console.log(`${file}.${prop}.copyof = [${copyof}], not found in same file`);
			return;
		}
		if(prop === "not_found") {
			// Skip, no need to put this in group data or search index
			return;
		} else if (num && grouping_data[link][prop]) {
			console.log(`Duplicate [${prop}] in ${link} <${file}>`);
		}
		if (num) {
			// This is a part of a multi-file group.
			if(has_properties) {
				const base = { page: num };
				properties.forEach(prop => (base[prop] = value[prop]));
				grouping_data[link][prop] = base;
			} else {
				grouping_data[link][prop] = num;
			}
		}
		const named = n || title;
		if(copyof && !named) {
			// This is a plain copy, no name change or anything.
			// No need to put this in the searchable index.
			return;
		}
		// Save for search index, used directly by Fuse.js
		const indexable = { name: named || "BLANK" };
		subtitle && (indexable.subtitle = subtitle);
		tags && (indexable.tags = tags);
		fuseIndex.push(indexable);
		linkIndex.push(`${link}/${prop}`);
		// Save for extra data to be used by the search page
		const searchgroup = sg || (sg2 && (searchgroups.indexOf(sg2) + 1));
		dataIndex.push({
			t: checkForType[type],
			p: checkForPrefix[link],
			l: prop,
			s: searchgroup
		});
	});
});

Object.entries(grouping_data).forEach(([prop, value]) => {
	fs.writeFileSync(`./src/json/_data_${prop}.json`, JSON.stringify(value));
	console.log(`Saved ./src/json/_data_${prop}.json`);
});

fs.writeFileSync('./src/json/_data__fuse-translated_data.json', JSON.stringify({
	data: dataIndex,
	types,
	prefixes,
	searchindex
}));
console.log("Saved ./src/json/_data__fuse-translated-data.json");

fs.writeFileSync('./src/json/_data__fuse-index.json', JSON.stringify(fuseIndex));
console.log("Saved ./src/json/_data__fuse-index.json");
fs.writeFileSync('./src/json/_data__linked-index.json', JSON.stringify(linkIndex));
console.log("Saved ./src/json/_data__linked-index.json");
