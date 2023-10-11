import { useState } from "react";

const Login = () => {

    //example of controlled components
    let [formObj, setFormObj] = useState({email: '', password: ''}); 

    let changeHandler = (e) => {
        console.log(e.target.value); 
        setFormObj(e.target.value); 
        setFormObj({...formObj, [e.target.name]:e.target.value});
       // console.log(formObj); 
    }

    //this would be sent to the database
    let clickHandler = (e) => {
        e.preventDefault(); 
        console.log(formObj); 
    }

    return (<>
    <div className="row w-50 mx-auto">
        <h1>Login</h1>

        <form>
            <div className="mb-3">
              <label for="email" className="form-label">Email</label>
              <input type="text" onChange={(e) => changeHandler(e)} name="email" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
              <br></br>

              <label for="password" className="form-label">Password</label>
              <input type="text" onChange={(e) => changeHandler(e)} name="password" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
              <br></br>

              <button type="button" onClick={(e) => clickHandler(e)} className="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
    </>);
}
 
export default Login;