import './App.css';
import Body from './Body/Body';
import Cart from './Cart/cart';
import Header from './Header/Header';
import Wishlist from './Wishlist/wishlist';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
