import feats from './subpages/__feat15';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup15Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup15Page;
