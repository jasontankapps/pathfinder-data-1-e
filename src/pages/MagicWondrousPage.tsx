import { useParams } from 'wouter';
import magicwondrous1 from './subpages/__magic-wondrous01';
import magicwondrous2 from './subpages/__magic-wondrous02';
import magicwondrous3 from './subpages/__magic-wondrous03';
import magicwondrous4 from './subpages/__magic-wondrous04';
import magicwondrous5 from './subpages/__magic-wondrous05';
import magicwondrous6 from './subpages/__magic-wondrous06';
import magicwondrous7 from './subpages/__magic-wondrous07';
import magicwondrous8 from './subpages/__magic-wondrous08';
import magicwondrous9 from './subpages/__magic-wondrous09';
import magicwondrous10 from './subpages/__magic-wondrous10';
import magicwondrous11 from './subpages/__magic-wondrous11';
import './Page.css';

type Data =
	typeof magicwondrous1 | typeof magicwondrous2 | typeof magicwondrous3
	| typeof magicwondrous4 | typeof magicwondrous5 | typeof magicwondrous6
	| typeof magicwondrous7 | typeof magicwondrous8 | typeof magicwondrous9
	| typeof magicwondrous10 | typeof magicwondrous11;

type Params = { id?: keyof Data };

const MagicWondrousPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id && (
		magicwondrous1[id] || magicwondrous2[id] || magicwondrous3[id]
		|| magicwondrous4[id] || magicwondrous5[id] || magicwondrous6[id]
		|| magicwondrous7[id] || magicwondrous8[id] || magicwondrous9[id]
		|| magicwondrous10[id] || magicwondrous11[id]
	) || magicwondrous1.not_found;

	return <Page />;

};

export default MagicWondrousPage;
