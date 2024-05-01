import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeMain from '../components/home';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'On Demand Global'} />
      <HomeMain />
    </Wrapper>
  );
};

export default index;