import BasicPage from './BasicPage';
import { SourceProp } from '../components/SourcesModal';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"]];
const sources: SourceProp[] = [];

const ErrorPage: React.FC = () => {

	return (
		<BasicPage title="Not Found" hierarchy={hierarchy} sources={sources}>
			<p>Unable to find the requested information.</p>
		</BasicPage>
	);
};

export default ErrorPage;
