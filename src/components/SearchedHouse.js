import { useParams } from "react-router-dom";
import House from "./House";

const SearchedHouse = (props) => {

    //hooks have to be at the top 
    let paramsObj = useParams();
    console.log(paramsObj); //contains the house id
    console.log(props); 

    //find will return the first element in the iterable object that meets the parameters 
    let findHouseObj = props.houses.find((house) => house._id == paramsObj.id);
    console.log(findHouseObj);


    if (!props.houses) {
        return <p>Loading...</p>;
    }

    return (<>
    <h1>Searched House</h1>
        <House houseinfo={findHouseObj }/>
    </>);
}
 
export default SearchedHouse;