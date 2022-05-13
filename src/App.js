import './App.css';
import Navbar from './Components/NavBar/Navbar';
import "./App.css";
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Services />
    </div>
  );
}

export default App;
