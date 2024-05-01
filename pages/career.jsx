import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import Career from '../components/career/';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio'} />
      <Career />
    </Wrapper>
  );
};

export default index;