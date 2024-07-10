import { PropsWithChildren } from 'react';
import { IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import { search } from 'ionicons/icons';

const PageHeader: React.FC<PropsWithChildren<{title: string, noSearch?: boolean}>> = ({ title, children, noSearch }) => {
	return (
		<IonHeader>
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton />
				</IonButtons>
				<IonTitle>{title}</IonTitle>
				{
					noSearch
						? <></>
						: <IonButtons slot="end">
							<IonButton href="/search">
								<IonIcon slot="icon-only" icon={search} />
							</IonButton>
						</IonButtons>
				}
			</IonToolbar>
			{children}
		</IonHeader>
	);
};

export default PageHeader;
