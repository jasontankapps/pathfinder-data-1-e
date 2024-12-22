import prestige_classes from './subpages/__prestigeclass3';
import PrestigeClassGroupBasic from './PrestigeClassGroupBasic';

const PrestigeClassGroup3Page: React.FC<{id: string}> = ({id}) =>
	<PrestigeClassGroupBasic id={id} info={prestige_classes} />;

export default PrestigeClassGroup3Page;
