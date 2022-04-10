import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/header';
import Home from './components/Home/home';
import AboutUs from './components/AboutUs/aboutus';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Home/>
      <AboutUs/>
      </BrowserRouter>
    </div>
  );
}

export default App;
