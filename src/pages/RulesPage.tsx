import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_GEN_rule.json';
import ErrorPage from './ErrorPage';
import './css/Page.css';

type Params = { id?: keyof typeof data };

const RulesGroup01Page = lazy(() => import("./RulesGroup01Page"));
const RulesGroup02Page = lazy(() => import("./RulesGroup02Page"));
const RulesGroup03Page = lazy(() => import("./RulesGroup03Page"));
const RulesGroup04Page = lazy(() => import("./RulesGroup04Page"));
const RulesGroup05Page = lazy(() => import("./RulesGroup05Page"));
const RulesGroup06Page = lazy(() => import("./RulesGroup06Page"));
const RulesGroup07Page = lazy(() => import("./RulesGroup07Page"));
const RulesGroup08Page = lazy(() => import("./RulesGroup08Page"));
const RulesGroup09Page = lazy(() => import("./RulesGroup09Page"));
const RulesGroup10Page = lazy(() => import("./RulesGroup10Page"));
const RulesGroup11Page = lazy(() => import("./RulesGroup11Page"));
const RulesGroup12Page = lazy(() => import("./RulesGroup12Page"));
const RulesGroup13Page = lazy(() => import("./RulesGroup13Page"));
const RulesGroup14Page = lazy(() => import("./RulesGroup14Page"));
const RulesGroup15Page = lazy(() => import("./RulesGroup15Page"));
const RulesGroup16Page = lazy(() => import("./RulesGroup16Page"));
const RulesGroup17Page = lazy(() => import("./RulesGroup17Page"));
const RulesGroup18Page = lazy(() => import("./RulesGroup18Page"));
const RulesGroup19Page = lazy(() => import("./RulesGroup19Page"));
const RulesGroup20Page = lazy(() => import("./RulesGroup20Page"));
const RulesGroup21Page = lazy(() => import("./RulesGroup21Page"));
const RulesGroup22Page = lazy(() => import("./RulesGroup22Page"));
const RulesGroup23Page = lazy(() => import("./RulesGroup23Page"));
const RulesGroup24Page = lazy(() => import("./RulesGroup24Page"));
const RulesGroup25Page = lazy(() => import("./RulesGroup25Page"));
const RulesGroup26Page = lazy(() => import("./RulesGroup26Page"));
const RulesGroup27Page = lazy(() => import("./RulesGroup27Page"));
const RulesGroup28Page = lazy(() => import("./RulesGroup28Page"));
const RulesGroup29Page = lazy(() => import("./RulesGroup29Page"));
const RulesGroup30Page = lazy(() => import("./RulesGroup30Page"));
const RulesGroup31Page = lazy(() => import("./RulesGroup31Page"));
const RulesGroup32Page = lazy(() => import("./RulesGroup32Page"));
const RulesGroup33Page = lazy(() => import("./RulesGroup33Page"));
const RulesGroup34Page = lazy(() => import("./RulesGroup34Page"));
const RulesGroup35Page = lazy(() => import("./RulesGroup35Page"));
const RulesGroup36Page = lazy(() => import("./RulesGroup36Page"));
const RulesGroup37Page = lazy(() => import("./RulesGroup37Page"));
const RulesGroup38Page = lazy(() => import("./RulesGroup38Page"));
const RulesGroup39Page = lazy(() => import("./RulesGroup39Page"));
const RulesGroup40Page = lazy(() => import("./RulesGroup40Page"));
const RulesGroup41Page = lazy(() => import("./RulesGroup41Page"));
const RulesGroup42Page = lazy(() => import("./RulesGroup42Page"));
const RulesGroup43Page = lazy(() => import("./RulesGroup43Page"));
const RulesGroup44Page = lazy(() => import("./RulesGroup44Page"));
const RulesGroup45Page = lazy(() => import("./RulesGroup45Page"));

interface Props {
	id: string
}

const pages = [
	(props: Props) => <RulesGroup01Page id={props.id} />,
	(props: Props) => <RulesGroup02Page id={props.id} />,
	(props: Props) => <RulesGroup03Page id={props.id} />,
	(props: Props) => <RulesGroup04Page id={props.id} />,
	(props: Props) => <RulesGroup05Page id={props.id} />,
	(props: Props) => <RulesGroup06Page id={props.id} />,
	(props: Props) => <RulesGroup07Page id={props.id} />,
	(props: Props) => <RulesGroup08Page id={props.id} />,
	(props: Props) => <RulesGroup09Page id={props.id} />,
	(props: Props) => <RulesGroup10Page id={props.id} />,
	(props: Props) => <RulesGroup11Page id={props.id} />,
	(props: Props) => <RulesGroup12Page id={props.id} />,
	(props: Props) => <RulesGroup13Page id={props.id} />,
	(props: Props) => <RulesGroup14Page id={props.id} />,
	(props: Props) => <RulesGroup15Page id={props.id} />,
	(props: Props) => <RulesGroup16Page id={props.id} />,
	(props: Props) => <RulesGroup17Page id={props.id} />,
	(props: Props) => <RulesGroup18Page id={props.id} />,
	(props: Props) => <RulesGroup19Page id={props.id} />,
	(props: Props) => <RulesGroup20Page id={props.id} />,
	(props: Props) => <RulesGroup21Page id={props.id} />,
	(props: Props) => <RulesGroup22Page id={props.id} />,
	(props: Props) => <RulesGroup23Page id={props.id} />,
	(props: Props) => <RulesGroup24Page id={props.id} />,
	(props: Props) => <RulesGroup25Page id={props.id} />,
	(props: Props) => <RulesGroup26Page id={props.id} />,
	(props: Props) => <RulesGroup27Page id={props.id} />,
	(props: Props) => <RulesGroup28Page id={props.id} />,
	(props: Props) => <RulesGroup29Page id={props.id} />,
	(props: Props) => <RulesGroup30Page id={props.id} />,
	(props: Props) => <RulesGroup31Page id={props.id} />,
	(props: Props) => <RulesGroup32Page id={props.id} />,
	(props: Props) => <RulesGroup33Page id={props.id} />,
	(props: Props) => <RulesGroup34Page id={props.id} />,
	(props: Props) => <RulesGroup35Page id={props.id} />,
	(props: Props) => <RulesGroup36Page id={props.id} />,
	(props: Props) => <RulesGroup37Page id={props.id} />,
	(props: Props) => <RulesGroup38Page id={props.id} />,
	(props: Props) => <RulesGroup39Page id={props.id} />,
	(props: Props) => <RulesGroup40Page id={props.id} />,
	(props: Props) => <RulesGroup41Page id={props.id} />,
	(props: Props) => <RulesGroup42Page id={props.id} />,
	(props: Props) => <RulesGroup43Page id={props.id} />,
	(props: Props) => <RulesGroup44Page id={props.id} />,
	(props: Props) => <RulesGroup45Page id={props.id} />,
];

const RulesPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0] || ErrorPage;

	return <Page id={id || "not_found"} />;

};

export default RulesPage;
