import { FC, useState, useTransition } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Link } from 'react-router-dom';
import { FixedSizeList } from 'react-window';
import Fuse, { FuseResult } from 'fuse.js';
import {
	IonButton,
	IonButtons,
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonPage,
	IonSearchbar,
	IonSpinner,
	IonToolbar
} from '@ionic/react';
import { filterCircle } from 'ionicons/icons';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import fuseIndex from '../json/_data__fuse-index.json';
import fuseTranslatedIndex from '../json/_data__fuse-translated_data.json';
import './Page.css';

interface Item {
	name: string
	tags?: string
}

interface ParallelItem {
	t: number, // type
	p: number, // prefix
	l: string // link
}

function isIndex(value: unknown): asserts value is Item[] {}
isIndex(fuseIndex);

//// Load and deserialize index
//const myIndex = Fuse.parseIndex(fuseIndex);

// create options
const options = {
	ignoreLocation: true,
	keys: [
		{
			name: 'name',
			getFn: (item: Item) => item.name,
			weight: 1
		},
		{
			name: 'tags',
			getFn: (item: Item) => item.tags || "",
			weight: 0.7
		}
	]
};
// initialize Fuse with the index
const fuse = new Fuse(fuseIndex, options);

// Gather data
interface DataObject {
	data: ParallelItem[]
	types: string[]
	prefixes: string[]
}
function isData(value: unknown): asserts value is DataObject {}
isData(fuseTranslatedIndex);

const { data, types, prefixes } = fuseTranslatedIndex;

interface SearchResultItem {
	index: number
	style: {
		[key: string]: any
	}
	data: {
		data: ParallelItem[]
		results: FuseResult<Item>[]
	}
}

const SearchItem = ({index, style, data}: SearchResultItem) => {
	const {results, data: d} = data;
	const { refIndex } = results[index];
	const {t, p, l} = d[refIndex]; // t = type, p = prefix, l = link
	return (
		<div style={style} className="searchResult">
			<Link to={`${prefixes[p]}/${l}`}>
				<h3>{fuseIndex[refIndex].name}</h3>
				<h4>{types[t]}</h4>
			</Link>
		</div>
	);
};

const SearchResults: FC<{searchText: string}> = ({searchText}) => {
	if(!searchText) {
		return (
			<IonList className="search">
				<IonItem><IonLabel>Search results will appear here.</IonLabel></IonItem>
			</IonList>
		);
	}
	const results = fuse.search(searchText, { limit: 100 });
	if (results.length === 0) {
		return (
			<IonList className="search">
				<IonItem><IonLabel>No results for "{searchText}".</IonLabel></IonItem>
			</IonList>
		);
	}
	return (
		<AutoSizer className="search">{
			({height, width}) => (
				<FixedSizeList
					height={height}
					width={width}
					itemCount={results.length}
					itemSize={70}
					itemData={{data, results}}
				>{SearchItem}</FixedSizeList>
			)
		}</AutoSizer>
	);
};

const SearchPage: FC = () => {
	const [searchText, setSearchText] = useState<string>("");
	const [isPending, startTransition] = useTransition();

	return (
		<IonPage>
			<PageHeader title="Search" noSearch>
				<IonToolbar>
					<IonSearchbar
						inputmode="text"
						type="text"
						placeholder="Search for titles and topics"
						onInput={(input) => startTransition(() => setSearchText(String(input.currentTarget.value || "")))}
					/>
					<IonButtons slot="end">
						<IonButton onClick={() => 0}>
							<IonIcon slot="icon-only" icon={filterCircle} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</PageHeader>
			<IonContent fullscreen>
				{
					isPending ? (
						<IonList className="search">
							<IonItem><IonLabel>Searching... <IonSpinner /></IonLabel></IonItem>
						</IonList>
					) :
						<SearchResults searchText={searchText} />
				}
			</IonContent>
			<PageFooter />
		</IonPage>
	);
};

export default SearchPage;
