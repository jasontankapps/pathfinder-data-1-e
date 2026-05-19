import {FC, ReactNode, Fragment as F} from 'react';
import Header from '../Header';
import Link from '../Link';
import parseLoot from './parseLoot';


type NeverExcept<Type, K extends keyof Type> = Omit<Partial<{ [Property in keyof Type]: never }>, K> & Pick<Type, K>;
type TreasureKeys = "S" | "D" | "T" | "X" | "I" | "N";
type Treasure1 = { [key in TreasureKeys]?: string[][] | false} & { other: never };
type Treasure2 = { other?: ReactNode } & { [Property in TreasureKeys]?: never };
type Treasure = (
	Treasure2 | NeverExcept<Treasure1, "S"> | NeverExcept<Treasure1, "D">
	| NeverExcept<Treasure1, "T"> | NeverExcept<Treasure1, "X">
	| NeverExcept<Treasure1, "I"> | NeverExcept<Treasure1, "N">
) & { final?: ReactNode };
interface TreasureProps {
	t: Treasure
	id: string
}

interface EcoProps {
	id: string
	env: ReactNode
	org?: ReactNode
	treasure?: Treasure
}

const findTreasure = (t: Treasure): [string, string, false | string[][]] => {
	const {S, D, T, X, I, N} = t;
	let type = "";
	let link = "";
	let what: false | string[][] = false;
	if(S !== undefined) {
		type = "standard";
		what = S;
	} else if (D !== undefined) {
		type = "double";
		what = D;
	} else if (T !== undefined) {
		type = "triple";
		what = T;
	} else if (X !== undefined) {
		type = "none";
		what = X;
	} else if (I !== undefined) {
		type = "incidental";
		what = I;
	} else {
		type = "NPC gear";
		link = "npc_gear";
		what = N!;
	}
	link = link || type;
	return [type, link, what];
};

const Treasure: FC<TreasureProps> = (props) => {
	const {t, id} = props;
	const {other, final} = t;
	if(other) {
		return <p><strong>Treasure</strong> {other}</p>;
	}
	const [text, link, content] = findTreasure(t);
	if(!content) {
		return <p><strong>Treasure</strong> <Link to={"/rule/" + link}>{text}</Link></p>;
	}
	const found = parseLoot(content, id, true);
	return <p><strong>Treasure</strong> <Link to={
		"/rule/" + link
	}>{text}</Link> ({found}{
		final ? <>, {final}</> : ""
	})</p>;
};

const Ecology: FC<EcoProps> = (props) => {
	const {
		env, org, treasure, id
	} = props;
	return (
		<>
			<Header sub>Ecology</Header>
			<p><strong>Environment</strong> {env}</p>
			{org ? <p><strong>Organization</strong> {org}</p> : ""}
			{treasure ? <Treasure t={treasure} id={id} /> : ""}
		</>
	);
};

export default Ecology;
