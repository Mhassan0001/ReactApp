function Serviceprop (props) {
    return(
        <>
        <div className="srprop">

        <p className="spropimg">
        <img className="serviceimg" src={props.img} alt="" />
        </p>

        <p className="prop1">
            <span className="das">{props.no1}</span> <span className="pr">{props.no2}</span>
        </p>

        <p className="propbt">
            <input className="servicebtn" type="button" value="Buy Now" />
        </p>
        </div>
        </>
    )
    
}

export default Serviceprop;