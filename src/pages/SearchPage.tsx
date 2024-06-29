import { FC, useState } from 'react';
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
	IonTitle,
	IonToolbar
} from '@ionic/react';
import { chevronBack, chevronForward } from 'ionicons/icons';
import Fuse from 'fuse.js';
import fuseIndex from '../json/_data__fuse-index.json';
import fuseData from '../json/_data__fuse-data.json';
import './Page.css';

interface Item {
	id: string
	link: string
	name: string
	description: string
	type: string
}

// Load and deserialize index
const myIndex = Fuse.parseIndex(fuseIndex);

// create options
const options = {
	includeScore: true,
	keys: [
		{
			name: 'name',
			getFn: (item: Item) => item.name,
			weight: 1
		},
		{
			name: 'description',
			getFn: (item: Item) => item.description,
			weight: 0.7
		},
		{
			name: 'id',
			getFn: (item: Item) => item.id,
			weight: 0.000000001
		},
		{
			name: 'link',
			getFn: (item: Item) => item.link,
			weight: 0.000000001
		},
			{
			name: 'type',
			getFn: (item: Item) => item.type,
			weight: 0.2
		}
	]
};
// initialize Fuse with the index
const fuse = new Fuse(fuseData, options, myIndex);


const SearchPage: FC = () => {
	const [searchText, setSearchText] = useState<string>("");
	const found = fuse.search(searchText);

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
							debounce={500}
							onInput={(input) => setSearchText(String(input.currentTarget.value || ""))}
						/>
					</IonItem>
				</IonList>
				<IonList className="search" id="results">
					{
						found.length > 0 ? (
							found.map(item => {
								const {id, link, name: title, type} = item.item;
								return (
									<IonItem key={id} href={link}><IonLabel>
										<h3>{title}</h3>
										<h4>{type}</h4>
									</IonLabel></IonItem>
								);
							})	
						) : (
							searchText ? (
								<IonItem><IonLabel>No results for "{searchText}".</IonLabel></IonItem>
							) : (
								<IonItem><IonLabel>Type something in the bar above to search.</IonLabel></IonItem>
							)
						)
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
