import { IonIcon } from '@ionic/react';
import { PropsWithChildren, FC, useContext, ReactNode } from 'react';
import { IdContext } from './contexts';
import { ThLink } from './Link';
import ScrollContainer from './ScrollContainer';

interface HauntInfoProps {
	id: string
	start?: boolean
	notice: string
	hp: string
	weak?: ReactNode
	trigger: string
	reset: string
}

export const HauntInfo: FC<PropsWithChildren<HauntInfoProps>> = (props) => {
	const {
		children, id, start, notice, hp, weak, trigger, reset
	} = props;
	const rows = 3 + (children ? 1 : 0);
	const icon = <ThLink scope="row" rowSpan={rows} to="/rule/elements_of_a_haunt"><IonIcon aria-label="Haunt" icon="/icons/ghost.svg" /></ThLink>;
	const cId = useContext(IdContext) + id;
	return (
		<div className={"sideNoteWrap" + (start ? " startAlign" : "")}><ScrollContainer id={cId + "-haunt-scrollwrap"}>
			<table><tbody>
				{children ? <tr>{icon}<th colSpan={4} scope="col" className="title">{children}</th></tr> : ""}
				<tr>{children ? "" : icon}<th scope="row" colSpan={2}>Notice</th><td colSpan={3}>{notice}</td></tr>
				{weak ? (
					<tr>
						<th id="${id}-hp">hp</th><td>{hp}</td>
						<th id="${id}-weak">Weaknesses</th><td colSpan={2}>{weak}</td>
					</tr>
				) : (
					<tr><th scope="row">hp</th><td colSpan={4}>{hp}</td></tr>
				)}
				<tr>
					<th id={cId + "-trigger"} colSpan={2}>Trigger</th><td headers={cId + "-trigger"}>{trigger}</td>
					<th id={cId + "-reset"}>Reset</th><td headers={cId + "-reset"}>{reset}</td>
				</tr>
			</tbody></table>
		</ScrollContainer></div>
	);
};

export default HauntInfo
