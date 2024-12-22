import spells from './subpages/__spell1';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup1Page: React.FC<{id: string}> = ({id}) =>
	<SpellGroupBasic id={id} info={spells} possiblyUnknown={true} />;

export default SpellGroup1Page;
