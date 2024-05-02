import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
// import Career from '../components/career/';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio'} />
      <h1>Portfolio</h1>
      {/* <Career /> */}
    </Wrapper>
  );
};

export default index;