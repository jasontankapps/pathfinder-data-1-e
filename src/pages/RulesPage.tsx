import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_rule.json';
import Loading from '../Loading';
import './Page.css';

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

interface PageProps {
	id: string
}

const pages = [
	(props: PageProps) => <RulesGroup01Page id={props.id} />,
	(props: PageProps) => <RulesGroup02Page id={props.id} />,
	(props: PageProps) => <RulesGroup03Page id={props.id} />,
	(props: PageProps) => <RulesGroup04Page id={props.id} />,
	(props: PageProps) => <RulesGroup05Page id={props.id} />,
	(props: PageProps) => <RulesGroup06Page id={props.id} />,
	(props: PageProps) => <RulesGroup07Page id={props.id} />,
	(props: PageProps) => <RulesGroup08Page id={props.id} />,
	(props: PageProps) => <RulesGroup09Page id={props.id} />,
	(props: PageProps) => <RulesGroup10Page id={props.id} />,
	(props: PageProps) => <RulesGroup11Page id={props.id} />,
	(props: PageProps) => <RulesGroup12Page id={props.id} />,
	(props: PageProps) => <RulesGroup13Page id={props.id} />,
	(props: PageProps) => <RulesGroup14Page id={props.id} />,
	(props: PageProps) => <RulesGroup15Page id={props.id} />,
	(props: PageProps) => <RulesGroup16Page id={props.id} />,
	(props: PageProps) => <RulesGroup17Page id={props.id} />,
	(props: PageProps) => <RulesGroup18Page id={props.id} />,
];

const RulesPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id].page || 1) - 1) : 0];

	return <Suspense fallback={<Loading />}><Page id={id || "not_found"} /></Suspense>;

};

export default RulesPage;
