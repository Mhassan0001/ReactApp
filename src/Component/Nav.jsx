import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import a from './img/a.png';
import { useState } from "react";

function Nav() {
    const j= new Date().toLocaleTimeString();
    const [h,g]=useState(j);
    
    function call() {
        const j= new Date().toLocaleTimeString();
        g(j);
        
    }

    setInterval(call,0.1)
   
    return(
        <>
        <div className="nav">
            <div className="kl">
           <h1>{h}</h1> 
           </div> 
            <div className="logo">
            <img className="img" src={a}/>
            </div>

            <div className="tab">
             <ul>
                <li><NavLink id="colo" to='/' className='li'>Home</NavLink></li>
                <li><NavLink id="colo" to='/a'  className='li'>About</NavLink></li>
                <li><NavLink id="colo" to='/s'  className='li'>Service</NavLink></li>
                <li><NavLink id="colo" to='/c'  className='li'>Contact</NavLink></li>
               
         
             </ul>
             </div>
          

<div className='search'>
    <input type="text" className="txt" placeholder=" Search.."/>
    <button className="btn"><SearchIcon/></button>
    
  

</div>

         
 </div>
        </>
    )
    
}


export default Nav;