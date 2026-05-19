import {FC, ReactNode} from 'react';

type NeverExcept<Type, K extends keyof Type> = Omit<Partial<{ [Property in keyof Type]: never }>, K> & Pick<Type, K>;

	interface SlaSpellListBase {
		constant?: boolean
		will?: boolean
		per?: "hour" | "week" | "month" | "year"
		day?: number
		other?: string
	}
type SlaSpellList = (
	NeverExcept<SlaSpellListBase, "constant">
	| NeverExcept<SlaSpellListBase, "will">
	| NeverExcept<SlaSpellListBase, "per">
	| NeverExcept<SlaSpellListBase, "day">
	| NeverExcept<SlaSpellListBase, "other">
) & { content: ReactNode };

interface BaseSpellInfoProps {
	con?: string
	cl: number
}
interface SlaProps extends BaseSpellInfoProps {
	sla?: string
	content: SlaSpellList[]
}

	interface PrepBase extends BaseSpellInfoProps {
		l6?: ReactNode
		l5?: ReactNode
		l4?: ReactNode
		l3?: ReactNode
		l2?: ReactNode
		l1?: ReactNode
	}
interface PreparedProps extends PrepBase {
	l9?: ReactNode
	l8?: ReactNode
	l7?: ReactNode
	l0?: ReactNode
	prep?: string
}
interface ExtractProps extends PrepBase {
	ex?: string
}

	type KnownLevel = [boolean | number, ReactNode];
interface KnownProps extends BaseSpellInfoProps {
	known?: string
	l9?: KnownLevel
	l8?: KnownLevel
	l7?: KnownLevel
	l6?: KnownLevel
	l5?: KnownLevel
	l4?: KnownLevel
	l3?: KnownLevel
	l2?: KnownLevel
	l1?: KnownLevel
	l0?: KnownLevel
}

interface PsyProps extends BaseSpellInfoProps {
	pe: number
	peP?: ReactNode
	content: ReactNode
}

interface BaseProps {
	id: string
}

interface Root {
	sla: SlaProps
	prep: PreparedProps
	ex: ExtractProps
	known: KnownProps
	psy: PsyProps
	other: [string, ReactNode[]]
}

type SpellBlockProps =
	(
		NeverExcept<Root, "sla">
		| NeverExcept<Root, "prep">
		| NeverExcept<Root, "ex">
		| NeverExcept<Root, "known">
		| NeverExcept<Root, "psy">
		| NeverExcept<Root, "other">
	) & BaseProps;

let $key = "";
const store = (input: string) => {
	$key = input;
};
const key = (input: string) => ($key + input);

const parseSLA = (block: SlaSpellList): string => {
	const {constant, will, per, day, other} = block
	if(constant) {
		return "Constant";
	} else if(will) {
		return "At will";
	} else if(per) {
		return "1/" + per;
	} else if(day !== undefined) {
		return `${day}/day`;
	}
	return other!;
};

const SpellBlock: FC<SpellBlockProps> = (props) => {
	const {id, sla, prep, ex, known, psy, other} = props;
	const output: ReactNode[] = [];
	if(sla) {
		store(id + "-SLA-");
		const {sla: title, content, cl, con} = sla;
		output.push(
			<p key={key("title")}><strong>{
				title ? title + " " : ""
			}Spell-Like Abilities</strong> (CL {cl}{
				con ? `; concentration ${con}` : ""
			})</p>
		);
		content.forEach(block => {
			const {content} = block;
			const title = parseSLA(block);
			output.push(
				<p key={key(title)} className="spells"><em>{title}</em>-{content}</p>
			);
		});
	} else if (prep) {
		store(id + "-prepared-");
		const {prep: p, l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, cl, con} = prep;
		output.push(
			<p key={key("title")}><strong>{
				p ? p + " " : ""
			}Spells Prepared</strong> (CL {cl}{
				con ? `; concentration ${con}` : ""
			})</p>
		);
		l9 && output.push(<p key={key("l9")} className="spells"><em>9th</em>-{l9}</p>);
		l8 && output.push(<p key={key("l8")} className="spells"><em>8th</em>-{l8}</p>);
		l7 && output.push(<p key={key("l7")} className="spells"><em>7th</em>-{l7}</p>);
		l6 && output.push(<p key={key("l6")} className="spells"><em>6th</em>-{l6}</p>);
		l5 && output.push(<p key={key("l5")} className="spells"><em>5th</em>-{l5}</p>);
		l4 && output.push(<p key={key("l4")} className="spells"><em>4th</em>-{l4}</p>);
		l3 && output.push(<p key={key("l3")} className="spells"><em>3rd</em>-{l3}</p>);
		l2 && output.push(<p key={key("l2")} className="spells"><em>2nd</em>-{l2}</p>);
		l1 && output.push(<p key={key("l1")} className="spells"><em>1st</em>-{l1}</p>);
		l0 && output.push(<p key={key("l0")} className="spells"><em>0 (at will)</em>-{l0}</p>);
	} else if (ex) {
		store(id + "-extracts-");
		const {ex: p, l1, l2, l3, l4, l5, l6, cl, con} = ex;
		output.push(
			<p key={key("title")}><strong>{
				p ? p + " " : ""
			}Extracts Prepared</strong> (CL {cl}{
				con ? `; concentration ${con}` : ""
			})</p>
		);
		l6 && output.push(<p key={key("l6")} className="spells"><em>6th</em>-{l6}</p>);
		l5 && output.push(<p key={key("l5")} className="spells"><em>5th</em>-{l5}</p>);
		l4 && output.push(<p key={key("l4")} className="spells"><em>4th</em>-{l4}</p>);
		l3 && output.push(<p key={key("l3")} className="spells"><em>3rd</em>-{l3}</p>);
		l2 && output.push(<p key={key("l2")} className="spells"><em>2nd</em>-{l2}</p>);
		l1 && output.push(<p key={key("l1")} className="spells"><em>1st</em>-{l1}</p>);
	} else if (known) {
		store(id + "-known-");
		const {known: p, l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, cl, con} = known;
		output.push(
			<p key={key("title")}><strong>{
				p ? p + " " : ""
			}Spells Known</strong> (CL {cl}{
				con ? `; concentration ${con}` : ""
			})</p>
		);
		l9 && output.push(<p key={key("l9")} className="spells"><em>9th ({l9[0]})</em>-{l9[1]}</p>);
		l8 && output.push(<p key={key("l8")} className="spells"><em>8th ({l8[0]})</em>-{l8[1]}</p>);
		l7 && output.push(<p key={key("l7")} className="spells"><em>7th ({l7[0]})</em>-{l7[1]}</p>);
		l6 && output.push(<p key={key("l6")} className="spells"><em>6th ({l6[0]})</em>-{l6[1]}</p>);
		l5 && output.push(<p key={key("l5")} className="spells"><em>5th ({l5[0]})</em>-{l5[1]}</p>);
		l4 && output.push(<p key={key("l4")} className="spells"><em>4th ({l4[0]})</em>-{l4[1]}</p>);
		l3 && output.push(<p key={key("l3")} className="spells"><em>3rd ({l3[0]})</em>-{l3[1]}</p>);
		l2 && output.push(<p key={key("l2")} className="spells"><em>2nd ({l2[0]})</em>-{l2[1]}</p>);
		l1 && output.push(<p key={key("l1")} className="spells"><em>1st ({l1[0]})</em>-{l1[1]}</p>);
		l0 && output.push(<p key={key("l0")} className="spells"><em>0 (at will)</em>-{l0[1]}</p>);
	} else if (psy) {
		store(`-psychic-`);
		const {cl, con, pe, peP, content} = psy;
		output.push(
			<p key={key("title")}><strong>Psychic Magic</strong> (CL {cl}{con ? `; concentration ${con}` : ""})</p>,
			<p key={key("content")} className="spells"><em>{pe} PE{peP ? ` (${peP})` : ""}</em>-{content}</p>
		);
	} else {
		const [title, content] = other;
		store(`-other-${title}-`);
		output.push(...content.map((bit, i) => (
			<p key={key(String(i))}>{bit}</p>
		)));
	}
	return output;
};

export default SpellBlock
