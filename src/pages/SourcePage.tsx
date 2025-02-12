import { useParams } from 'wouter';
import sources from '../json/sources.json';
import BasicPage from './BasicPage';
import './Page.css';

export interface SourceProps {
	title: string
	url: string
	unknown?: boolean
}
interface CopyOf<T> extends Partial<SourceProps> {
	copyof?: T
}

function getItem<T extends { not_found: SourceProps }> (id: keyof T | undefined, json: T): SourceProps {
	let data = (json[id || "not_found"] || json.not_found) as CopyOf<keyof T>;
	while(data.copyof) {
		const { copyof, ...etc } = data;
		data = {...((json[copyof || "not_found"] || json.not_found) as CopyOf<keyof T>), ...etc};
	}
	return data as SourceProps;
};

type Data = typeof sources;

type Params = { id?: keyof Data };

const SourcePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, url, unknown } = getItem<Data>(id, sources);

	return (
		<BasicPage title={title} hideSources pageId={"/source/" + id}>
			{unknown ? (
				<>
					<h2>Unknown</h2>
					<p>Unable to find the requested source.</p>
				</>
			) : (
				<>
					<p><strong>Please note:</strong> This link leads to an external site.</p>
					<blockquote><em>{title}</em><br /><a href={url}>{url}</a></blockquote>
				</>
			)}
		</BasicPage>
	);
};

export default SourcePage;
