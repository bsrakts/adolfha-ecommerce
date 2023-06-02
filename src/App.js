
import './App.css';
import Navbar from './components/navbar';
import { GlobalProvider } from './contexts/globalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
      <Navbar/>
    </div>
    </GlobalProvider>
  );
}

export default App;
