import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Map from './components/Map';

const App = () => {
  return (
    <main className='bg-zinc-50'>
      <Header />
        <About/>
        <Menu/>
        <Gallery/>
        <Map/>
      <Footer />
    
    </main>
  );
};

export default App;
