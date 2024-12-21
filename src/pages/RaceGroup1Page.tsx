import getItem from '../components/getItem';
import races from './subpages/__race1';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Races", "main/races"]];

type Data = typeof races;

interface RaceProps {
	id: string,
};

const RaceGroup1Page: React.FC<RaceProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem((id as keyof Data), races);

	const pageId = "race--" + id;

	return (
		<BasicPage
			hasJL={hasJL}
			pageId={pageId}
			title={title}
			hierarchy={[...hierarchy, ...subhierarchy]}
			sources={sources}
		>{jsx}</BasicPage>
	);
};

export default RaceGroup1Page;
