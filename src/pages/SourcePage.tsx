import axios from 'axios';
import { useState, FC, useEffect } from 'react';
import { useParams } from 'wouter';
import Link from '../components/Link';
import Sources from './subpages/_GEN_sourceIndex';
import ErrorPage from './ErrorPage';
import BasicPage from './BasicPage';
import Loading from '../Loading';
import './css/Page.css';

type Pairing = [string, string];
type Pairings = Pairing[];
type Displayable = [string, ...Pairings];
type Sortables = Pairing | Displayable;
interface Protocol {
	[key: string]: Pairings
}
interface Group {
	[key: string]: Protocol
}
interface Data {
	title: string
	url: string
	data: Group
}
interface Source {
	[key: string]: Data
}

type Params = { id: string };

const $empty = {};

const DisplayInfo: FC<{display: Displayable, id: string}> = ({display, id}) => {
	const [title, ...info] = display;
	return (
		<>
			<h3>{title}</h3>
			<div className="columnar">
				<ul>
					{info.map(pair => {
						const [item, url] = pair;
						return <li key={`${id}-${url}`}><Link to={url}>{item}</Link></li>;
					})}
				</ul>
			</div>
		</>
	);
};

const sortPairings = (a: Sortables, b: Sortables) =>  a[0].localeCompare(b[0]);

const DataParsed: FC<{group: Data, id: string}> = ({group, id}) => {
	const {title, url, data} = group;
	const info: [string, ...Pairings][] = [];
	Object.entries(data).forEach(pair => {
		const [category, object] = pair;
		const pairings: Pairings = [];
		Object.entries(object).forEach(pair => {
			const [protocol, items] = pair;
			items.forEach(pair => {
				const [title, prop] = pair;
				pairings.push([title, `/${protocol}/${prop}`]);
			});
		});
		pairings.sort(sortPairings);
		info.push([category, ...pairings]);
	});
	info.sort(sortPairings);
	return (
		<BasicPage title={title} pageId={"/source/" + id}>
			<>
				<p><strong>Please note:</strong> This link leads to an external site.</p>
				<blockquote><em>{title}</em><br /><a href={url}>{url}</a></blockquote>
				<hr/>
				<p className="diminishNextHeader"><strong className="hl">Entries That Reference This Source:</strong></p>
				{
					info.map(
						(listing, i) =>
							<DisplayInfo
								display={listing}
								id={`${id}-${i}`}
								key={`${id}-displayblock-${i}`}
							/>
					)
				}
			</>
		</BasicPage>
	);
};

const SourcePage: FC = () => {
	const [group, setGroup] = useState<Source>($empty);
	const [lastSource, setLastSource] = useState("");
	const { id } = useParams<Params>();
	const index = Sources[id];
	useEffect(() => {
		setGroup($empty);
		axios.get(`/_SOURCE_group${index}.json`).then(res => {
			const grouping = res.data;
			setGroup(grouping);
			setLastSource(id);
		});
	}, [id, index, setGroup, setLastSource]);
	return group === $empty ? (
		id === lastSource ? (
			<ErrorPage />
		) : (
			<Loading text="Finding sources..." />
		)
	) : ( group[id] ?
		<DataParsed group={group[id]} id={id} />
		: <ErrorPage />
	);
};

export default SourcePage;
