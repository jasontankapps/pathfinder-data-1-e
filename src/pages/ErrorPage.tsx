import { useLocation } from "wouter";
import { prefixMatcher } from '../json/_GEN_prefixes';
import BasicPage from './BasicPage';
import './Page.css';

const matcher = new RegExp("^/($|(" + prefixMatcher + ")/)");

// Error 201 = missing page
// Error 202 = missing page or protocol
// Error 211 = missing page, not found by protocol page

const ErrorPage: React.FC<{id?: string}> = ({id}) => {
	const [ path ] = useLocation();
	const m = path.match(matcher);
	return (m ?
		<BasicPage pageId="error-page" error title="Not Found" notBookmarkable>
			<p>Unable to find the requested information. [Error {id !== undefined ? 211 : 201}]</p>
			<pre>{path}</pre>
		</BasicPage>
	:
		<BasicPage pageId="error-page-other" error title="Not Found" notBookmarkable>
			<p>Unable to find the requested page. [Error 202]</p>
			<pre>{path}</pre>
		</BasicPage>
	);
};

export default ErrorPage;
