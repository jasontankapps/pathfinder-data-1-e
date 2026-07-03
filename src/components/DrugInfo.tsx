import { PropsWithChildren, FC, useContext, ReactNode } from 'react';
import { IdContext } from './contexts';
import Link, { ThLink } from './Link';
import { IonIcon } from '@ionic/react';

interface DrugInfoProps {
	start?: boolean
	type: string
	addict: string
	dc: number
	gp: number
	eff1?: ReactNode
	eff2?: ReactNode
	dmg: [string, ...string[]]
}

export const DrugInfo: FC<PropsWithChildren<DrugInfoProps>> = (props) => {
	const {start, children, type, addict, dc, gp, eff1, eff2, dmg} = props;
	const id = useContext(IdContext);
	let cost = "";
	if(Math.floor(gp) === gp) {
		cost = `${gp} gp`;
	} else {
		const sp = gp * 10;
		if (Math.floor(sp) === sp) {
			cost = `${sp} sp`;
		} else {
			cost = `${sp * 10} cp`;
		}
	}
	const damage = [...dmg];
	const last = damage.pop()!;
	let damageLine = "";
	if(damage.length === 1) {
		damageLine = `${damage[0]} and ${last}`;
	} else if(damage.length > 1) {
		damageLine = `${damage.join(", ")}, and ${last}`;
	} else if(last) {
		damageLine = last;
	} else {
		damageLine = `MISSING`;
	}
	const rows = 3 + (eff1 ? 1 : 0) + (eff2 ? 1 : 0) + (children ? 1 : 0);
	const icon = <ThLink scope="row" rowSpan={rows} to="/rule/drugs"><IonIcon aria-label="Drug" icon="/icons/syringe.svg" /></ThLink>;
	return (
		<div className={"sideNoteWrap" + (start ? " startAlign" : "")}>
			<table><tbody>
				{children ? <tr>{icon}<th colSpan={4} scope="col" className="title">{children}</th></tr> : ""}
				<tr>{children ? "" : icon}<th id={id + "type"}>Type</th><td headers={id + "type"}>{type}</td><th id={id + "addict"}>Addiction</th><td headers={id + "addict"}>{addict}, Fortitude DC {dc}</td></tr>
				<tr><th scope="row">Price</th><td colSpan={3}>{cost}</td></tr>
				{ eff1 ? <tr><th scope="row">Effect</th><td colSpan={3}>{eff1}</td></tr> : ""}
				{ eff2 ? <tr><th scope="row">Effect</th><td colSpan={3}>{eff2}</td></tr> : ""}
				<tr><th scope="row"><Link to="/rule/ability_damage">Damage</Link></th><td colSpan={3}>{damageLine}</td></tr>
			</tbody></table>
		</div>
	);
};

export default DrugInfo
