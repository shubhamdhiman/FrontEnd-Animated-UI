
import './App.css';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import StaticContainer from './Components/StaticContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <StaticContainer />
    </div>
  );
}

export default App;
