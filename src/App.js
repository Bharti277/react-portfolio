import SharedLayout from './components/SharedLayout';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
 
   return(
     <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About/>} />
          <Route path='projects' element={<Projects />} />
        </Route>
      </Routes>
     </BrowserRouter>
     </>
  )
 
   
}

export default App;