import { FC, useState, useTransition } from 'react';
import {
	IonContent,
	IonItem,
	IonLabel,
	IonList,
	IonPage,
	IonSearchbar,
	IonSpinner,
	IonToolbar
} from '@ionic/react';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import Fuse from 'fuse.js';
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

const SearchResults: FC<{searchText: string}> = ({searchText}) => {
	if(!searchText) {
		return <IonItem><IonLabel>Search results will appear here.</IonLabel></IonItem>;
	}
	const results = fuse.search(searchText, { limit: 50 });
	if (results.length === 0) {
		return <IonItem><IonLabel>No results for "{searchText}".</IonLabel></IonItem>;
	}
	return results.map((result, i) => {
		const { refIndex } = result;
		const {t, p, l} = data[refIndex]; // t = type, p = prefix, l = link
		return (
			<IonItem key={`searchItem-${i}`} href={`${prefixes[p]}/${l}`}><IonLabel>
				<h3>{fuseIndex[refIndex].name}</h3>
				<h4>{types[t]}</h4>
			</IonLabel></IonItem>
		);
	});
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
				</IonToolbar>
			</PageHeader>
			<IonContent fullscreen>
				<IonList className="search" id="results">
					{
						isPending ?
							<IonItem><IonLabel>Searching... <IonSpinner /></IonLabel></IonItem>
						:
							<SearchResults searchText={searchText} />
					}
				</IonList>
			</IonContent>
			<PageFooter />
		</IonPage>
	);
};

export default SearchPage;
