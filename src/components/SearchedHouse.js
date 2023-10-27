import { useParams } from "react-router-dom";
import Enquiry from "./Enquiry";

const SearchedHouse = (props) => {

    //hooks have to be at the top 
    let paramsObj = useParams();
    console.log(paramsObj); //contains the house id
    console.log(props); 

    //find will return the first element in the iterable object that meets the parameters 
    let findHouseObj = props.houses.find((house) => house._id === parseInt(paramsObj.id));
    console.log(findHouseObj);


    if (!props.houses) {
        return <p>Loading...</p>;
    }

    return (<>
    <h1 className="text-primary text-center my-3">Searched House</h1>
        {/* <House houseinfo={findHouseObj }/> */}


        <div className="row">
            <div className="col-sm-6">
                <h3>{findHouseObj.address}</h3>
            </div>        
            <div className="col-sm-6">
                <h3> Price:  ${findHouseObj.price} USD</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 ">
                <img className='img-fluid' src={`/img/${findHouseObj.photo}`} alt="house"/>
            </div>
            <div className="col-sm-6">
            <h5>Description</h5>
                <p>{findHouseObj.description}</p>
                {
                    sessionStorage.getItem('custName') && <Enquiry/> 
                }
                
            </div>
        </div>
    
    </>);
}
 
export default SearchedHouse;