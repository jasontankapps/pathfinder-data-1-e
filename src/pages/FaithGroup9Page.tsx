import faiths from './subpages/__faith9';
import FaithGroupBasic from './FaithGroupBasic';

const FaithGroup9Page: React.FC<{id: string}> = ({id}) => <FaithGroupBasic id={id} info={faiths} />;

export default FaithGroup9Page;
