import getItem, { getGuaranteedItem, JsonDataProps } from '../components/getItem';
import { Gen, Hierarchy } from '../types';
import BasicPage from './BasicPage';

type Basic = Gen<string, unknown>;
interface BasicPlusUnknown extends Basic {
	not_found: JsonDataProps
};
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
	({id, info, prefix, topLink, maybeTopLink, className: cN1, possiblyUnknown}) => {

	type Data = typeof info;

	type Name = keyof Data;

	const { hasJL, title, jsx, topLink: tL, noFinder, notBookmarkable, className: cN2 } =
		possiblyUnknown ? getItem((id as Name), info as BasicPlusUnknown) : getGuaranteedItem((id as Name), info);

	const pageId = `/${prefix}/${id}`;

	const tl = topLink || tL || maybeTopLink || undefined;

	const className = (cN1 && cN2) ? cN1 + " " + cN2 : (cN1 || cN2);

	return (
		<BasicPage
			hasJL={hasJL}
			pageId={pageId}
			title={title}
			topLink={tl}
			noFinder={noFinder}
			className={className}
			notBookmarkable={notBookmarkable}
		>{jsx}</BasicPage>
	);
};
