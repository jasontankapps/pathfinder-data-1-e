import {
	IonPage,
	IonContent,
	IonText,
	IonProgressBar
} from '@ionic/react';

const Loading: React.FC<{ text?: string, color?: string, barColor?: string }> = (props) => {
	const {
		text = "Loading...",
		color = "primary",
		barColor = "secondary"
	} = props;
	return (
		<IonPage>
			<IonContent>
				<div className="loadingPage">
					<IonText color={color}><h1>{text}</h1></IonText>
					<IonProgressBar type="indeterminate" color={barColor}/>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Loading;
