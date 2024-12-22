import traits from './subpages/__trait1';
import TraitGroupBasic from './TraitGroupBasic';

const TraitGroup1Page: React.FC<{id: string}> = ({id}) =>
	<TraitGroupBasic id={id} info={traits} possiblyUnknown={true} />;

export default TraitGroup1Page;
