function Lastprop(props) {
    return(
        <>
<div className="LastpropRow">

<div className="LastpropRowimg">
    <img className="imgsl" src={props.lastimg} alt="" />
</div>

<div className="LastpropRowheading">
    <p>As a veterinarian and <br /> lover of animals</p>
</div>

<div className="LastpropRowdate">
    <p>FEBRUARY 09, 2020</p>
</div>

<div className="LastpropRowlorem">
    <p>Lorem ipsum dolor sit ametd consectetur adipisicing elit. Is quam officiis harum, magnam deserunt numquam.</p>
</div>

<div className="LastpropRowbtn">
    
    <button type="button" className="lastbtn">{props.lastbtn}</button>
</div>


</div>
        
        </>
    )
}

export default Lastprop;