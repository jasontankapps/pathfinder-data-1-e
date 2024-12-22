import traits from './subpages/__trait5';
import TraitGroupBasic from './TraitGroupBasic';

const TraitGroup5Page: React.FC<{id: string}> = ({id}) => <TraitGroupBasic id={id} info={traits} />;

export default TraitGroup5Page;
