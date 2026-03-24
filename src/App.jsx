import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Men from './pages/Men'
import Women from './pages/Women'
import Register from './pages/Register'
import Nav from './pages/Nav'
import Product from './pages/Product'
import Products from './pages/Products'
function App() {

  return (
    <div>
<BrowserRouter>
<Nav></Nav>
<Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/about' element={<About></About>}></Route>
<Route path='/product/:name' element={<Product></Product>}></Route>
<Route path='/products/' element={<Products></Products>}></Route>
<Route path='/men' element={<Men></Men>}></Route>
<Route path='/women' element={<Women></Women>}></Route>
<Route path='/register' element={<Register></Register>}></Route>

</Routes>
</BrowserRouter>
    </div>
  )
}

export default App
