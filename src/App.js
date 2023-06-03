import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import { GlobalProvider } from './contexts/globalState';
import { Home, ProductDetailPage } from './pages';
import { DetailProvider } from './contexts/detail';
import { CategoryProvider } from './contexts/category';
import { CategoryPage } from './pages/categoryPage';

function App() {

  return (
    <GlobalProvider>
      <DetailProvider>
        <CategoryProvider>
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
        </CategoryProvider>
      </DetailProvider>
    </GlobalProvider>
  );
}

export default App;