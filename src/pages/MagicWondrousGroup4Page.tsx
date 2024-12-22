import magic_wondrous from './subpages/__magic-wondrous4';
import MagicWondrousGroupBasic from './MagicWondrousGroupBasic';

const MagicWondrousGroup4Page: React.FC<{id: string}> = ({id}) => <MagicWondrousGroupBasic id={id} info={magic_wondrous} />;

export default MagicWondrousGroup4Page;
