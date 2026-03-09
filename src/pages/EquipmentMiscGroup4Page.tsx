import equipment_misc from './subpages/_GEN_eq-misc4';
import EquipmentMiscGroupBasic from './EquipmentMiscGroupBasic';

const EquipmentMiscGroup4Page: React.FC<{id: string}> = ({id}) => <EquipmentMiscGroupBasic id={id} info={equipment_misc} />;

export default EquipmentMiscGroup4Page;
