import faiths from './subpages/__faith3';
import FaithGroupBasic from './FaithGroupBasic';

const FaithGroup3Page: React.FC<{id: string}> = ({id}) => <FaithGroupBasic id={id} info={faiths} />;

export default FaithGroup3Page;
