
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import {
  BrowserRouter,
  Routes,
  Route,Navigate
} from "react-router-dom";

function App() {
  const user=true;
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/productpage/:id" element={<ProductPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={user?<Login/>:<Register/>}/>
        <Route path="/register" element={user?<Register/>:<Login/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
