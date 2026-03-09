import feats from './subpages/_GEN_feat15';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup15Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup15Page;
