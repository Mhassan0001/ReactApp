import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import './Footer.css';
function Footer() {


    return(
        <>
        <div className="footer">

      <div className='footercol'>
        <h1 className= 'footercolh1'>About</h1>
        <p className='footercolp1'>Histroy</p>
        <p className='footercolp2'>Our Team</p>
        <p className='footercolp3'>Brand Guidelines</p>
        <p className='footercolp4'>Term & Condition</p>
        <p className='footercolp5'>Privacy Policy</p>

      </div>



      <div className='footercol2'>
        <h1 className='footercol2h1'>Services</h1>
       <p className='footercol2p1'>How to Order</p>
      <p className='footercol2p2'>Our Product</p>
      <p className='footercol2p3'>Order Status</p>
      <p className='footercol2p4'>Promo</p>
      <p className='footercol2p5'>Payment Methood</p>
      </div>


      <div className='footercol3'>
       <h1 className='footercol3h1'>Title Here</h1>
       <p className='footercol3p1'>Lorem ipsum dolor sit amet consectetur</p>
       <p className='footercol3p2'>
       <input className='stylefootsearch'  type="text" name=""  />
      <button className='stylefootbtn'><SendSharpIcon/></button>
        </p>


       <div className='foobtn'>
        <button  className='sfbtn1'><  InstagramIcon/></button>
        <button className='sfbtn2'><FacebookRoundedIcon/></button>
        <button className='sfbtn3'><TwitterIcon/></button>
        <button className='sfbtn4'><WhatsAppIcon/></button>
       </div>

        </div>

        </div>
        </>
    )
}

export default Footer;