import redirectIndex from '../json/_GEN_redirects';

// This only needs to be used on pages where the link destination is uncertain.
// Hardcoded links can skip this.
const getLink = (to: string) => {
	const link = redirectIndex[to] || to;
	return link;
};

export const hasRedirect = (to: string) => {
	return redirectIndex[to] || false;
};

export default getLink;
