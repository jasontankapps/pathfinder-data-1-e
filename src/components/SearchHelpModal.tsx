import {
	IonButton,
	IonButtons,
	IonContent,
	IonFooter,
	IonHeader,
	IonIcon,
	IonLabel,
	IonModal,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import { closeCircle, close } from 'ionicons/icons';
import '../pages/Page.css';

interface PageProps {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchHelpModal: React.FC<PageProps> = ({open, setOpen}) => {
	return (
		<IonModal isOpen={open} onIonModalDidDismiss={() => setOpen(false)}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Search Help</IonTitle>
					<IonButtons slot="end">
						<IonButton onClick={() => setOpen(false)}><IonIcon slot="icon-only" icon={closeCircle} /></IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className="searchHelpModal">
					<p>The search function uses unix-like search syntax, along with "fuzzy matching" to account for possible misspellings.</p>
					<h3>Overview</h3>
					<table>
						<thead>
							<tr>
								<th>Example Search</th>
								<th>What it Finds</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>plain text</td>
								<td>Anything fuzzy-matching "plain text"</td>
							</tr>
							<tr>
								<td>plain | text</td>
								<td>Anything fuzzy-matching "plain" or "text"</td>
							</tr>
							<tr>
								<td>=exact</td>
								<td>Anything exactly matching "exact"</td>
							</tr>
							<tr>
								<td>'include</td>
								<td>Result must include "include"</td>
							</tr>
							<tr>
								<td>!avoid</td>
								<td>Anything that does not include "avoid"</td>
							</tr>
							<tr>
								<td>^begin</td>
								<td>Anything starting with "begin"</td>
							</tr>
							<tr>
								<td>!^nope</td>
								<td>Anything that does not start with "nope"</td>
							</tr>
							<tr>
								<td>end$</td>
								<td>Anything ending with "end"</td>
							</tr>
							<tr>
								<td>!error$</td>
								<td>Anything that does not end with "error"</td>
							</tr>
						</tbody>
					</table>
					<p>You may use these search commands together, e.g. <code>^fey 'kill | fright</code> would match anything that either starts with "fey" and includes "kill", or anything that fuzzy-matches "fright".</p>
					<p>If you need to include more than one word with one of the special cases above, enclose them in quotes, e.g. <code>^"Summon Monster"</code> would match anything that begins with the phrase "Summon Monster".</p>
				</div>
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonButtons slot="end">
						<IonButton onClick={() => setOpen(false)}>
							<IonLabel>Close</IonLabel>
							<IonIcon slot="start" icon={close} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonFooter>
		</IonModal>
	);
};

export default SearchHelpModal;/*

jscript fuzzy-match Items that fuzzy match jscript
=scheme exact-match Items that are scheme
'python include-match Items that include python
!ruby inverse-exact-match Items that do not include ruby
^java prefix-exact-match Items that start with java
!^earlang inverse-prefix-exact-match Items that do not start with earlang
.js$ suffix-exact-match Items that end with .js
!.go$ inverse-suffix-exact-match Items that do not end with .go*/
