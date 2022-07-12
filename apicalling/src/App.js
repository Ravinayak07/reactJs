import './App.css';
import Apicalling from './components/Apicalling';
import Home from './components/RoutingComponents/Home/Home';
import AboutMe from './components/RoutingComponents/AboutMe/AboutMe';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      {/* <Apicalling /> */}
      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        {/* <Route path="/orders" element={<AboutMe />} /> */}
      </Routes>
      {/* <AboutMe /> */}
    </div>
    </BrowserRouter>
    
  );
}

export default App;
