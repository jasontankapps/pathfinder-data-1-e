import feats from './subpages/_GEN_feat14';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup14Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup14Page;
