import main1 from '../json/main.json' assert {type: 'json'};
import main2 from '../json/main02.json' assert {type: 'json'};
import main3 from '../json/main03.json' assert {type: 'json'};
import main4 from '../json/main04.json' assert {type: 'json'};
import main5 from '../json/main05.json' assert {type: 'json'};
import main6 from '../json/main06.json' assert {type: 'json'};
import main7 from '../json/main07.json' assert {type: 'json'};
import main8 from '../json/main08.json' assert {type: 'json'};
import main9 from '../json/main09.json' assert {type: 'json'};
import main10 from '../json/main10.json' assert {type: 'json'};
import main11 from '../json/main11.json' assert {type: 'json'};
import main12 from '../json/main12.json' assert {type: 'json'};
import main13 from '../json/main13.json' assert {type: 'json'};
import main14 from '../json/main14.json' assert {type: 'json'};
import main15 from '../json/main15.json' assert {type: 'json'};
import main16 from '../json/main16.json' assert {type: 'json'};
import main17 from '../json/main17.json' assert {type: 'json'};
import main18 from '../json/main18.json' assert {type: 'json'};
import main19 from '../json/main19.json' assert {type: 'json'};
import main20 from '../json/main20.json' assert {type: 'json'};
import main21 from '../json/main21.json' assert {type: 'json'};

const main = {
	...main1, ...main2, ...main3, ...main4, ...main5,
	...main6, ...main7, ...main8, ...main9, ...main10,
	...main11, ...main12, ...main13, ...main14, ...main15,
	...main16, ...main17, ...main18, ...main19, ...main20,
	...main21
};

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
