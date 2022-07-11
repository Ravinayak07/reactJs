import './App.css';
import Navbar from './components/Navbar/Navbar'; //or Navbar.js
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience';

//Components to be made:
// 1.Navbar
// 2.About
// 3.tech Stacks
// 4.Experience
// 5.Projects
//Components name should start with capital letter

//we will make separate folder for components inside src folder
function App() {
  return (
    <div className="App">
      <Navbar /> 
      <About />
      <TechStack />
      <Experience />
    </div>
  );
}

//All components are imported and called in App.js and App.js is imported and called in
//index.js. so you can say that All components inside index.js

export default App;
