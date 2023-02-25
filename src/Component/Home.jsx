
// import Contact from './Contact';
import b from './img/b.png';
import{useNavigate} from'react-router-dom';



function Home() {

  
  const navigate = useNavigate();

  const iv= () => {
    navigate('/c');
  };

  function im(){
    navigate('/s')
  };
 


    return(

        <>
<div className="home">

      <div className="block1">
       <p className='np'>
        <h1>First I wanted to be <br/>a veterinarian</h1>
       </p>

       <p className='np1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Quidem praesentium sint nobis reprehenderit maiores <br/>  harum modi.
       </p>

       <p className="xx">
        <button className='btn1' onClick={iv} >Contact us</button>
        <button className='btn2' onClick={im}>Our Service</button>
        </p>
        </div>

        <div className="dog">
        <img className='img1' src={b} alt="random" />

        </div>


      </div>



      
        </>
    )
    
}

export default Home;