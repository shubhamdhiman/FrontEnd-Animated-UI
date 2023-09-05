
import './App.css';
import EverWondered from './Components/EverWondered';
import LandingPage from './Components/LandingPage';
import MeetAhead from './Components/MeetAhead';
import Navbar from './Components/Navbar';
import Note from './Components/Note';
import OpenVacancies from './Components/OpenVacancies';
import SoundFamiliar from './Components/SoundFamiliar';
import StaticContainer from './Components/StaticContainer';
import Workwithus from './Components/Workwithus';
import { staticContainer1 ,staticContainer2, workwithusData} from './Utils';
function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <StaticContainer colData={staticContainer1}/>
      <SoundFamiliar />
      <MeetAhead />
      <StaticContainer colData={staticContainer2}/>
      <EverWondered />
      <Note />
      <Workwithus data={workwithusData}/>
      <OpenVacancies />
      <hr className='w-full bg-gray-400'/>
    </div>
  );
}

export default App;
