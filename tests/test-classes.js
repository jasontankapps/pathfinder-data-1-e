import classes1 from '../src/json/classes.json' assert {type: 'json'};
import classes2 from '../src/json/classes2.json' assert {type: 'json'};
import classes3 from '../src/json/classes3.json' assert {type: 'json'};
import classes4 from '../src/json/classes4.json' assert {type: 'json'};

const classes = {
	...classes1, ...classes2, ...classes3, ...classes4
};

function isGood(value) {
	console.log("\n...beginning test\n");
	let found = false;
	if(Object.entries(value).some(([prop, value]) => {
		const test = value;
		if(
			!test
			|| typeof test !== "object"
			|| typeof test.name !== "string"
			|| !Array.isArray(test.description)
			|| test.description.some(line => typeof line !== "string")
			|| (test.tables && (
				!Array.isArray(test.tables)
				|| test.tables.some((table, i) => {
					if(typeof table !== "object") {
						found = true;
						console.log(`Non-object table at ${prop}.tables[${i}]`)
						return true;
					} else {
						const { id, headers, types, data, initialColumn, className, nullValue } = table;
						if(
							typeof id !== "string"
							|| typeof className !== "string"
							|| typeof initialColumn !== "number"
							|| !Array.isArray(headers)
							|| !Array.isArray(types)
							|| !Array.isArray(data)
							|| (nullValue && typeof nullValue !== "string")
						) {
							found = true;
							console.log(`Simple table error at ${prop}.tables[${i}]`)
							return true;
						} else if (
							headers.length !== types.length
							|| headers.some(header => typeof header !== "string")
							|| types.some(type => ["gp", "gp+", "lbs", "lbs+", "bonus", "num", null, 0].indexOf(type) === -1)
						) {
							found = true;
							console.log(`Header/type table error at ${prop}.tables[${i}]`)
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
											|| bit.length !== 2
											|| typeof bit[1] !== "string"
											|| (
												typeof bit[0] !== "string"
												&& typeof bit[0] !== "number"
										))
									) {
										found = true;
										console.log(`Invalid "classes" entry at ${prop}.tables[${i}][${j}][${k}] -> ${line}`);
										return true;
									}
								})
							) {
								found || console.log(`Invalid "classes" entry at ${prop}.tables[${i}][${j}] -> ${line}`);
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
			found || console.log(`Basic problem with ${prop}`);
			found = true;
			return true;
		}
		return false;
	})) {
		return;
	}
	console.log("Test passed.");
}

isGood(classes);
