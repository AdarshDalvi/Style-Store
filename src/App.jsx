import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import SingleProduct from './pages/SingleProduct'
import About from './pages/About'
import Account from './pages/Account'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Layout from './components/Layout'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='shop/:categoryId' element={<Shop/>}/>
          <Route path='product/:id' element={<SingleProduct/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
