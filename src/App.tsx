import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import ProductsDetail from "./pages/ProductsDetail"
export function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Products" element={<Products />}/>
        <Route path="/Cart" element={<Cart />}/>

        {/*dynamic route*/}
        <Route path="/Products/:id" element={<ProductsDetail />}/>
      </Routes>

    </div>
  )
}

export default App
