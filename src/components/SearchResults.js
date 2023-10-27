import { useParams } from 'react-router-dom';
import SearchResultsRow from './SearchResultsRow';

const SearchResults = (props) => {


    console.log(props.houses);

    //paramsObj will have the key-value pair
    const paramsObj = useParams();
    console.log(paramsObj);

    //filter though the array of house objects
    //get those house objects that belong to the selected county
    let filteredHousesArray = props.houses.filter((elem) => elem.county === paramsObj.county);
    console.log(filteredHousesArray);


    return (<div className="row">
        <h4>Search results - {paramsObj.county}</h4>
        <div className="table-responsive">
            <table className="table table-hover table-warning">
                <thead >
                    <tr>
                        <th scope="col">Address</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredHousesArray.map((elem) =>
                        <SearchResultsRow house={elem} />)}
                </tbody>
            </table>
        </div>
    </div>);
}

export default SearchResults;


