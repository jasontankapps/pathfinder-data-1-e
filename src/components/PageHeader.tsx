import { Dispatch, PropsWithChildren, useState } from 'react';
import { IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import { listCircleSharp, search } from 'ionicons/icons';
import { useLocation } from 'wouter';
import { HierarchyArray } from '../types';
import { goTo } from '../store/historySlice';
import { useAppDispatch } from '../store/hooks';
import HierarchyModal from './HierarchyModal';

const PageHeader: React.FC<PropsWithChildren<{
	title: string,
	noSearch?: boolean,
	hierarchy?: HierarchyArray,
	findInPage?: Dispatch<boolean>,
	findingInPage?: boolean,
	className?: string
}>> = ({ title, children, noSearch, hierarchy, findInPage, findingInPage, className }) => {
	const [isHierarchyModalOpen, setHierarchyModalOpen] = useState(false);
	const [location, navigate] = useLocation();
	const dispatch = useAppDispatch();
	return (
		<IonHeader className={className}>
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton />
				</IonButtons>
				<IonTitle>{title}</IonTitle>
				{
					noSearch && (!hierarchy || !hierarchy.length)
						? <></>
						: <IonButtons slot="end">
							{findInPage
								? (
									<IonButton onClick={() => findInPage(!findingInPage)} color={findingInPage ? "tertiary" : undefined}>
										<IonIcon slot="icon-only" icon="/icons/find-in-page.svg" />
									</IonButton>
								) : <></>
							}
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
									<IonButton onClick={() => { dispatch(goTo("/search")); navigate("/search"); }}>
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
