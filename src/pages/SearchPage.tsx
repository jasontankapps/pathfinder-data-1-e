import { FC, useState, useTransition } from 'react';
import {
	IonButton,
	IonButtons,
	IonContent,
	IonFooter,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonLabel,
	IonList,
	IonMenuButton,
	IonPage,
	IonSpinner,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import { chevronBack, chevronForward } from 'ionicons/icons';
import Fuse from 'fuse.js';
import fuseIndex from '../json/_data__fuse-index.json';
import fuseTranslatedIndex from '../json/_data__fuse-translated_data.json';
import './Page.css';

interface Item {
	name: string
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
	//includeScore: true,
	keys: [
		{
			name: 'name',
			getFn: (item: Item) => item.name
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
		return <IonItem><IonLabel>Type something in the bar above to search.</IonLabel></IonItem>;
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
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Search</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonList id="searchbar">
					<IonItem>
						<IonInput
							id="searchInput"
							label="Search"
							labelPlacement="floating"
							clearInput={true}
							onInput={(input) => startTransition(() => setSearchText(String(input.currentTarget.value || "")))}
						/>
					</IonItem>
				</IonList>
				<IonList className="search" id="results">
					{
						isPending ?
							<IonItem><IonLabel>Searching... <IonSpinner /></IonLabel></IonItem>
						:
							<SearchResults searchText={searchText} />
					}
				</IonList>
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonButtons slot="start">
						<IonButton>
							<IonIcon slot="icon-only" icon={chevronBack} />
						</IonButton>
					</IonButtons>
					<IonButtons slot="end">
						<IonButton>
							<IonIcon slot="icon-only" icon={chevronForward} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonFooter>
		</IonPage>
	);
};

export default SearchPage;
