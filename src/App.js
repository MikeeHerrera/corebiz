import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Footer from './Footer';
import Navbar from './Nav';
import Slide from './slider';
import Subscribe from './subscribe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slide/>
     <Home/>

     <Subscribe/>
     <Footer/>
    </div>
  );
}

export default App;
