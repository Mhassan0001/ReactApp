import './contact.css';
import Contactprop from './Contactprop';
import Centerprop from './Centerprop';
import c1 from  './img/c1.png';
import c2 from  './img/c2.png';
import c3 from  './img/c3.png';
import next from './img/next.png';
import next1 from './img/next1.png';
import mi1 from './img/mi1.png';
import mi2 from './img/mi2.png';
import mi3 from './img/mi3.png';
import Lastprop from './Lastprop';
import l1 from './img/l1.png';
import l2 from './img/l2.png';
import l3 from './img/l3.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState } from 'react';
function Contact() {
    const color= 'bisque';

    let b='aliceblue';
    const [bgc, bgcc]=useState(b);
    function inc() {

        bgcc(color);
    }
    function nc() {

        bgcc(b);
    }
    return(
        <>
<div style={{backgroundColor:bgc}} onClick={inc} onDoubleClick={nc} className='contact'>


<div className="contact1">

 <p className='contacth1'><h1>The vetcare team</h1></p>
 <p  className='contactp' >Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sunt alias ut dolores dolore excepturi eaque.
 </p>

</div>

<div className='contactColumn'>
    <div className='cr'>
<Contactprop
      img={c1}
      n='Jennifer Mullen'
      last='VETERINARY'
      aa= {< InstagramIcon/>}
      bb={<FacebookRoundedIcon/>}
      cc= {<TwitterIcon/>}
      dd={< WhatsAppIcon/>}
/>
</div>
<div className='cr1'>
<Contactprop
      img={c2}
      n='Sheeren Collins'
      last='ADMINSTRATION'
      aa= {< InstagramIcon/>}
      bb={<FacebookRoundedIcon/>}
      cc= {<TwitterIcon/>}
      dd={<  WhatsAppIcon/>}
/>
</div>

<div className='cr2'>
<Contactprop
      img={c3}
      n='Jennifer Mullen'
      last='VETERINARY'
      aa= {< InstagramIcon/>}
      bb={<FacebookRoundedIcon/>}
      cc= {<TwitterIcon/>}
      dd={< WhatsAppIcon/>}
/>
</div>

</div>
</div>
{/* --------------------------------------------------------
                       CENTER PHOTO
-------------------------------------------------------- */}

<div className='centerPortion'>

<div className='portion1'>
    <img className='centers' src={next} alt="" />
</div>

<div className='portion2'>
    <img className='centers' src={next1} alt="" />
</div>

<div className='centerColumn'>
<Centerprop 
        img={mi1}
        txt='+34793'
        txt1='Happy Clients'

/>

<Centerprop 
        img={mi2}
        txt='+45382'
        txt1='Departament'

/>

<Centerprop 
        img={mi3}
        txt='+54762'
        txt1='Vaccination'

/>


</div >

</div>

{/* ----------------------------------------------------------
                         LAST PART
-------------------------------------------------------------*/}


<div className='lastPart'>

 <div className='last1'>
    <p className='l1'><h1>Recent Posts</h1></p>
    <p className='l2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Porro, soluta? Corrupti, ea! Lorem ipsum dolor sit.</p>
</div>


<div className='lastpropColumn'>


<div className='nextlast'>
    <Lastprop lastimg={l1}
         
               lastbtn='Read More+'
             
    
    />
 </div>

<Lastprop lastimg={l2}
          
                lastbtn='Read More+'

    
    />




<Lastprop lastimg={l3}
       
              lastbtn='Read More+'

    
    />


</div>






</div>

        
        </>
    )
}

export default Contact;