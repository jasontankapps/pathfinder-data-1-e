import {
	IonPage,
	IonContent,
	IonText,
	IonProgressBar
} from '@ionic/react';

const Loading = () => {
	return (
		<IonPage>
			<IonContent>
				<div className="loadingPage">
					<IonText color="primary"><h1>Loading</h1></IonText>
					<IonProgressBar type="indeterminate"  color="secondary"/>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Loading;
