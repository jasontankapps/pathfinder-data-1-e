import { useParams } from 'wouter';
import sources from '../json/sources.json';
import sourceRefMap from './subpages/_data__sources';
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

type Params = { id?: string };

type SourceMap = keyof typeof sourceRefMap;

const SourcePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, url, unknown } = getItem<Data>(id, sources);

	if(unknown) {
		return (
			<BasicPage title={title} pageId={"/source/" + id}>
				<>
					<h2>Unknown</h2>
					<p>Unable to find the requested source.</p>
				</>
			</BasicPage>
		);
	}

	const References = sourceRefMap[id as SourceMap] || <></>;

	return (
		<BasicPage title={title} pageId={"/source/" + id}>
			<>
				<p><strong>Please note:</strong> This link leads to an external site.</p>
				<blockquote><em>{title}</em><br /><a href={url}>{url}</a></blockquote>
				<hr/>
				<p className="diminishNextHeader"><strong className="hl">Entries That Reference This Source:</strong></p>
				{References}
			</>
		</BasicPage>
	);
};

export default SourcePage;
