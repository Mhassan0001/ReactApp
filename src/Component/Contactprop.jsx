function Contactprop(props) {
   
    return(
        <>
        <div className="contactRow">
            <div className="contactimg">
                <img className="imgct" src= {props.img}  alt="" />
            </div>

         <div className="contactname">
           <p className="contactn">{props.n}</p>
         </div>

        <div className="contactpost">
           <p className="contactlast">{props.last}</p>
        </div>

        <div className="contactbutton">
            <button className="aac">{props.aa}</button>
            <button className="bbc">{props.bb}</button>
            <button className="cccc">{props.cc}</button>
            <button className="ddd">{props.dd}</button>

        </div>


        </div>
        </>
    )
    
}

export default Contactprop;