import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Services from './components/Services';


const App = () => {
  return (
    <>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/services' element={<Services/>}/>
        <Route  path='/contactform' element={<ContactForm/>}/>
      </Routes>
    </> 
  )
}

export default App;