import { useParams } from 'react-router';
import sources from '../json/sources.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

interface SourceProps {
	title: string
	url: string
	unknown?: boolean
}
interface CopyOf<T> extends Partial<SourceProps> {
	copyof: T
}

function getItem<T extends { unknown: SourceProps }> (id: keyof T | undefined, json: T): SourceProps {
	let data = (json[id || "unknown"] || json.unknown) as CopyOf<keyof T>;
	while(data.copyof) {
		const { copyof, ...etc } = data;
		data = {...((json[id || "unknown"] || json.unknown) as CopyOf<keyof T>), ...etc};
	}
	return data as SourceProps;
};

const hierarchy: HierarchyArray = [
	["Main", "main"],
	["Open Game Content", "ogc"]
];

type Data = typeof sources;

type Params = { id?: keyof Data };

const SourcePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, url, unknown } = getItem<Data>(id, sources);

	return (
		<BasicPage title={title} {...{hierarchy}} hideSources>
			{unknown ? (
				<>
					<h1>Unknown</h1>
					<p>Unable to find the requested source.</p>
				</>
			) : (
				<>
					<h1>Note</h1>
					<h2>This link leads to an external site.</h2>
					<p><b>{title}</b> : <a href={url}>{url}</a></p>
				</>
			)}
		</BasicPage>
	);
};

export default SourcePage;
