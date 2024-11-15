import Home from './pages/home'
import {Route,Routes } from 'react-router-dom'
import About from './pages/about'
import Whatwedo from './pages/what_we_do'
import Email from './pages/email'
 
export default function App() {
  return (
    <>
         
         <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/What_we_do' element={<Whatwedo/>}/>
                  <Route path='/verification' element={<Email/>}/>

         </Routes>
    </>
  )
}

