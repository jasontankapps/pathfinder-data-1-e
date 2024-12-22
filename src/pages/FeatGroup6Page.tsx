import feats from './subpages/__feat6';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup6Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup6Page;
