import classes from './subpages/__class1';
import ClassGroupBasic from './ClassGroupBasic';

const ClassGroup1Page: React.FC<{id: string}> = ({id}) =>
	<ClassGroupBasic id={id} info={classes} possiblyUnknown={true} />;

export default ClassGroup1Page;
