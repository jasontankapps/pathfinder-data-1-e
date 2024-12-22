import traits from './subpages/__trait3';
import TraitGroupBasic from './TraitGroupBasic';

const TraitGroup3Page: React.FC<{id: string}> = ({id}) => <TraitGroupBasic id={id} info={traits} />;

export default TraitGroup3Page;
