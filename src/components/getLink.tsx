import ri from '../json/_data__redirects.json';
import { Gen } from '../types';

const redirectIndex: Gen<string, string> = {...ri};

// This only needs to be used on pages where the link destination is uncertain.
// Hardcoded links can skip this.
const getLink = (to: string) => {
	const link = redirectIndex[to] || to;
	return link;
};

export default getLink;
