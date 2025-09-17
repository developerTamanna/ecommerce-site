import AboutUs from './components/AboutUs/AboutUs';
import Banner from './components/Banner/Banner';

export default function Home() {
  return (
    <section>
      <div>
        <Banner></Banner>
      </div>
      <div className=''>
        <AboutUs></AboutUs>
      </div>
    </section>
  );
}
