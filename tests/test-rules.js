import { basic_data_by_link } from '../basic_data_groups.js';

const { rule: rules } = basic_data_by_link;


function isGood(value) {
	const msg = [ "\n...beginning test: [rules]\n" ];
	let found = false;
	if(!Object.entries(value).some(([prop, value]) => {
		const test = value;
		if(
			!test
			|| typeof test !== "object"
			|| typeof test.name !== "string"
			|| !Array.isArray(test.description)
			|| test.description.some(line => typeof line !== "string")
		) {
			msg.push(`Basic problem with ${prop}`);
			return true;
		} else if (prop === "not_found") {
			// Skip
			return false;
		} else if (test.siblings) {
			const siblings = test.siblings;
			if(!Array.isArray(siblings)) {
				msg.push(`Bad ${prop}.siblings`);
				return true;
			} else if (siblings.some(bit => {
				if(!rules[bit]) {
					return true;
				} else if(!rules[bit].siblings || rules[bit].siblings.indexOf(prop) < 0) {
					found = true;
					msg.push(`${prop}.siblings => ${bit} is not reciprocal`);
					return true;
				}
				return false;
			})) {
				found || msg.push(`Bad ${prop}.siblings`);
				return true;
			}
		}
		if (test.parent_topics) {
			const parents = test.parent_topics;
			const max = parents.length - 1;
			if(!Array.isArray(parents)) {
				msg.push(`Bad ${prop}.parent_topics`);
				return true;
			} else {
				const parentProp = parents.slice(-1).pop() || "";
				const immediateParent = rules[parentProp];
				if(!immediateParent) {
					msg.push(`${prop}.parent_topics contains invalid "${parentProp}"`);
					return true;
				}
				const ancestry = parents.slice(0, -1).join(",");
				if((immediateParent.parent_topics || []).join(",") !== ancestry) {
					msg.push(`${prop}.parent_topics does not correspond to ${parentProp}.parent_topics`);
					return true;
				} else if ((immediateParent.subtopics || []).indexOf(prop) < 0) {
					msg.push(`${prop} not found in ${parentProp}.subtopics`);
					return true;
				}
			}
		}
		if (test.subtopics) {
			const subtopics = test.subtopics;
			if(!Array.isArray(subtopics)) {
				msg.push(`Bad ${prop}.subtopics`);
				return true;
			}
			const subbies = subtopics.join(" ");
			if (subtopics.some(bit => {
				const rb = rules[bit];
				if(!rb) {
					return true;
				}
				if(!rb.parent_topics || rb.parent_topics.indexOf(prop) !== (rb.parent_topics.length - 1)) {
					found = true;
					msg.push(`${prop}.subtopics => ${bit} is not reciprocal`);
					return true;
				}
				const siblings = rb.siblings;
				if (!siblings || !Array.isArray(siblings)) {
					found = true;
					msg.push(`${bit} does not have a valid siblings property despite heritage from ${prop}`);
					return true;
				} else if (subbies !== siblings.join(" ")) {
					found = true;
					msg.push(`${bit}.siblings !== ${prop}.subtopics`);
					return true;
				}
				return false;
			})) {
				found || msg.push(`Bad ${prop}.subtopics`);
				return true;
			}
		}
		if (test.tables) {
			if(!Array.isArray(test.tables)) {
				found = true;
			}
			if(test.tables.some((table, i) => {
				if(typeof table !== "object") {
					found = true;
					msg.push(`Non-object table at ${prop}.tables[${i}]`)
					return true;
				} else {
					const { id, headers, types, alignments, sizes, data, initialColumn, nullValue, filter } = table;
					if(
						typeof id !== "string"
						|| typeof initialColumn !== "number"
						|| !Array.isArray(headers)
						|| !Array.isArray(types)
						|| !Array.isArray(data)
						|| (nullValue && typeof nullValue !== "string")
					) {
						found = true;
						msg.push(`Simple table error at ${prop}.tables[${i}]`)
						return true;
					} else if (
						headers.length !== types.length
						|| headers.some(header => typeof header !== "string")
						|| types.some(type => ["gp", "gp+", "lbs", "lbs+", "bonus", "num", null, 0].indexOf(type) === -1)
					) {
						found = true;
						msg.push(`Header/type table error at ${prop}.tables[${i}]`)
						return true;
					} else if (
						alignments !== undefined && (
							!Array.isArray(alignments)
							|| alignments.length !== types.length
							|| alignments.some(align => [null, true, false].indexOf(align) === -1)
						)
					) {
						found = true;
						msg.push(`Alignment array table error at ${prop}.tables[${i}]`)
						return true;
					} else if (
						filter && (
							!Array.isArray(filter)
							|| filter.some(f => {
								if(!f || typeof f !== "object") {
									return true;
								} else if (f.col === undefined) {
									found = true;
									msg.push(`Filter missing "col" prop in ${prop}.tables[${i}]`);
									return true;
								} else if (f.range && (
									!Array.isArray(f.range)
									|| f.range.length !== 2
									|| f.range.some(s => typeof(s) !== "number")
									|| f.range[0] >= f.range[1]
								)) {
									found = true;
									msg.push(`Filter has incorrect "range" prop in ${prop}.tables[${i}]`);
									return true;
								} else if (f.equals && (!Array.isArray(f.equals) || f.equals.some(x => typeof x !== "string" && typeof x !== "number"))) {
									found = true;
									msg.push(`Filter has bad "equals" prop in ${prop}.tables[${i}]`);
									return true;
								} else if (f.has && (!Array.isArray(f.has) || f.has.some(x => typeof x !== "string"))) {
									found = true;
									msg.push(`Filter has bad "has" prop in ${prop}.tables[${i}]`);
									return true;
								} else if (f.labels && (!Array.isArray(f.labels) || f.labels.some(x => typeof x !== "string"))) {
									found = true;
									msg.push(`Filter has bad "labels" prop in ${prop}.tables[${i}]`);
									return true;
								}
								return false;
							})
						)
					) {
						if(!found) {
							msg.push(`Bad filter property at ${prop}.tables[${i}]`);
						}
						return true;
					} else if (
						sizes !== undefined && (
							Array.isArray(sizes) ?
								sizes.length !== types.length
								|| sizes.some(size => typeof size !== "number")
							: typeof sizes !== "number"
						)
					) {
						found = true;
						msg.push(`Error with sizes property at ${prop}.tables[${i}]`)
						return true;
					} else if (data.some((line, j) => {
						if(
							!Array.isArray(line)
							|| line.length !== headers.length
							|| line.some((bit, k) => {
								if(
									bit !== null
									&& typeof bit !== "string"
									&& typeof bit !== "number"
									&& (
										!Array.isArray(bit)
										|| (
											bit.length === 2 ? (
												typeof bit[1] !== "string"
												|| (
												typeof bit[0] !== "string"
													&& typeof bit[0] !== "number"
												)
											) : (
												bit.length === 3 ? (
													typeof bit[2] !== "string"
													|| typeof bit[1] !== "string"
												) : true
											)
										)
									)
								) {
									found = true;
									msg.push(`Invalid "main" entry at ${prop}.tables[${i}][${j}][${k}] -> ${line}`);
									return true;
								}
							})
						) {
							found || msg.push(`Invalid "main" entry at ${prop}.tables[${i}][${j}] -> ${line}`);
							found = true;
							return true;
						}
					})) {
						return true;
					}
				}
				return false;
			})) {
				return true;
			}
		}
		return false;
	})) {
		msg.push("Test passed.");
	} else { found = true; }
	return [found, "rules", msg];
}

// isGood(rules);

const rulesTest = () => isGood(rules);

export default rulesTest;
