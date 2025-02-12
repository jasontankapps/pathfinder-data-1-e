import getItem from '../components/getItem';
import domains from './subpages/__domain1';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof domains;

interface DomainProps {
	id: string,
};

const DomainGroup1Page: React.FC<DomainProps> = ({id}) => {

	const { hasJL, title, jsx, sources } = getItem<Data>((id as keyof Data), domains);

	return <BasicPage
		hasJL={hasJL}
		pageId={"/domain/" + id}
		title={title}
		sources={sources}
		topLink={["Domains", "ability/domains"]}
	>{jsx}</BasicPage>;
};

export default DomainGroup1Page;
