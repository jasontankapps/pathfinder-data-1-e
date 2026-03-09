import feats from './subpages/_GEN_feat11';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup11Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup11Page;
