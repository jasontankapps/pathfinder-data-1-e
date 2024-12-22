import feats from './subpages/__feat12';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup12Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup12Page;
