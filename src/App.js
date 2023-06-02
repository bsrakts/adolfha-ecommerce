
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/productList';
import { GlobalProvider } from './contexts/globalState';

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <div className="App">
        <ProductList/>
    </div>
    </GlobalProvider>
  );
}

export default App;
