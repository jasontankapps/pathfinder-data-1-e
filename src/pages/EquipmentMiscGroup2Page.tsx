import equipment_misc from './subpages/_GEN_eq-misc2';
import EquipmentMiscGroupBasic from './EquipmentMiscGroupBasic';

const EquipmentMiscGroup2Page: React.FC<{id: string}> = ({id}) => <EquipmentMiscGroupBasic id={id} info={equipment_misc} />;

export default EquipmentMiscGroup2Page;
