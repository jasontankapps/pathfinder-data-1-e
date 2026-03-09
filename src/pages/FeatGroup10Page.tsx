import feats from './subpages/_GEN_feat10';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup10Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup10Page;
