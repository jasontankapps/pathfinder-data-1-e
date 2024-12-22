import magic_wondrous from './subpages/__magic-wondrous3';
import MagicWondrousGroupBasic from './MagicWondrousGroupBasic';

const MagicWondrousGroup3Page: React.FC<{id: string}> = ({id}) => <MagicWondrousGroupBasic id={id} info={magic_wondrous} />;

export default MagicWondrousGroup3Page;
