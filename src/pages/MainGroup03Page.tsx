import main from './subpages/__main3';
import MainGroupBasic from './MainGroupBasic';

const MainGroup03Page: React.FC<{id: string}> = ({id}) => <MainGroupBasic id={id} info={main} />;

export default MainGroup03Page;
