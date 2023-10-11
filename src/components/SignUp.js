import { useState } from "react";

const SignUp = () => {

    let [signUpObj, setSignUpObj] = useState({name: '', email: '', password: ''});

    let changeHandler = (e) => {
        console.log(e.target.value);
        setSignUpObj(e.target.value);
        setSignUpObj({...signUpObj, [e.target.name]:e.target.value});
    }

    let submitHandler = (e) => {
        e.preventDefault(); 
        console.log(signUpObj); 
    }


    return ( <>
    <div className="row w-50 mx-auto">

        <form>
            <div className="mb-3">
            <label for="" className="form-label">Name</label>
            <input type="text" name="name" onChange={(e) => changeHandler(e)} id="" className="form-control" placeholder="" aria-describedby="helpId"/>
            <br></br>

            <label for="" className="form-label">Email</label>
            <input type="text" name="email" onChange={(e) => changeHandler(e)} id="" className="form-control" placeholder="" aria-describedby="helpId"/>
            <br></br>


            <label for="" className="form-label">Password</label>
            <input type="text" name="password" onChange={(e) => changeHandler(e)} id="" className="form-control" placeholder="" aria-describedby="helpId"/>
            <br></br>

            <button type="submit" onClick={(e) => submitHandler(e)} class="btn btn-primary">Submit</button>
            </div>
        </form>
        
    </div>
    </> );
}
 
export default SignUp;