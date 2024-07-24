import { useRouteMatch } from "react-router-dom";
import { SourceProp } from '../components/SourcesModal';
import fuseTranslatedIndex from '../json/_data__fuse-translated_data.json';
import { HierarchyArray } from '../types';
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

const hierarchy: HierarchyArray = [["Main", "main/main"]];
const sources: SourceProp[] = [];

const ErrorPage: React.FC = () => {
	const matches = useRouteMatch();
	const m = matches.path.match(matcher);
	return (m ?
		<BasicPage title="Not Found" hierarchy={hierarchy} sources={sources}>
			<p>Unable to find the requested information.</p>
		</BasicPage>
	:
		<></>
	);
};

export default ErrorPage;
