import { basic_data_by_link } from '../basic_data_groups.js';

const { main } = basic_data_by_link;

function isGood(value) {
	const msg = [ "\n...beginning test: [main]\n" ];
	let found = false;
	if(!Object.entries(value).some(([prop, value]) => {
		const test = value;
		if(
			!test
			|| typeof test !== "object"
			|| typeof test.title !== "string"
			|| !Array.isArray(test.description)
			|| test.description.some(line => {
				if(!line || typeof line === "string") {
					return false;
				} else if (!Array.isArray(line)) {
					return true;
				}
				return line.some(inner => typeof inner !== "string");
			})
			|| (test.previous && (
				!Array.isArray(test.previous)
				|| test.previous.some((pair, i) => {
					if (
						!Array.isArray(pair) || pair.length !== 2
						|| typeof pair[0] !== "string"
						|| typeof pair[1] !== "string"
					) {
						found = true;
						msg.push(`Bad info at ${prop}.previous[${i}]`);
						return true;
					}
				})
			))
			|| (test.tables && (
				!Array.isArray(test.tables)
				|| test.tables.some((table, i) => {
					if(typeof table !== "object") {
						found = true;
						msg.push(`Non-object table at ${prop}.tables[${i}]`)
						return true;
					} else {
						const { id, headers, types, alignments, data, sizes, initialColumn, nullValue, filter } = table;
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
				})
			))
		) {
			found || msg.push(`Basic problem with ${prop}`);
			found = true;
			return true;
		}
		return false;
	})) {
		msg.push("Test passed.");
	} else { found = true; }
	return [found, "\"Main\" files", msg];
}

// isGood(main);

const mainTest = () => isGood(main);

export default mainTest;
