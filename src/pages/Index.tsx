import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Certificates from '@/components/Certificates';
import Calculator from '@/components/Calculator';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Services />
      <Portfolio />
      <About />
      <Certificates />
      <Calculator />
      <Contacts />
      <Footer />
    </div>
  );
}
