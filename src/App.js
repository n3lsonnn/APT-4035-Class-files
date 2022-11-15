import './App.css';
import Navigation from './Navigation';
import Footer from './Footor';
import RoutesTree from './Components/RoutesTree';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <RoutesTree/>
      <Footer/>
    </div>
  );
}

export default App;
