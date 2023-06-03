import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import { GlobalProvider } from './contexts/globalState';
import { Home, ProductDetailPage } from './pages';
import { CategoryPage } from './pages/categoryPage';
import { DetailProvider } from './contexts/detailState';
import { CategoryProvider } from './contexts/categoryState';
import { BasketProvider } from './contexts/basketState';

function App() {

  return (
    <GlobalProvider>
      <DetailProvider>
        <CategoryProvider>
          <BasketProvider>
            <Router>
            <Navbar />
            <div className="App">
              <Routes>
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path='/category/:name' element={<CategoryPage />} />
                <Route index element={<Home />} />
              </Routes>
              </div>
            </Router>
            </BasketProvider>
        </CategoryProvider>
      </DetailProvider>
    </GlobalProvider>
  );
}

export default App;