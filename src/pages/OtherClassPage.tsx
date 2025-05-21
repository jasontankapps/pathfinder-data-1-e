import { ReactElement } from 'react';
import { useLocation, useParams } from 'wouter';
import { SourceProp } from '../components/SourcesModal';
import npcclasses from './subpages/__npcclass';
import sidekicks from './subpages/__sidekick';
import BasicPage from './BasicPage';
import './Page.css';

const classes = {...npcclasses, ...sidekicks};

type Data = typeof classes;

type Params = { id?: keyof Data };

interface JsonDataPropsClass {
	hasJL?: boolean
	title: string,
	jsx: ReactElement,
	sources: SourceProp[],
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
		sources,
		notBookmarkable
	} = (classes[solidId] as JsonDataPropsClass);

	const pageId = ((m && m[0]) || "/otherclasses/") + id;

	return (
		<BasicPage
			hasJL={hasJL}
			title={title}
			sources={sources}
			pageId={pageId}
			notBookmarkable={notBookmarkable}
		>{jsx}</BasicPage>
	);
};

export default OtherClassPage;
