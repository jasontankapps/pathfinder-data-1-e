import { IonIcon } from '@ionic/react';
import { PropsWithChildren, FC, useContext, ReactNode } from 'react';
import { IdContext } from './contexts';
import { ThLink } from './Link';
import ScrollContainer from './ScrollContainer';

interface BaseProps {
	id: string
	eff: ReactNode
	cr: string
	trigger: string
	pdc: string
	dddc: string
	terrain?: string
	magic?: boolean
	automatic?: boolean
	repair?: boolean
	manual?: boolean
	start?: boolean
}

type TrapInfoProps = BaseProps;

export const TrapInfo: FC<PropsWithChildren<TrapInfoProps>> = (props) => {
	const {
		start, children, id, eff, trigger, pdc, dddc, terrain, cr,
		magic, automatic, repair, manual
	} = props;
	const rows = 4 + (children ? 1 : 0) + (terrain ? 1 : 0);
	const icon = <ThLink scope="row" rowSpan={rows} to="/rule/elements_of_a_trap"><IonIcon aria-label="Trap" icon="/icons/wolf-trap.svg" /></ThLink>;
	const cId = useContext(IdContext) + id;
	const reset = automatic ? "automatic" : (repair ? "repair" : (manual ? "manual" : "none"));
	return (
		<div className={"sideNoteWrap" + (start ? " startAlign" : "")}><ScrollContainer id={cId + "-trap-scrollwrap"}>
			<table><tbody>
				{children ? <tr>{icon}<th colSpan={4} scope="col" className="title">{children}</th></tr> : ""}
				<tr>{children ? "" : icon}
					<th id={cId + "-type"}>Type</th><td headers={cId + "-type"}>{magic ? "magic" : "mechanical"}</td>
					<th id={cId + "-cr"}>CR</th><td headers={cId + "-cr"}>{cr}</td>
				</tr>
				{terrain ? <tr><th scope="row">Terrain</th><td colSpan={3}>{terrain}</td></tr> : ""}
				<tr>
					<th id={cId + "-pdc"}>Perception DC</th><td headers={cId + "-pdc"}>{pdc}</td>
					<th id={cId + "-dddc"}>Disable Device DC</th><td headers={cId + "-dddc"}>{dddc}</td>
				</tr>
				<tr>
					<th id={cId + "-trigger"}>Trigger</th><td headers={cId + "-trigger"}>{trigger}</td>
					<th id={cId + "-reset"}>Reset</th><td headers={cId + "-reset"}>{reset}</td>
				</tr>
				<tr><th scope="row">Effect</th><td colSpan={3}>{eff}</td></tr>
			</tbody></table>
		</ScrollContainer></div>
	);
};

export default TrapInfo
