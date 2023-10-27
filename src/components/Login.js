import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    //example of controlled components
    let [formObj, setFormObj] = useState({email: '', password: ''}); 
    let[invalidLoginMsg, setInvalidLoginMsg] = useState('');

    let navigate = useNavigate();

    let changeHandler = (e) => {
        console.log(e.target.value); 
        setFormObj(e.target.value); 
        setFormObj({...formObj, [e.target.name]:e.target.value});
       // console.log(formObj); 
    }

    //this would be sent to the database
    let clickHandler = async (e) => {

        //must always use this when submitting data
        e.preventDefault(); 
        console.log(formObj); 

        let authCheck = async () => {
            try {
                let resp = await axios.post('http://localhost:3002/login', { ...formObj });
                let userData = await resp.data;
                

                if(userData === 'Authentication Failed! :('){
                   
                    //set message for useState
                    setInvalidLoginMsg('Sorry. Invalid login credentials. Please try again.');
                }else{
                    console.log("Auth passed!")
                    console.log(userData);
                    setInvalidLoginMsg('');

                    // localStorage.setItem('custName', userData.name);
                    // localStorage.setItem('custEmail', userData.email);

                    //setting the values for the storage
                    sessionStorage.setItem('custName', userData.name);
                    sessionStorage.setItem('custEmail', userData.email); 
                    sessionStorage.setItem('role', userData.role); 
                    console.log("User role: " + userData.role);

                    if(userData.role === 'Realtor'){
                        navigate('/enquiries')
                    }else{
                        navigate('/'); 
                    }
                }
            } catch (error) {
                console.log("Error: " + error);
                
            }
        }

        authCheck(); 
    }

    return (<>
    <div className="row w-50 mx-auto my-3">
        <h1>Login</h1>
        
        <form>
            <div className="mb-3">
              <label htmlForm="email" className="form-label">Email</label>
              <input type="text" onChange={(e) => changeHandler(e)} name="email" id="" className="form-control" placeholder="" aria-describedby="helpId" />
              <br></br>

              <label htmlForm="password" className="form-label">Password</label>
              <input type="password" onChange={(e) => changeHandler(e)} name="password" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
              <br></br>

              <button type="button" onClick={(e) => clickHandler(e)} className="btn btn-primary">Login</button>

              <p className="text-danger">{invalidLoginMsg}</p>
            </div>
        </form>
    </div>
    </>);
}
 
export default Login;