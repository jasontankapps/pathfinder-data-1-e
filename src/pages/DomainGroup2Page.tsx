import { getGuaranteedItem } from '../components/getItem';
import { Hierarchy } from '../types';
import domains from './subpages/__domain2';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof domains;

interface DomainProps {
	id: string,
};

const topLink: Hierarchy = ["Domains", "ability/domains"];

const DomainGroup2Page: React.FC<DomainProps> = ({id}) => {

	const { hasJL, title, jsx, sources } = getGuaranteedItem<Data>((id as keyof Data), domains);

	return <BasicPage
		hasJL={hasJL}
		pageId={"/domain/" + id}
		title={title}
		sources={sources}
		topLink={topLink}
	>{jsx}</BasicPage>;
};

export default DomainGroup2Page;
