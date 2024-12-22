import classes from './subpages/__class2';
import ClassGroupBasic from './ClassGroupBasic';

const ClassGroup2Page: React.FC<{id: string}> = ({id}) => <ClassGroupBasic id={id} info={classes} />;

export default ClassGroup2Page;
