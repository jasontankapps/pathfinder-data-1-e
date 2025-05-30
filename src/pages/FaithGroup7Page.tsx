import faiths from './subpages/__faith7';
import FaithGroupBasic from './FaithGroupBasic';

const FaithGroup7Page: React.FC<{id: string}> = ({id}) => <FaithGroupBasic id={id} info={faiths} />;

export default FaithGroup7Page;
