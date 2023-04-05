
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './views/home/Home';
import About from './views/about/About';
import Projects from './views/projects/Projects';
import Resume from './views/resume/Resume';
import Contact from './views/contact/Contact';

function App() {
  return (
   <section className='app'>

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path = "/projects" element={<Projects />} />
        <Route path = "/resume" element={<Resume />} />
        <Route path = "/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
   </section>
  );
}

export default App;
