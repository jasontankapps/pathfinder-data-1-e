import main from './subpages/_GEN_main1';
import MainGroupBasic from './MainGroupBasic';

const MainGroup01Page: React.FC<{id: string}> = ({id}) => <MainGroupBasic id={id} info={main} />;

export default MainGroup01Page;
