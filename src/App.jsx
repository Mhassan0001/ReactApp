import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from './Component/Nav';
import './index.css';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
    return<BrowserRouter>
<Nav/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/a' element={<About/>}/>
<Route path='/s' element={<Service/>}/>
<Route path='/c' element={<Contact/>}/>
</Routes>
<Footer/>
</BrowserRouter>
}

export default App;