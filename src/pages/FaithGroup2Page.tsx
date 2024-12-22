import faiths from './subpages/__faith2';
import FaithGroupBasic from './FaithGroupBasic';

const FaithGroup2Page: React.FC<{id: string}> = ({id}) => <FaithGroupBasic id={id} info={faiths} />;

export default FaithGroup2Page;
