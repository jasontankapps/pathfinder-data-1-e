import feats from './subpages/__feat14';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup14Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup14Page;
