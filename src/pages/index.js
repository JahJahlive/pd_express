
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};

export default Home;
