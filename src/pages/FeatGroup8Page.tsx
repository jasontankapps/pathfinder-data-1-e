import feats from './subpages/__feat8';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup8Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup8Page;
