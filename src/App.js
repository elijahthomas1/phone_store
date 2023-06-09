import './App.css';
import Navbar from './components/navbar/Navbar';
import Topbar from './components/topbar/Topbar';
import LocationBanner from './components/LocationBanner/LocationBanner';
import ImageSlider from './components/ImageSlider/ImageSlider';

import { data } from './data/phoneData';

function App() {
  return (
    <div>
      <header>
        <Topbar />
        <Navbar />
        <LocationBanner />
      </header>
      <ImageSlider images={data.headerImgs} />
    </div>
  );
}

export default App;
