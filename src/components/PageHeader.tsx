import { PropsWithChildren, useState } from 'react';
import { IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import { listCircleSharp, search } from 'ionicons/icons';
import { HierarchyArray } from '../types';
import HierarchyModal from './HierarchyModal';

const PageHeader: React.FC<PropsWithChildren<{
	title: string,
	noSearch?: boolean,
	hierarchy?: HierarchyArray
}>> = ({ title, children, noSearch, hierarchy }) => {
	const [isHierarchyModalOpen, setHierarchyModalOpen] = useState(false);
	return (
		<IonHeader>
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton />
				</IonButtons>
				<IonTitle>{title}</IonTitle>
				{
					noSearch && (!hierarchy || !hierarchy.length)
						? <></>
						: <IonButtons slot="end">
							{(hierarchy && hierarchy.length)
								? (
									<IonButton onClick={() => setHierarchyModalOpen(!isHierarchyModalOpen)}>
										<IonIcon slot="icon-only" icon={listCircleSharp} />
									</IonButton>
								) : <></>
							}
							{noSearch
								? <></>
								: (
									<IonButton href="/search">
										<IonIcon slot="icon-only" icon={search} />
									</IonButton>
								)
							}
						</IonButtons>
				}
			</IonToolbar>
			{children}
			{hierarchy
				? <HierarchyModal hierarchy={hierarchy} isOpen={isHierarchyModalOpen} setIsOpen={setHierarchyModalOpen} />
				: <></>
			}
		</IonHeader>
	);
};

export default PageHeader;
