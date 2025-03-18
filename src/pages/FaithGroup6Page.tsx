import faiths from './subpages/__faith6';
import FaithGroupBasic from './FaithGroupBasic';

const FaithGroup6Page: React.FC<{id: string}> = ({id}) => <FaithGroupBasic id={id} info={faiths} />;

export default FaithGroup6Page;
