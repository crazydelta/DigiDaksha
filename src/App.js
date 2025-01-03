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
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/contactform' element={<ContactForm/>}/>
      </Routes>
    </> 
  )
}

export default App;