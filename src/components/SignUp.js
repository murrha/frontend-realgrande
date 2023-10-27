import axios from "axios";
import { useState } from "react";

const SignUp = () => {

    let [signUpObj, setSignUpObj] = useState({name: '', email: '', password: ''});
    let [signedUpStatus, setSignedUpStatus] = useState(false);
    let [duplicateUser, setDuplicateUser] = useState('');

    let changeHandler = (e) => {
        console.log(e.target.value);
        setSignUpObj(e.target.value);
        setSignUpObj({...signUpObj, [e.target.name]:e.target.value});
    }

    let submitHandler = async (e) => {
        e.preventDefault(); 
        console.log(signUpObj); 

        try{
            let resp = await axios.post('http://localhost:3002/signup', {...signUpObj}); 
            let data = await resp.data;
            console.log(data);

            //on successful signup - it must display a message
            //otherwise it shouldn't

            //set a flag only if there is data from the server
            if(data){
                setSignedUpStatus(true); 
            }
            

        }catch(error){
            console.log("Couldn't store user");
                console.log("Error: " + error);
                setDuplicateUser("Sorry - a user by that email is already registered"); 
        }
        
    }

    //use conditional rendering outside of the return statement
    if (!signedUpStatus){
        return (<>

            {
                <div className="row w-50 mx-auto my-3">
                    <h1>Sign Up</h1>
                   <h2>{duplicateUser}</h2> 

                    <form>
                        <div className="mb-3">
                            <label htmlForm="" className="form-label">Name</label>
                            <input type="text" name="name" onChange={(e) => changeHandler(e)} id="name" className="form-control" placeholder="" aria-describedby="helpId" />
                            <br></br>

                            <label htmlForm="" className="form-label">Email</label>
                            <input type="text" name="email" onChange={(e) => changeHandler(e)} id="email" className="form-control" placeholder="" aria-describedby="helpId" />
                            <br></br>


                            <label htmlForm="" className="form-label">Password</label>
                            <input type="password" name="password" onChange={(e) => changeHandler(e)} id="password" className="form-control" placeholder="" aria-describedby="helpId" />
                            <br></br>

                            <button type="submit" onClick={(e) => submitHandler(e)} className="btn btn-primary">Submit</button>
                        </div>
                    </form>

                </div>}
        </>)
    }
    else {
        return (<>
            <div className="row w-50 mx-auto">
                <h2>Congratulations {signUpObj.name}! You are now registered with Real Grande!</h2>
            
                <h3>Go ahead and login!</h3>
            </div></>)
    }
}
 
export default SignUp;