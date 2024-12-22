import feats from './subpages/__feat10';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup10Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup10Page;
