import { PropsWithChildren, FC, ReactNode } from 'react';

interface DuoProps {
	title: ReactNode
}

const Duo: FC<PropsWithChildren<DuoProps>> = (props) => {
	const {title, children} = props;
	return (
		<p><strong className="hl">{title}:</strong> {children}</p>
	);
};

export default Duo;
