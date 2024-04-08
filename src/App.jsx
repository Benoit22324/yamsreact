import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Rules from './pages/Rules'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/rules'} element={<Rules/>}/>
        <Route path={'*'} element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
