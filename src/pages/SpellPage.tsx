import { useParams } from 'wouter';
import spell1 from './subpages/__spell01';
import spell2 from './subpages/__spell02';
import spell3 from './subpages/__spell03';
import spell4 from './subpages/__spell04';
import spell5 from './subpages/__spell05';
import spell6 from './subpages/__spell06';
import spell7 from './subpages/__spell07';
import spell8 from './subpages/__spell08';
import spell9 from './subpages/__spell09';
import spell10 from './subpages/__spell10';
import spell11 from './subpages/__spell11';
import spell12 from './subpages/__spell12';
import spell13 from './subpages/__spell13';
import spell14 from './subpages/__spell14';
import spell15 from './subpages/__spell15';
import spell16 from './subpages/__spell16';
import spell17 from './subpages/__spell17';
import './Page.css';

type Data =
	typeof spell1 | typeof spell2 | typeof spell3 | typeof spell4
	| typeof spell5 | typeof spell6 | typeof spell7 | typeof spell8
	| typeof spell9 | typeof spell10 | typeof spell11 | typeof spell12
	| typeof spell13 | typeof spell14 | typeof spell15 | typeof spell16
	| typeof spell17;

type Params = { id?: keyof Data };

const SpellPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = spell1[id] || spell2[id] || spell3[id] || spell4[id]
		|| spell5[id] || spell6[id] || spell7[id] || spell8[id]
		|| spell9[id] || spell10[id] || spell11[id] || spell12[id]
		|| spell13[id] || spell14[id] || spell15[id] || spell16[id]
		|| spell17[id] || spell1.not_found;

	return <Page />;

};

export default SpellPage;
