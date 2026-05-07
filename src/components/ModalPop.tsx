import { PropsWithChildren, FC } from "react";
import { AlertOptions, useIonAlert } from "@ionic/react";

interface ModalProps extends AlertOptions {
	className?: string
}

const ModalPop: FC<PropsWithChildren<ModalProps>> = (props) => {
	const {children, className, ...alertProps} = props;
	const [presentAlert] = useIonAlert();
	return (
		<div
			onClick={() => presentAlert(alertProps)}
			className={"fakePopButton" + (className ? " " + className : "")}
		>{children || "?"}</div>
	);
};

export default ModalPop;
