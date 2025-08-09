import { FC } from 'react';
import { IonButton } from '@ionic/react';
import { AppDispatch } from '../../store/store';
import { resetTables } from '../../store/displayTableSlice';

interface StoreErrorProps {
	id: string
	dispatch: AppDispatch
}

const StoreError: FC<StoreErrorProps> = (props) => {
	const {id, dispatch} = props;
	return (
		<div>
			<strong>ERROR IN TABLE.</strong> This is a rare edge case that might happen, please tap on this button to fix it: <IonButton onClick={() => { dispatch(resetTables(id)); }} color="danger">Fix Error</IonButton>
		</div>
	);
};

export default StoreError;
