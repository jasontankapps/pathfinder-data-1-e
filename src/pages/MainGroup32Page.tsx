import main from './subpages/_GEN_main32';
import MainGroupBasic from './MainGroupBasic';

const MainGroup32Page: React.FC<{id: string}> = ({id}) => <MainGroupBasic id={id} info={main} />;

export default MainGroup32Page;
