import feats from './subpages/__feat13';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup13Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup13Page;
