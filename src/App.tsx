import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Layout/Footer/Footer";
import { Header } from "./Components/Layout/Header/Header";
import { ProductDetail } from "./Components/ProductDetail/ProductDetail";
import { ProductList } from "./Components/ProductList/ProductList";
import { ShoppingCart } from "./Components/ShoppingCart/ShoppingCart";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
