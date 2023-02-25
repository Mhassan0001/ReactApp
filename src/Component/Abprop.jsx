function Abprop(props) {
    return(
         <>
         <div className="prow">
  <img className="propimg" src= {props.img} alt="" />
      <p className="name">{props.name}</p>
      <p className="lor">{props.lorem}</p>
      </div>
         </>
    );
    
};

export default Abprop;