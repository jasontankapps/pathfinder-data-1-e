import prestige_classes from './subpages/__prestigeclass1';
import PrestigeClassGroupBasic from './PrestigeClassGroupBasic';

const PrestigeClassGroup1Page: React.FC<{id: string}> = ({id}) =>
	<PrestigeClassGroupBasic id={id} info={prestige_classes} possiblyUnknown={true} />;

export default PrestigeClassGroup1Page;
