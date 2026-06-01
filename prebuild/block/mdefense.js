import noteTags from "../noteTags.js";

const clean = (bit) => bit.replace(/‹[-a-z_]+[/]([^›]+)›/g, "$1").replace(/[^-a-zA-Z_ 0-9]/g, "");

const makeMonsterDefenseBlock = ({marked2, flags, convertEncodedInfo, maybeClear, attrs, id, logError}) => {
	const {
		ac, mod,
		hp, hpRaw, fh, regen,
		fort, ref, will,
		chanRes, fortif, split, ink, pBlood, trapS,
		unstop, blockAt, rockCt, secSave,
		ferocity, amorph, aav, incorp, noB,
		eva, impEva, unc, impUnc,
		def, dr, immune, resist, sr,
		weak, vulner
	} = attrs;
	const output = [];
	const doConvert = (input, stringify = true) => noteTags(flags, marked2.parseInline(convertEncodedInfo(input)), stringify);
	let flag = true;
	const log = (...args) => {
		logError(...args);
		flag = false;
	};
	//
	// AC LINE
	//
	if(ac) {
		const [all, touch, ff] = `${ac}//`.split("/").slice(0,3).map(bit => {
			const x = Number(bit);
			if(bit && x !== x) {
				//NaN
				log(`Bad AC bit: [${bit}]`);
			}
			return x === 0 ? x : Math.round(x || -500);
		});
		if(all === -500 || touch === -500 || ff === -500) {
			log(`Bad AC: [${ac}]`);
		} else {
			output.push(`ac={[${all},${touch},${ff}]}`);
			mod && output.push(`mod="${mod}"`);
		}
	} else {
		log("Missing AC");
	}
	//
	// HP LINE
	//
	if(hp || hpRaw) {
		if(hpRaw) {
			output.push(`hpRaw="${hpRaw}"`);
		} else {
			const [a, b, c, d] = `${hp}~~~`.split("~").slice(0,4);
			const x = Number(a);
			const y = c ? Number(c) : null;
			const z = d ? Number(d) : null;
			if(!a || !b || x !== x || y !== y || z !== z) {
				log(`Bad hp: [${hp}]`);
			} else {
				const final = [Math.round(a), b];
				if(y !== null) {
					final.push(Math.round(y));
					(z !== null) && final.push(Math.round(z));
				} else if (z !== null) {
					final.push(null, Math.round(z));
				}
				output.push(`hp={${JSON.stringify(final)}}`);
				if(fh) {
					output.push(`fh="${fh}"`);
				}
				if(regen) {
					output.push(`regen="${regen}"`);
				}
			}
		}
	} else {
		log("Missing hp");
	}
	//
	// SAVING THROWS LINE
	//
	if(fort) {
		output.push(`fort="${fort}"`);
	} else {
		log("Missing fortitude save");
	}
	if(ref) {
		output.push(`ref="${ref}"`);
	} else {
		log("Missing reflex save");
	}
	if(will) {
		output.push(`will={${doConvert(String(will))}}`.replace(/\{"([^"]+)"\}/g, '"$1"'));
	} else {
		log("Missing will save");
	}
	//
	// DEFENSES LINE
	//
	let line = "";
	const deff = [];
	if(def) {
		output.push(`def={[${def.split("~").map(
			bit => `["${clean(bit)}",${doConvert(bit)}]`
		).join(",")}]}`);
	}
	if(chanRes) {
		output.push(`chanRes="${chanRes}"`);
	}
	if(fortif) {
		const f = Number(fortif);
		if(f !== f) {
			// NaN
			log(`Bad fortif: [${fortif}]`);
		} else {
			output.push(`fortif={${Math.round(f)}}`);
		}
	}
	if(split) {
		output.push(`split="${split}"`);
	}
	if(ink) {
		const i = Number(ink);
		if(i !== i) {
			// NaN
			log(`Bad ink: [${ink}]`);
		} else {
			output.push(`ink={${Math.round(i)}}`);
		}
	}
	if(pBlood) {
		output.push(`pBlood="${pBlood}"`);
	}
	if(trapS) {
		output.push(`trapS="${trapS}"`);
	}
	if(unstop) {
		output.push("unstop");
	}
	if(blockAt) {
		output.push("blockAt");
	}
	if(rockCt) {
		output.push("rockCt");
	}
	if(secSave) {
		output.push("secSave");
	}
	if(ferocity) {
		output.push("ferocity");
	}
	if(amorph) {
		output.push("amorph");
	}
	if(aav) {
		output.push("aav");
	}
	if(incorp) {
		output.push("incorp");
	}
	if(noB) {
		output.push("noB");
	}
	if(eva) {
		output.push("eva");
	}
	if(unc) {
		output.push("unc");
	}
	if(impEva) {
		output.push("impEva");
	}
	if(impUnc) {
		output.push("impUnc");
	}
	if(dr) {
		output.push(`dr={${doConvert(dr)}}`.replace(/\{"([^"]+)"\}/g, '"$1"'));
	}
	if(immune) {
		output.push(`immune={${doConvert(immune)}}`.replace(/\{"([^"]+)"\}/g, '"$1"'));
	}
	if(resist) {
		output.push(`resist={${doConvert(resist)}}`.replace(/\{"([^"]+)"\}/g, '"$1"'));
	}
	if(sr) {
		output.push(`sr="${sr}"`);
	}
	//
	// WEAKNESSES LINE
	//
	const w = [];
	// SORT BEFORE SENDING, then ignore the sortable bits
	if(vulner) {
		w.push([`vulnerable to ${clean(vulner)}`, `‹umr/vulnerable› to ${vulner}`]);
	}
	if(weak) {
		weak.split("~").forEach(bit => w.push([clean(bit), bit]));
	}
	if(w.length > 0) {
		w.sort((a, b) => a[0].localeCompare(b[0]));
		output.push(`weak={[${w.map(bit => doConvert(bit[1])).join(",")}]}`);
	}
	if(flag) {
		return `${maybeClear}<Defense id="${id}" ${output.join(" ")} />\n`;
	}
	return "<Header sub>Defense</Header><p><em>Error.</em></p>\n";
};

export default makeMonsterDefenseBlock;
