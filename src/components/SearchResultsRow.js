import { useNavigate } from "react-router-dom";

const SearchResultsRow = (props) => {

    let navigate = useNavigate();

    let clickHandler = () => {
        console.log('clicked!');

        navigate(`/searchedHouse/` + props.house._id);   
    }

    return (<>
    <tr key={props.house._id} onClick={clickHandler}>
                        <td>{props.house.address}</td>
                        <td>{props.house.price}</td>
    </tr>
    
    </>  );
}
 
export default SearchResultsRow;