const tableIds = {};

// checkForBadTables(tables array, property name) => false | string
//   returns false or a non-empty string describing the first problem found
const checkForBadTables = (tables, objectDescription) => {
	let found = false;
	const foundError = tables && (
		!Array.isArray(tables)
		|| tables.some((table, ti) => {
			const tableDesc = `${objectDescription}.tables[${ti}]`;
			const checkExact = [];
			const checkHas = [];
			if(typeof table !== "object") {
				found = `Non-object table at ${tableDesc}`;
				return true;
			} else {
				const { id, columns, data, initialColumn, nullValue, filter } = table;
				if(
					typeof id !== "string"
					|| typeof initialColumn !== "number"
					|| !Array.isArray(columns)
					|| !Array.isArray(data)
					|| (nullValue && typeof nullValue !== "string")
				) {
					found = `Simple table error at ${tableDesc}`;
					return true;
				} else if (tableIds[id]) {
					found = `Duplicate table id ${id} in ${tableDesc} (originally in ${tableIds[id]})`;
					return true;
				} else if (
					// Save id and continue to check
					(tableIds[id] = tableDesc) && (
						// Check headers and types
						columns.some(col => {
							const {header, type, unsortable, align, size, ripple} = col;
							let bad = '';
							if(!header) {
								bad = "missing 'header' property"
							} else if (type && ["gp", "gp+", "lbs", "lbs+", "bonus", "num", "pct"].indexOf(type) === -1) {
								bad = `bad 'type' property "${type}"`
							} else if (unsortable !== undefined && unsortable !== false && unsortable !== true) {
								bad = "bad 'unsortable' property";
							} else if (ripple !== undefined && ripple !== false && ripple !== true) {
								bad = "bad 'ripple' property";
							} else if (align !== undefined && align !== "start" && align !== "end") {
								bad = `bad 'align' property "${align}"`
							} else if (size !== undefined && (typeof size !== "number" || size <= 0)) {
								bad = `bad 'size' property [${size}]`;
							}
							if(bad) {
								found = `Column error at ${tableDesc} (${id}): ${bad}`;
								return true;
							}
						})
					)
				) {
					// found already set
					return true;
				} else if (
					// Check filters
					filter && (
						!Array.isArray(filter)
						|| filter.some((f, fi) => {
							if(!f || typeof f !== "object") {
								return true;
							}
							const { col, range, equals, has, word, labels } = f;
							if (col === undefined || typeof col !== "number" || parseInt(col) !== col || col < 0 || col >= columns.length) {
								found = `Missing or invalid "col" prop in ${tableDesc}.filter[${fi}]`;
								return true;
							} else if (word !== undefined && (!has || range || equals || (word !== false && word !== true))) {
								found = `Bad "word" prop in ${tableDesc}.filter[${fi}]`;
								return true;
							} else if (range) {
								if (!Array.isArray(range)
									|| range.length !== 2
									|| range.some(s => typeof(s) !== "number")
									|| range[0] >= range[1]
								) {
									found = `Incorrect "range" prop in ${tableDesc}.filter[${fi}]`;
									return true;
								}
								let min = range[0];
								const max = range[1];
								const checking = [fi, col];
								while(min <= max) {
									checking.push(min++);
								}
								checkExact.push(checking);
							} else if (equals && (!Array.isArray(equals) || equals.some(x => typeof x !== "string" && typeof x !== "number"))) {
								found = `Bad "equals" prop in ${tableDesc}.filter[${fi}]`;
								return true;
							} else if (equals) {
								checkExact.push([fi, col, ...equals]);
							} else if (has && (!Array.isArray(has) || has.some(x => typeof x !== "string"))) {
								found = `Bad "has" prop in ${tableDesc}.filter[${fi}]`;
								return true;
							} else if (has) {
								checkHas.push([fi, col, ...has]);
							} else {
								// Does not have range or equals or has??
								found = `Missing a "range", "equals", or "has" prop in ${tableDesc}.filter[${fi}]`;
								return true;
							}
							if (labels && (!Array.isArray(labels) || labels.some(x => typeof x !== "string"))) {
								found = `Bad "labels" prop in ${tableDesc}.filter[${fi}]`;
								return true;
							} else if (labels && labels.length !== (
								range ? (range[1] - range[0] + 1) : (
									equals ? equals.length : has.length
								)
							)) {
								found = `Extra or missing "labels" in ${tableDesc}.filter[${fi}]`;
								return true;
							}
							return false;
						})
					)
				) {
					found = found || `Bad filter property at ${tableDesc} (${id})`;
					return true;
				} else if (data.some((line, j) => {
					const correspondingType = columns.map(col => ["gp", "gp+", "lbs", "lbs+", "bonus", "num", "pct"].indexOf(col.type) === -1 ? "string" : "number");
					// Check data
					if(
						!Array.isArray(line)
						|| line.length !== columns.length
						|| line.some((bit, k) => {
							if(
								bit !== null
								&& typeof bit !== correspondingType[k]
								&& (
									!Array.isArray(bit)
									|| bit.length !== 2
									|| typeof bit[1] !== "string"
									|| typeof bit[0] !== correspondingType[k]
								)
							) {
								found = `Type mismatch at ${tableDesc}.data[${j}][${k}] (expecting ${correspondingType[k]})-> ${line}`;
								return true;
							}
						})
					) {
						found = found || `Invalid entry at ${tableDesc}.data[${j}] -> ${line}`;
						return true;
					}
				})) {
					return true;
				}
				// Went through table unscathed. Now doublecheck filters
				if(
					filter && (
						checkExact.some(equals => {
							const [fi, col, ...etc] = equals;
							const targets = data.map(d => Array.isArray(d[col]) ? d[col][0] : d[col]);
							const missing = [];
							etc.forEach(e => {
								if(targets.every(t => t !== e)) {
									missing.push(e);
								}
							});
							if(missing.length === 0) {
								return false;
							}
							found = `${tableDesc}.filter[${fi}] (${id}) doesn't exactly match any of [${missing.join(", ")}] in column ${col}`;
							return true;
						})
						|| checkHas.some(has => {
							const [fi, col, ...etc] = has;
							const targets = data.map(d => Array.isArray(d[col]) ? d[col][0] : d[col]);
							const missing = [];
							etc.forEach(e => {
								if(targets.every(t => String(t).indexOf(e) === -1)) {
									missing.push(e);
								}
							});
							if(missing.length === 0) {
								return false;
							}
							found = `${tableDesc}.filter[${fi}] (${id}) doesn't match any of [${missing.join(", ")}] in column ${col}`;
							return true;
						})
					)
				) {
					return true;
				}
			}
			return false;
		})
	);
	if(!foundError) {
		return false;
	}
	return found || `Basic problem with ${objectDescription}.tables`;
};

export default checkForBadTables;
