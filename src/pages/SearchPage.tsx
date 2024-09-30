import { FC, SetStateAction, Dispatch, PropsWithChildren, useState, useTransition } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import Fuse, { FuseResult } from 'fuse.js';
import {
	IonButton,
	IonButtons,
	IonCheckbox,
	IonContent,
	IonFooter,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonModal,
	IonPage,
	IonRippleEffect,
	IonSearchbar,
	IonSpinner,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import { closeCircle, filterCircle, close as closePlain, filter as filterIcon, helpCircle } from 'ionicons/icons';
import { RangeStartToEndMinusOne } from '../types';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import SearchHelpModal from '../components/SearchHelpModal';
import Link from '../components/Link';
import fuseIndex from '../json/_data__fuse-index.json';
import fuseTranslatedIndex from '../json/_data__fuse-translated_data.json';
import './Page.css';
import './SearchPage.css';

interface Item {
	name: string
	tags?: string
}

interface ParallelItem {
	t: number // type
	p: number // prefix
	l: string // link
	s: SearchIndex // searchgroup
}

/*type SearchGroup =
	"class" // 1
	| "archetype" // 2
	| "feat" // 3
	| "trait" // 4
	| "magic" // 5
	| "equip" // 6
	| "tech" // 7
	| "spell" // 8
	| "race" // 9
	| "faith" // 10
	| "monster" // 11
	| "rule"; // 12
*/

function isIndex(value: unknown): asserts value is Item[] {}
isIndex(fuseIndex);

type SearchIndex = RangeStartToEndMinusOne<1, 13>;

const allSearchFiltersActive: SearchIndex[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
			weight: 0.9
		}
	],
	threshold: 0.8,
	useExtendedSearch: true
};
// initialize Fuse with the index
const fuse = new Fuse(fuseIndex, options);

// Gather data
interface DataObject {
	data: ParallelItem[]
	types: string[]
	prefixes: string[]
	searchindex: string[]
}
function isData(value: unknown): asserts value is DataObject {}
isData(fuseTranslatedIndex);

const { data, types, prefixes, searchindex } = fuseTranslatedIndex;

interface SearchResultItem {
	index: number
	style: {
		[key: string]: any
	}
	data: {
		data: ParallelItem[]
		results: FuseResult<Item>[]
		filter?: number[]
	}
}

const SearchItem = ({index, style, data}: SearchResultItem) => {
	const {results, data: d} = data;
	const { refIndex } = results[index];
	const {t, p, l} = d[refIndex]; // t = type, p = prefix, l = link
	return (
		<div style={style} className="searchResult ion-activatable">
			<Link to={`/${prefixes[p]}/${l}`}>
				<h3>{fuseIndex[refIndex].name}</h3>
				<h4>{types[t]}</h4>
			</Link>
			<IonRippleEffect />
		</div>
	);
};

const SearchResults: FC<{searchText: string, filter?: SearchIndex[]}> = ({searchText, filter}) => {
	if(!searchText) {
		return (
			<IonList className="search">
				<IonItem><IonLabel>Search results will appear here.</IonLabel></IonItem>
			</IonList>
		);
	}
	const results = filter
		? fuse.search(searchText).filter((el, i) => (filter.indexOf(data[el.refIndex].s) > -1) && (i < 100))
		: fuse.search(searchText, { limit: 100 });
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

interface SearchModalProps {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	filter: SearchIndex[],
	setFilter: (input: SearchIndex[]) => void
}

const SearchFilterModal: FC<PropsWithChildren<SearchModalProps>> = ({open, setOpen, filter, setFilter}) => {
	const [temp, setTemp] = useState<SearchIndex[]>([...filter]);
	const registerClick = (x: SearchIndex) => {
		if(temp.indexOf(x) > -1) {
			setTemp(temp.filter(f => f !== x))
		} else {
			setTemp([...temp, x]);
		}
	}
	const save = () => {
		setFilter(temp.length ? temp : allSearchFiltersActive);
		setOpen(false);
	};
	const close = () => setOpen(false);
	const selectDeselect = () => setTemp(temp.length ? [] : allSearchFiltersActive);
	return (
		<IonModal isOpen={open} onIonModalDidDismiss={() => setOpen(false)} onLoad={() => setTemp(filter)}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Filter Results</IonTitle>
					<IonButtons slot="end">
						<IonButton onClick={close}><IonIcon slot="icon-only" icon={closeCircle} /></IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList lines="full">
					<IonItem button onClick={selectDeselect}><IonLabel color="tertiary">Select/Deselect All</IonLabel></IonItem>
					{searchindex.map((item, i) => (
						<IonItem key={`filter/${i}`}>
							<IonCheckbox
								checked={temp.indexOf((i + 1) as SearchIndex) > -1}
								value={i+1}
								labelPlacement="start"
								onClick={() => registerClick((i + 1) as SearchIndex)}
								justify="end"
							>{item}</IonCheckbox>
						</IonItem>
					))}
				</IonList>
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonButtons slot="start">
						<IonButton onClick={close} color="warning">
							<IonLabel>Cancel</IonLabel>
							<IonIcon slot="start" icon={closePlain} />
						</IonButton>
					</IonButtons>
					<IonButtons slot="end">
						<IonButton onClick={save} color="success">
							<IonLabel>Save</IonLabel>
							<IonIcon slot="start" icon={filterIcon} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonFooter>
		</IonModal>
	);
};

const SearchPage: FC = () => {
	const [searchText, setSearchText] = useState<string>("");
	const [isPending, startTransition] = useTransition();
	const [filter, setFilter] = useState<SearchIndex[]>(allSearchFiltersActive);
	const [filterOpen, setFilterOpen] = useState<boolean>(false);
	const [helpOpen, setHelpOpen] = useState<boolean>(false);

	const doFilterUpdate = (input: SearchIndex[]) => startTransition(() => setFilter(input));
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
						<IonButton onClick={() => setFilterOpen(true)} color={filter.length && filter.length < 12 ? "tertiary" : undefined}>
							<IonIcon slot="icon-only" icon={filterCircle} />
						</IonButton>
						<IonButton onClick={() => setHelpOpen(true)}>
							<IonIcon slot="icon-only" icon={helpCircle} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</PageHeader>
			<IonContent>
				<SearchFilterModal open={filterOpen} setOpen={setFilterOpen} filter={filter} setFilter={doFilterUpdate} />
				<SearchHelpModal open={helpOpen} setOpen={setHelpOpen} />
				{
					isPending ? (
						<IonList className="search">
							<IonItem><IonLabel>Searching... <IonSpinner /></IonLabel></IonItem>
						</IonList>
					) :
						<SearchResults searchText={searchText} filter={filter.length ? filter : undefined} />
				}
			</IonContent>
			<PageFooter />
		</IonPage>
	);
};

export default SearchPage;
