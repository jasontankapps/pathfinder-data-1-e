import { useMemo, useState } from 'react';
import { copy, eye, eyeOff, reorderTwo, save } from 'ionicons/icons';
import {
	IonButton,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonReorder,
	IonReorderGroup,
	IonText,
	IonTextarea,
	IonToggle,
	ItemReorderEventDetail
} from '@ionic/react';
import { Color, importBookmarksGroup } from '../store/bookmarksSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import BasicPage from './BasicPage';
import './Page.css';

const toggle = (item: Color, all: Color[]): Color[] => {
	if(all.indexOf(item)) {
		return all.filter(x => x !== item);
	}
	return [...all, item];
};

const BookmarksPage: React.FC = () => {
	const { db, order, ...colors } = useAppSelector(state => state.bookmarks);
	const dispatch = useAppDispatch();
	const [selected, setSelected] = useState<Color[]>([]);
	
	return (
		<BasicPage
			title="Import/Export Bookmarks"
			hideSources
			pageId="importexport"
			notBookmarkable
			noFinder
			className="bookmarks importExport"
		>
			<div>
				<h2>Export Bookmarks</h2>
				<IonList lines="full">
					{order.map(c => (
						<IonItem className={`color-${c}`}>
							<IonToggle
								checked={selected.indexOf(c) > -1}
								onChange={() => setSelected(toggle(c, selected))}
								labelPlacement="start"
								justify="space-between"
							>
								<IonText className={`color-${c}`}>{colors[c].title}</IonText>
							</IonToggle>
						</IonItem>
					))}
				</IonList>
				<IonTextarea
					fill="outline"
					label="Copy this and save it for later use."
					autoGrow
					labelPlacement="floating"
				>
					<IonIcon slot="end" icon={copy} aria-hidden="true"></IonIcon>
				</IonTextarea>
			</div>
			<div>
				<h2>Import Bookmarks</h2>
				<IonTextarea
					fill="outline"
					label="Paste info to import here."
					autoGrow
					labelPlacement="floating"
				/>
				<IonButton>
					<IonIcon icon="/icons/input.svg" slot="start" />
					<IonLabel>Import</IonLabel>
				</IonButton>
			</div>
		</BasicPage>
	);
};

export default BookmarksPage;
