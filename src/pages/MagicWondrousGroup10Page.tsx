import magic_wondrous from './subpages/_GEN_magic-wondrous10';
import MagicWondrousGroupBasic from './MagicWondrousGroupBasic';

const MagicWondrousGroup10Page: React.FC<{id: string}> = ({id}) => <MagicWondrousGroupBasic id={id} info={magic_wondrous} />;

export default MagicWondrousGroup10Page;
