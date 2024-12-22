import magic_wondrous from './subpages/__magic-wondrous5';
import MagicWondrousGroupBasic from './MagicWondrousGroupBasic';

const MagicWondrousGroup5Page: React.FC<{id: string}> = ({id}) => <MagicWondrousGroupBasic id={id} info={magic_wondrous} />;

export default MagicWondrousGroup5Page;
