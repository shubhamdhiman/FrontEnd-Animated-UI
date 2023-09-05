
import './App.css';
import EverWondered from './Components/EverWondered';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import MeetAhead from './Components/MeetAhead';
import Navbar from './Components/Navbar';
import Note from './Components/Note';
import OpenVacancies from './Components/OpenVacancies';
import SelfImprovement from './Components/SelfImprovement';
import SoundFamiliar from './Components/SoundFamiliar';
import StaticContainer from './Components/StaticContainer';
import Workwithus from './Components/Workwithus';
import { staticContainer1 ,staticContainer2, workwithusData} from './Utils';
function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <StaticContainer colData={staticContainer1} hf="40vh"/>
      <SoundFamiliar />
      <MeetAhead />
      <SelfImprovement />
      <StaticContainer colData={staticContainer2} hf="70vh"/>
      <EverWondered />
      <Note />
      <Workwithus data={workwithusData}/>
      <OpenVacancies />
      <hr className='w-full border-1 border-gray-300'/>
      <Footer />
    </div>
  );
}

export default App;
