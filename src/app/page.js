import AboutUs from './components/AboutUs/AboutUs';
import Banner from './components/Banner/Banner';
import InfoSection from './components/InfoSection/InfoSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import TeamSection from './components/TeamSection/TeamSection';

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
      <div>
        <InfoSection></InfoSection>
      </div>
      <div>
        <TeamSection></TeamSection>
      </div>
    </section>
  );
}
