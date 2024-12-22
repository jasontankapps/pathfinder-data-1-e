import feats from './subpages/__feat1';
import FeatGroupBasic from './FeatGroupBasic';

const FeatGroup1Page: React.FC<{id: string}> = ({id}) =>
	<FeatGroupBasic id={id} info={feats} possiblyUnknown={true} />;

export default FeatGroup1Page;
