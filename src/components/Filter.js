import {useNavigate} from "react-router-dom";

const Filter = (props) => {

    let navigate = useNavigate(); 
    
    console.log(props.houses); 
    //array of counties 
    //array.map to iterate and generate the options dynamically 

    let arr = props.houses.map((elem) => elem.county);
    console.log(arr); 

    let distinctCounties = Array.from(new Set([...arr]));

    // const distinctCounties = [...new Set(arr)]; //array.from() to change from set to array
    console.log(distinctCounties);

    //use onchange 
    //will retrieve information from the selection
    let changeHandler = (e) => {
        console.log(e.target.value); 

        navigate(`/searchresults/${e.target.value}` ); 
    }

    return (<>

    <div className="row py-3 border border-secondary-subtle">
       
        <div className="col-sm-2 offset-sm-4">
            <h6>Select county</h6>
        </div>
        <div className="col-sm-6">
            <select onChange={(e) => changeHandler(e)}>
                <option key="select" value="select">Select</option>
                {distinctCounties.map((county)=> <option key={county} value={county}> {county} </option>)}

                {/* <option value="county1">County 1</option>
                <option value="county2">County 2</option>
                <option value="county3">County 3</option> */}
            </select>
        </div>
    </div>
   
    </>);
}
 
export default Filter;