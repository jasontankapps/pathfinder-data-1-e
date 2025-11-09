import { PropsWithChildren, ReactElement } from 'react';
import { convertTextToLink } from '../components/convertLinks';
import Link from '../components/Link';
import { Gen, GenStrict, Hierarchy } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

interface BasicTalentProps {
	id: string
	hasJL?: boolean
	title: string
	prefix: string
	topLink?: Hierarchy
	topLinkInfo: GenStrict<string, Hierarchy>
	notBookmarkable?: boolean
	tree?: string[]
	things: Gen<string, string>
	addenda?: string[]
	addendaObj: GenStrict<string, string>
}

const BasicTalentPage: React.FC<PropsWithChildren<BasicTalentProps>> = (props) => {
	const {
		id,
		hasJL,
		title,
		prefix,
		topLink,
		topLinkInfo,
		notBookmarkable,
		tree,
		addenda,
		addendaObj,
		things,
		children
	} = props;

	const getAddenda = () => {
		const found: ReactElement[] = [];
		if(addenda) {
			addenda.forEach(bit => {
				if(addendaObj[bit]) {
					found.push(<aside key={`${id}-addenda:${bit}`}><p><em>{addendaObj[bit]}</em></p></aside>);
				}
			});
			if(found.length >= 1) {
				return <>{found}</>;
			}
		}
		return <></>;
	};

	const getTree = () => {
		if(tree) {
			const found: ReactElement[] = [];
			tree.forEach(bit => {
				const url = convertTextToLink(bit);
				found.push(<li key={`${id}-tree:${bit}`}><Link to={`/${prefix}/${url}`}>{bit}</Link></li>);
			});
			return (
				<section className="talentTree">
					<p>This {things[prefix] || prefix} is a prerequisite for:</p>
					<ul>{found}</ul>
				</section>
			);
		}
		return <></>;
	};

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={`/${prefix}/${id}`}
		topLink={topLink || topLinkInfo[prefix]}
		notBookmarkable={notBookmarkable}
	>
		{children}
		{(addenda && addendaObj) ? getAddenda() : <></>}
		{tree ? getTree() : <></>}
	</BasicPage>;
};

export default BasicTalentPage;
