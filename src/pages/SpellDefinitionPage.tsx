import { useParams } from 'react-router';
import getItem from '../components/getItem';
import defs from '../json/spell_definitions.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [ ["Main", "main/main"], ["Spells", "main/spells"], ["Spell Definitions", "main/spell_definitions"] ];

type Data = typeof defs;

type Params = { id?: keyof Data };

const SpellDefPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, defs);

	return <BasicPage title={title} markdown={markdown} tables={tables} hierarchy={hierarchy} sources={sources} />;
};

export default SpellDefPage;
