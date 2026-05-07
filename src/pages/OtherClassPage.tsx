import { ReactElement } from 'react';
import { useLocation, useParams } from 'wouter';
import npcclasses from './subpages/_GEN_npcclass';
import sidekicks from './subpages/_GEN_sidekick';
import BasicPage from './BasicPage';
import './css/Page.css';

const classes = {...npcclasses, ...sidekicks};

type Data = typeof classes;

type Params = { id?: keyof Data };

interface JsonDataPropsClass {
	hasJL?: boolean
	title: string,
	jsx: ReactElement,
	notBookmarkable?: boolean
}

const OtherClassPage: React.FC = () => {

	const { id } = useParams<Params>();

	const [ path ] = useLocation();

	const m = path.match(/^[/](sidekick|npcclass)[/]/)

	const solidId = (id && classes[id] ? id : "not_found") as keyof Data;

	const {
		hasJL,
		title,
		jsx,
		notBookmarkable
	} = (classes[solidId] as JsonDataPropsClass);

	const pageId = ((m && m[0]) || "/otherclasses/") + id;

	return (
		<BasicPage
			hasJL={hasJL}
			title={title}
			pageId={pageId}
			notBookmarkable={notBookmarkable}
		>{jsx}</BasicPage>
	);
};

export default OtherClassPage;
