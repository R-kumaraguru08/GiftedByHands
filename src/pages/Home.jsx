import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Gallery from '../components/Gallery';
import WhyChoose from '../components/WhyChoose';
import Reviews from '../components/Reviews';
import InstagramCTA from '../components/InstagramCTA';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Gallery />
        <WhyChoose />
        <Reviews />
        <InstagramCTA />
      </main>
      <Footer />
    </>
  );
}

export default Home;
