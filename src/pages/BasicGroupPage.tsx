import getItem, { getGuaranteedItem, JsonDataProps } from '../components/getItem';
import { Hierarchy } from '../types';
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
	topLink?: Hierarchy
	maybeTopLink?: Hierarchy | null
	className?: string
}

export const BasicGroupPage: React.FC<BasicGroupPageProps> =
	({id, info, prefix, topLink, maybeTopLink, className, possiblyUnknown}) => {

	type Data = typeof info;

	type Name = keyof Data;

	const { hasJL, title, jsx, sources, backlink, noFinder } =
		possiblyUnknown ? getItem((id as Name), info as BasicPlusUnknown) : getGuaranteedItem((id as Name), info);

	const pageId = `/${prefix}/${id}`;

	const tl = topLink || backlink || maybeTopLink || undefined;

	return (
		<BasicPage
			hasJL={hasJL}
			pageId={pageId}
			title={title}
			sources={sources}
			topLink={tl}
			noFinder={noFinder}
			className={className}
		>{jsx}</BasicPage>
	);
};
