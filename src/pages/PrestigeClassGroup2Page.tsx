import prestige_classes from './subpages/__pclass2';
import PrestigeClassGroupBasic from './PrestigeClassGroupBasic';

const PrestigeClassGroup2Page: React.FC<{id: string}> = ({id}) =>
	<PrestigeClassGroupBasic id={id} info={prestige_classes} />;

export default PrestigeClassGroup2Page;
