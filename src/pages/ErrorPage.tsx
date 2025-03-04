import { useLocation } from "wouter";
import { SourceProp } from '../components/SourcesModal';
import fuseTranslatedIndex from '../json/_data__fuse-translated_data.json';
import BasicPage from './BasicPage';
import './Page.css';

// Gather data
interface DataObject {
	prefixes: string[]
}
function isData(value: unknown): asserts value is DataObject {}
isData(fuseTranslatedIndex);

const { prefixes } = fuseTranslatedIndex;

const matcher = new RegExp("^/($|(" + prefixes.join("|") + ")/)");

const sources: SourceProp[] = [];

const ErrorPage: React.FC = () => {
	const [ path ] = useLocation();
	const m = path.match(matcher);
	return (m ?
		<BasicPage pageId="error-page" error title="Not Found" notBookmarkable sources={sources}>
			<p>Unable to find the requested information. [Error 201]</p>
		</BasicPage>
	:
		<BasicPage pageId="error-page-other" error title="Not Found" notBookmarkable sources={sources}>
			<p>Unable to find the requested page. [Error 202]</p>
		</BasicPage>
	);
};

export default ErrorPage;
