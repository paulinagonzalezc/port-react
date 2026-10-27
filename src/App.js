import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Qualification from './components/qualification/Qualification';
import Work from './components/Work/Work';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Home />
        <About />
        <Qualification />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
