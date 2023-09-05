
import './App.css';
import LandingPage from './Components/LandingPage';
import MeetAhead from './Components/MeetAhead';
import Navbar from './Components/Navbar';
import SoundFamiliar from './Components/SoundFamiliar';
import StaticContainer from './Components/StaticContainer';
import { staticContainer1 ,staticContainer2} from './Utils';
function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <StaticContainer colData={staticContainer1}/>
      <SoundFamiliar />
      <MeetAhead />
      <StaticContainer colData={staticContainer2}/>
    </div>
  );
}

export default App;
