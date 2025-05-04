import prestige_classes from './subpages/__pclass4';
import PrestigeClassGroupBasic from './PrestigeClassGroupBasic';

const PrestigeClassGroup4Page: React.FC<{id: string}> = ({id}) =>
	<PrestigeClassGroupBasic id={id} info={prestige_classes} />;

export default PrestigeClassGroup4Page;
