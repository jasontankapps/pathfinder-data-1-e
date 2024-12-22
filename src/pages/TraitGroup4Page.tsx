import traits from './subpages/__trait4';
import TraitGroupBasic from './TraitGroupBasic';

const TraitGroup4Page: React.FC<{id: string}> = ({id}) => <TraitGroupBasic id={id} info={traits} />;

export default TraitGroup4Page;
