import feats from './subpages/_GEN_feat12';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup12Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup12Page;
