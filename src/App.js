import './App.css';
import Navbar from './components/Navbar';
import Buttonini from './components/ButtonIni/Buttonini'

function App() {
  return (
    <div className='App'>
      <header class='header1'>
        <Navbar/>
      </header>
      <div>
        <Buttonini/>
      </div>
    </div>
  );
}

export default App;

