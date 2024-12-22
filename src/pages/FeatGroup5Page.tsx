import feats from './subpages/__feat5';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup5Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup5Page;
