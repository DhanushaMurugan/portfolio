
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Fooder from './component/Fooder';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Fooder/>
    </div>
  );
}

export default App;
