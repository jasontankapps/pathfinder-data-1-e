import feats from './subpages/__feat16';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup16Page: React.FC<{id: string}> = ({id}) => <FeatGroupBasic id={id} info={feats} />;

export default FeatGroup16Page;
