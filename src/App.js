import './App.css';
import Navbar from './components/Navbar';
import Buttonini from './components/ButtonIni/Buttonini'




function App() {
  return (
    <div className='App'>
      <header class='header1'>
        <Navbar/>
      </header>
      <div class='conte'>
        <h1 class='nombreprin'>
            SOCCERONE
        </h1>
      </div>
      <div>

        <h1 class='text1' >
          Todo lo que buscas
        </h1>
        <h1 class='text1' >
          sobre futbol!
        </h1>
      </div>

      <div>
        <Buttonini/>
      </div>
    </div>
  );
}

export default App;

