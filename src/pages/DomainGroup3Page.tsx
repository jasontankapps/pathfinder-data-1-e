import { getGuaranteedItem } from '../components/getItem';
import { Hierarchy } from '../types';
import domains from './subpages/_GEN_domain3';
import BasicPage from './BasicPage';
import './css/Page.css';

type Data = typeof domains;

interface DomainProps {
	id: string,
};

const topLink: Hierarchy = ["Domains", "ability/domains"];

const DomainGroup3Page: React.FC<DomainProps> = ({id}) => {

	const { hasJL, title, jsx, notBookmarkable } = getGuaranteedItem<Data>((id as keyof Data), domains);

	return <BasicPage
		hasJL={hasJL}
		pageId={"/domain/" + id}
		title={title}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default DomainGroup3Page;
