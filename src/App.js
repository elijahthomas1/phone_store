import './App.css';
import Navbar from './components/navbar/Navbar';
import Topbar from './components/topbar/Topbar';
import LocationBanner from './components/LocationBanner/LocationBanner';

function App() {
  return (
    <div>
      <header>
        <Topbar />
        <Navbar />
        <LocationBanner />
      </header>
    </div>
  );
}

export default App;
