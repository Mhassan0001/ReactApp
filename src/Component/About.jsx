import Abprop from './Abprop';
import c from './img/Shape.png';
import d from './img/d.png';
import e from './img/e.png';
import f from './img/f.png';
import g from './img/g.png';
import h from './img/h.png';
import i from './img/bn.png';
import { useNavigate } from 'react-router-dom';

function About () {

    const navigate=useNavigate();
    function im(){
        navigate('/s');
    }
    
    return(
    <>


     <div className="row">

        <p className="row1"><h1>Title Here</h1></p>
        <p className="row2">Lorem ipsum dolor sit amet consectetur, <br/> adipisicing elit. Optio iste esse illo.</p>
     </div>

     <div className="row3">


      <div className='row7'>
    <Abprop   img={d}
            name='Veterinarian'
            lorem= 'Lorem ipsum dolor sit amet consectetur.adipisicing elit. Ipsam, veritatis fugiat.'
    />
</div>

<Abprop img={e}
            name='Vaccination Care'
            lorem='Lorem ipsum dolor sit amet consectetur. adipisicing elit. Ipsam, veritatis fugiat.'
    />


<Abprop img={c}
            name='Dental Care'
            lorem='Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam, veritatis fugiat.'
    />
</div>
{/*------- NxT Half Area -----------*/}
<div className='half'>

    <div className='halfimg'>
     <img className='mv' src={f} alt="h" />

    </div>

    <div className='halfimg1'>
    <img className='mv' src={g} alt="h" />
    </div>

    <div className='mid'>
        <img className='mids' src={h} alt="h" />
    </div>

    <div className='lo'>
    <img className='lo1' src={i} alt="h" />
    </div>
    
<div className='halftxt'>

<h2 className='halfh2'>As a Veterinarian and<br />lover of animals</h2>

<p className='halfp'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eius id delectus beatae accusamusr. </p>

<p className='btn3m'>
<input onClick={im} className='btn3' type="button" value="Our service" /></p>

</div>


</div>
 
   </>

    )
}


export default  About    ;
