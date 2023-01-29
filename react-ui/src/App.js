import React from 'react';
import Header from './Header'; //Include Header
import Footer from './Footer';
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import SingleProduct from './SingleProduct'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Header></Header>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/single-product" element={<SingleProduct />} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
     
    </div>
  );
}

export default App;