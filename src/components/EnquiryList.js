import axios from "axios";
import { useEffect, useState } from "react";

const EnquiryList = () => {

    let [enquiries, setEnquiries] = useState();

    //ename, email, remarks, date
    useEffect(() => {

        async function fetchData() {let resp = await axios.get('http://localhost:3002/allenquiries');
        let data = await resp.data;

        console.log(data); 
        setEnquiries(data); 
        }
        fetchData(); 
      },[]);

      if(!enquiries){
<h3>Loading Enquiries. Please wait</h3>
      }else{
        return ( <>

            <h2 className="my-3">Enquiries Received</h2>
            <div>
                <div className="table-responsive">
                    <table className="table table-success table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Date</th>
                                <th scope="col">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {enquiries.map((elem) => {
                                return <tr className="" key={elem._id}> 
                                    <td>{elem.ename}</td>
                                    <td>{elem.email}</td>
                                    <td>{elem.date}</td>
                                    <td>{elem.remarks}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                
            </div>
        
            </> );
      }

    
}
 
export default EnquiryList;