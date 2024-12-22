import feats from './subpages/__feat4';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup4Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup4Page;
