import AboutUs from './components/AboutUs/AboutUs';
import Banner from './components/Banner/Banner';
import ServicesSection from './components/ServicesSection/ServicesSection';

export default function Home() {
  return (
    <section>
      <div>
        <Banner></Banner>
      </div>
      <div className="">
        <AboutUs></AboutUs>
      </div>
      <div className="">
        <ServicesSection></ServicesSection>
      </div>
    </section>
  );
}
