
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Cotation from '../components/Cotation/Cotation';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Cotation />
    </Layout>
  );
};

export default Home;
