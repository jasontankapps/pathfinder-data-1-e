import traits from './subpages/_GEN_trait2';
import TraitGroupBasic from './TraitGroupBasic';

const TraitGroup2Page: React.FC<{id: string}> = ({id}) => <TraitGroupBasic id={id} info={traits} />;

export default TraitGroup2Page;
