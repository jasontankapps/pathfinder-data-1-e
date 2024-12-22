import main from './subpages/__main2';
import MainGroupBasic from './MainGroupBasic';

const MainGroup02Page: React.FC<{id: string}> = ({id}) => <MainGroupBasic id={id} info={main} />;

export default MainGroup02Page;
