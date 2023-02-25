function Centerprop(props) {

    return(
        <>

    <div className="centerRow">

      <div className="centerRow1">
        <img className="styleImg" src={props.img} alt="" />
      </div>
         
      <div className="centerRow2">
        <p className="styleTxt">{props.txt}</p>
      </div>

      <div className="centerRow3">
        <p className="styleTxt1">{props.txt1}</p>
      </div>
      </div>
      
        </>
    )
    
}

export default Centerprop;