import faiths from './subpages/__faith5';
import FaithGroupBasic from './FaithGroupBasic';

const FaithGroup5Page: React.FC<{id: string}> = ({id}) => <FaithGroupBasic id={id} info={faiths} />;

export default FaithGroup5Page;
