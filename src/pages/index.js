
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Cotation from '../components/Cotation/Cotation';
import Forfait from '../components/Forfait/Forfait';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Forfait />
      <Cotation />
    </Layout>
  );
};

export default Home;
