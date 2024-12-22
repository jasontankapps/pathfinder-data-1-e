import magic_wondrous from './subpages/__magic-wondrous2';
import MagicWondrousGroupBasic from './MagicWondrousGroupBasic';

const MagicWondrousGroup2Page: React.FC<{id: string}> = ({id}) => <MagicWondrousGroupBasic id={id} info={magic_wondrous} />;

export default MagicWondrousGroup2Page;
