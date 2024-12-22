import feats from './subpages/__feat3';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup3Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup3Page;
