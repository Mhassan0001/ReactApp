import './service.css';
import Serviceprop from './Serviceprop';
import j from './img/j.png';
import k from './img/k.png';
import l from './img/l.png';
function Service () {
    return(
    <>

    <div className="service">
<p className='srh1'><h1 >Title Here</h1></p>
<p className='srp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Suscipit sequi earum consectetur.</p>
</div>


<div className='srcol'>
    <div className='nxt'>
<Serviceprop 
            img={j}
            no1='$50'
            no2='$30'
/>
</div>
<Serviceprop 
            img={k}
            no1='$40'
            no2='$25'
/>

<Serviceprop 
            img={l}
            no1='$45'
            no2='$20'
/>
</div>

   </>

    )
}


export default  Service    ;
