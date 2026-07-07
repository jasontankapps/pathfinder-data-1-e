import { PropsWithChildren, FC, useContext, ReactNode } from 'react';
import { IdContext } from './contexts';
import Link from './Link';
import ScrollContainer from './ScrollContainer';
import ordinal from './ordinal';
import getLink from './getLink';

type Spell = [number, string, string | false] | [number, string, string | false, ReactNode];

interface SpellInfoProps {
	id: string
	count?: number
	links: Spell[]
	extra?: ReactNode
}

export const SpellInfo: FC<PropsWithChildren<SpellInfoProps>> = (props) => {
	const {
		children, id,
		count, links, extra
	} = props;
	const cId = useContext(IdContext) + id + (count ? `-${count}` : "");
	return (
		<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id={cId + "-spelllist-scrollwrap"}>
			<table><tbody>
				{children ? <tr><th colSpan={2} scope="col" className="title">{children}</th></tr> : ""}
				{links.map(info => {
					const [c, text, link, parens] = info;
					const key = cId + `-${c}`;
					if(link) {
						return <tr key={key}><th scope="col">{ordinal(c)}</th><td>
							<Link to={getLink("spell/" + link)}>{text}</Link>{
								parens ? <> ({parens})</> : ""
							}
						</td></tr>;
					}
					return <tr key={key}><th scope="col">{ordinal(c)}</th><td><em>{text}</em>{
						parens ? <> ({parens})</> : ""
					}</td></tr>;
				})}
				{extra ? <tr><td colSpan={2}>{extra}</td></tr> : ""}
			</tbody></table>
		</ScrollContainer></div>
	);
};

export default SpellInfo
