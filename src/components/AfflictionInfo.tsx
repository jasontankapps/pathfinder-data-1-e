import { IonIcon } from '@ionic/react';
import { PropsWithChildren, FC, ReactNode, useContext } from 'react';
import { ThLink } from './Link';
import ScrollContainer from './ScrollContainer';
import { IdContext } from './contexts';

interface AffInfoProps {
	start?: boolean

	type?: string
	poison?: boolean
	curse?: boolean
	infest?: boolean
	disease?: boolean

	save: string
	freq?: string
	onset?: string
	track?: ReactNode
	track2?: string

	eff?: ReactNode
	eff1?: ReactNode
	eff2?: ReactNode

	cure?: ReactNode
	cure1?: boolean
	cure2?: boolean
	cure2c?: boolean
	cure3?: boolean
	cure3c?: boolean

	extra?: ReactNode
	icon: "a" | "i" | "c" | "d" | "p"
	nolink?: boolean
}

// This needs to split off into poison, curse, disease, infestation, or else plain affliction

export const AffInfo: FC<PropsWithChildren<AffInfoProps>> = (props) => {
	const {
		start, children, type, poison, curse, infest, disease,
		save, onset, freq, track, track2, eff, eff1, eff2,
		cure, cure1, cure2, cure2c, cure3, cure3c,
		extra, icon, nolink
	} = props;
	const cId = useContext(IdContext);
	let supertype = poison ? "Poison" : curse ? "Curse" : infest ? "Infestation" : disease ? "Disease" : "";
	if(type && supertype) {
		supertype += "; " + type;
	} else if (type) {
		supertype = type;
	} else if (!supertype) {
		supertype = "Affliction";
	}
	const cureLine = cure || (
		cure1 ? "1 save" : (
			cure2 ? "2 saves" : (
				cure2c ? "2 consecutive saves" : (
					cure3 ? "3 saves" : (
						cure3c ? "3 consecutive saves" : ""
					)
				)
			)
		)
	);
	let ico = "";
	let label = "";
	let link = "";
	switch(icon) {
		case "p": {
			ico = "poison-bottle.svg";
			label = "Poison";
			link = "/rule/poison";
			break;
		}
		case "d": {
			ico = "paramecia.svg";
			label = "Disease";
			link = "/rule/diseases";
			break;
		}
		case "c": {
			ico = "death-note.svg";
			label = "Curse";
			link = "/rule/curses";
			break;
		}
		case "i": {
			ico = "infested-mass.svg";
			label = "Infestation";
			link = "/rule/infestations";
			break;
		}
		default: {
			ico = "tumor.svg";
			label = "Affliction";
			link = "/rule/afflictions";
		}
	}
	const rows = 2
		+ (children ? 1 : 0)
		+ (freq ? (
			1 + ((onset || track) ? 1 : 0) + (track ? 1 : 0) + (track2 ? 1 : 0)
		) : 0)
		+ (eff ? 1 : 0)
		+ ((eff1 && eff2) ? 2 : 0)
		+ (cureLine ? 1 : 0)
		+ (extra ? 1 : 0);
	const iconLine = nolink ? (
		<th scope="row" rowSpan={rows}><IonIcon aria-label={label} icon={"/icons/" + ico} /></th>
	) : (
		<ThLink scope="row" rowSpan={rows} to={link}>
			<IonIcon aria-label={label} icon={"/icons/" + ico} />
		</ThLink>
	);
	const id = `${cId}-${supertype.toLowerCase().replace(/[^-a-z_0-9]/g, "")}-scrollwrap`;
	return (
		<div className={"sideNoteWrap" + (start ? " startAlign" : "")}><ScrollContainer id={id}>
			<table><tbody>
				{children ? <tr>{iconLine}<th colSpan={4} scope="col" className="title">{children}</th></tr> : ""}
				<tr>{children ? "" : iconLine}<th scope="row">Type</th><td colSpan={3}>{supertype}</td></tr>
				<tr><th scope="row">Save DC</th><td colSpan={3}>{save}</td></tr>
				{freq ? (<>
					{(onset || track) ? (
						<tr><th scope="row">Onset</th><td colSpan={3}>{onset || "immediate"}</td></tr>
					) : ""}
					<tr><th scope="row">Frequency</th><td colSpan={3}>{freq}</td></tr>
					{track ? (
						<tr><th scope="row">Track</th><td colSpan={3}>{track}</td></tr>
					) : ""}
					{track2 ? (
						<tr><th scope="row">Track</th><td colSpan={3}>{track2}</td></tr>
					) : ""}
				</>) : ""}
				{eff ? (
					<tr><th scope="row">Effect</th><td colSpan={3}>{eff}</td></tr>
				) : ((eff1 && eff2) ? (<>
					<tr><th scope="row">Initial Effect</th><td colSpan={3}>{eff1}</td></tr>
					<tr><th scope="row">Secondary Effect</th><td colSpan={3}>{eff2}</td></tr>
				</>) : "")}
				{cureLine ? (
					<tr><th scope="row">Cure</th><td colSpan={3}>{cureLine}</td></tr>
				) : ""}
				{extra ? (
					<tr><td colSpan={4}>{extra}</td></tr>
				) : ""}
			</tbody></table>
		</ScrollContainer></div>
	);
};

export default AffInfo
