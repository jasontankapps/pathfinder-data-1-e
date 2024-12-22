import getItem, { getGuaranteedItem, JsonDataProps } from '../components/getItem';
import { Hierarchy, HierarchyArray } from '../types';
import BasicPage from './BasicPage';

type Basic = {[x: string]: unknown};
type BasicPlusUnknown = {[x: string]: unknown, not_found: JsonDataProps};
export interface GroupProps {
	id: string
	info: Basic
	possiblyUnknown?: boolean
}
interface BasicGroupPageProps extends GroupProps {
	prefix: string
	hierarchy?: HierarchyArray
	topLink?: Hierarchy
	maybeTopLink?: Hierarchy | null
	className?: string
}

export const BasicGroupPage: React.FC<BasicGroupPageProps> =
	({id, info, prefix, hierarchy = [], topLink, maybeTopLink, className, possiblyUnknown}) => {

	type Data = typeof info;

	type Name = keyof Data;

	const { hasJL, title, jsx, sources, subhierarchy = [] } =
		possiblyUnknown ? getItem((id as Name), info as BasicPlusUnknown) : getGuaranteedItem((id as Name), info);

	const pageId = prefix + "--" + id;

	const tl = topLink || ((maybeTopLink !== undefined) && subhierarchy.length > 0 ? subhierarchy[subhierarchy.length - 1] : (maybeTopLink || undefined));

	return (
		<BasicPage
			hasJL={hasJL}
			pageId={pageId}
			title={title}
			hierarchy={[...hierarchy, ...subhierarchy]}
			sources={sources}
			topLink={tl}
			className={className}
		>{jsx}</BasicPage>
	);
};
