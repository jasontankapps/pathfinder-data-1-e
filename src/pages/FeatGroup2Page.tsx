import feats from './subpages/_GEN_feat2';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup2Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup2Page;
