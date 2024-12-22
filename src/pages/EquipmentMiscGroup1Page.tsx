import equipment_misc from './subpages/__eq-misc1';
import EquipmentMiscGroupBasic from './EquipmentMiscGroupBasic';

const EquipmentMiscGroup1Page: React.FC<{id: string}> = ({id}) =>
	<EquipmentMiscGroupBasic id={id} info={equipment_misc} possiblyUnknown={true} />;

export default EquipmentMiscGroup1Page;
