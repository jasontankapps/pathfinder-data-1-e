import main1 from '../src/json/main.json' assert {type: 'json'};
import main2 from '../src/json/main02.json' assert {type: 'json'};
import main3 from '../src/json/main03.json' assert {type: 'json'};
import main4 from '../src/json/main04.json' assert {type: 'json'};
import main5 from '../src/json/main05.json' assert {type: 'json'};
import main6 from '../src/json/main06.json' assert {type: 'json'};
import main7 from '../src/json/main07.json' assert {type: 'json'};
import main8 from '../src/json/main08.json' assert {type: 'json'};
import main9 from '../src/json/main09.json' assert {type: 'json'};
import main10 from '../src/json/main10.json' assert {type: 'json'};
import main11 from '../src/json/main11.json' assert {type: 'json'};
import main12 from '../src/json/main12.json' assert {type: 'json'};
import main13 from '../src/json/main13.json' assert {type: 'json'};
import main14 from '../src/json/main14.json' assert {type: 'json'};
import main15 from '../src/json/main15.json' assert {type: 'json'};
import main16 from '../src/json/main16.json' assert {type: 'json'};
import main17 from '../src/json/main17.json' assert {type: 'json'};
import main18 from '../src/json/main18.json' assert {type: 'json'};
import main19 from '../src/json/main19.json' assert {type: 'json'};
import main20 from '../src/json/main20.json' assert {type: 'json'};
import main21 from '../src/json/main21.json' assert {type: 'json'};

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
											|| bit.length !== 2
											|| typeof bit[1] !== "string"
											|| (
												typeof bit[0] !== "string"
												&& typeof bit[0] !== "number"
										))
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
	}
	return msg;
}

// isGood(main);

const mainTest = () => isGood(main).join("\n");

export default mainTest;
