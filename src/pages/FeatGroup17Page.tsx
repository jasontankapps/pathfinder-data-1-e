import feats from './subpages/__feat17';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup17Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup17Page;
