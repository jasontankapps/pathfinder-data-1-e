import { FC } from 'react';
import Link from './Link';

interface BaseProps {
	type?: string
	n: 2 | 3 | 4 | 5 | 6
	p?: number
	c: string
	pl?: boolean
	link?: boolean
}

interface Male {
	m: boolean
	f?: never
	y?: never
	t?: never
	a?: never
	an?: never
}
interface Female {
	f: boolean
	m?: never
	y?: never
	t?: never
	a?: never
	an?: never
}
interface You {
	y: boolean
	m?: never
	f?: never
	t?: never
	a?: never
	an?: never
}
interface The {
	t: boolean
	m?: never
	f?: never
	y?: never
	a?: never
	an?: never
}
interface A {
	a: boolean
	m?: never
	f?: never
	y?: never
	t?: never
	an?: never
}
interface An {
	an: boolean
	m?: never
	f?: never
	y?: never
	t?: never
	a?: never
}
type Gender = Male | Female | You | The | A | An;

type BonusProps = BaseProps & Gender;

const Bonus: FC<BonusProps> = (props) => {
	// Bonus equal to fraction of level
	//  @B-(identifier-)?#[mfy]p?#?-class(-x)?
	//  @B-3m-cleric => This bonus...one-third of his cleric level (linked to misc/one_third)
	//  @B-3yp-cleric => These bonuses...one-third of your cleric level (linked to misc/one_third)
	//  @B-3f1-cleric-x => This bonus...1 + one-third of her cleric level (no link)
	//  @B-number-3f-cleric-x => This number...one-third of her cleric level (no link)
	// _ in the class gets transformed into a space
	const {
		type,
		n, p = 0,
		pl, c,
		link = true,
		f, m, y, t, a, an
	} = props;
	const pre = (pl ? `These ${type || "bonuses"} are` : `This ${type || "bonus"} is`) + " equal to ";
	const fraction = n === 2 ? "half" : `one-${
		n === 3 ? "third" : (
			n === 4 ? "fourth" : (
				n === 5 ? "fifth" : "sixth"
			))
	}`;
	const maybeLink = link ? <Link to={"/misc/" + fraction.replace("-", "_")}>{fraction}</Link> : fraction;
	const plus = p ? `${p} + ` : "";
	const poss = (
		f ? "her" : (
			y ? "your" : (
				m ? "his" : (
					t ? "the" : (
						a ? "a" : (
							an ? "an" : "ERROR"
						)
					)
				)
			)
		)
	);
	// the/a/an should indicate possessive
	const apos = (t || a || an) ? "'s" : "";
	return (
		<>{pre}{plus}{maybeLink} of {poss} {c}{apos} level</>
	);
};

export default Bonus;
