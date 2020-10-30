
function Input(props) {

  return (
    <div className="personnal-information">
        <div className="height-area">
            <label> Height (in cm) : </label>
            <input type="number" onChange={(e) => props.handleHeight(e.target.value)} required/>  
        </div>
        <div className="weight-area">
            <label> Weight (in kg) : </label>
            <input type="number" onChange={(e) => props.handleWeight(e.target.value)} required/>
        </div>
        <div className="age-area">
            <label> Age : </label>
            <input type="number" onChange={(e) => props.handleAge(e.target.value)} required/>
        </div>
    </div>
  );
}

export default Input;
