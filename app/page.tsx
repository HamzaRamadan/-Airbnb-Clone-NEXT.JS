// import Banner from './components/Banner';
import Banner from './components/Banner';
import Explore from './components/Explore';
import Footer from './components/Footer';
import GreatestOutdoors from './components/GreatestOutdoors';
import Live from './components/Live';
import Header from './components/header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Explore />
        <Live />
        <GreatestOutdoors
          title='The Greatest Outdoors'
          desc='Wishlists curated by Airbnb'
          linkText='Get Inspired'
        />
      </main>
      <Footer />
    </>
  );
}
