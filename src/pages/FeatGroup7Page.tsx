import feats from './subpages/__feat7';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup7Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup7Page;
