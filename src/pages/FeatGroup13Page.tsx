import feats from './subpages/_GEN_feat13';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup13Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup13Page;
