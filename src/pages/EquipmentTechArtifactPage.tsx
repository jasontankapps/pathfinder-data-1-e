import { useParams } from 'wouter';
import Equipment, { test } from './subpages/__tech-artifact';
import './Page.css';

type Params = { id?: string };

const EquipmentTechArtifactPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Equipment id={test(id) ? id : "not_found"} />;
};

export default EquipmentTechArtifactPage;
