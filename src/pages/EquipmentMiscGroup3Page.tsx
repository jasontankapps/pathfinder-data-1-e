import equipment_misc from './subpages/_GEN_eq-misc3';
import EquipmentMiscGroupBasic from './EquipmentMiscGroupBasic';

const EquipmentMiscGroup3Page: React.FC<{id: string}> = ({id}) => <EquipmentMiscGroupBasic id={id} info={equipment_misc} />;

export default EquipmentMiscGroup3Page;
