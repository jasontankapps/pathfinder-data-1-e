import { useParams } from 'wouter';
import feat1 from './subpages/__feat01';
import feat2 from './subpages/__feat02';
import feat3 from './subpages/__feat03';
import feat4 from './subpages/__feat04';
import feat5 from './subpages/__feat05';
import feat6 from './subpages/__feat06';
import feat7 from './subpages/__feat07';
import feat8 from './subpages/__feat08';
import feat9 from './subpages/__feat09';
import feat10 from './subpages/__feat10';
import feat11 from './subpages/__feat11';
import feat12 from './subpages/__feat12';
import feat13 from './subpages/__feat13';
import feat14 from './subpages/__feat14';
import feat15 from './subpages/__feat15';
import feat16 from './subpages/__feat16';
import feat17 from './subpages/__feat17';
import './Page.css';

type Params = { id?: string };


const FeatPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = feat1[id] || feat2[id] || feat3[id]
		|| feat4[id] || feat5[id] || feat6[id]
		|| feat7[id] || feat8[id] || feat9[id]
		|| feat10[id] || feat11[id] || feat12[id]
		|| feat13[id] || feat14[id] || feat15[id]
		|| feat16[id] || feat17[id]
		|| feat1.not_found;

	return <Page />;

};

export default FeatPage;
