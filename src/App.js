
import './App.css';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import SoundFamiliar from './Components/SoundFamiliar';
import StaticContainer from './Components/StaticContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <StaticContainer />
      <SoundFamiliar />
    </div>
  );
}

export default App;
