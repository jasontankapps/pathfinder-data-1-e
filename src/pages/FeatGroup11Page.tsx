import feats from './subpages/__feat11';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup11Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup11Page;
