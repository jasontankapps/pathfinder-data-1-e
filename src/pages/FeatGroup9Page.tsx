import feats from './subpages/__feat9';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup9Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup9Page;
