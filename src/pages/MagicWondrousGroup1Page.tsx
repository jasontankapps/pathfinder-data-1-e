import magic_wondrous from './subpages/__magic-wondrous1';
import MagicWondrousGroupBasic from './MagicWondrousGroupBasic';

const MagicWondrousGroup1Page: React.FC<{id: string}> = ({id}) =>
	<MagicWondrousGroupBasic id={id} info={magic_wondrous} possiblyUnknown={true} />;

export default MagicWondrousGroup1Page;
