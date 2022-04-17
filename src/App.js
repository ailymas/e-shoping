import "./App.css";
import ProductList from "./components/productList";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/productDetail";

function App() {
  return (
    <>
 
    <Header/>
      <Routes>
      <Route path='/' element={<ProductList />} />
        <Route path='/product/:productId' element={<ProductDetail />} />
      </Routes>
      <ProductList />
    
    </>
  );
}

export default App;
