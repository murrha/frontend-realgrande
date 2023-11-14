import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    let navigate = useNavigate(); 

    let logoutHandler = () => {

        //will remove data form local storage
        // localStorage.clear(); 

        sessionStorage.removeItem('custName');  
        sessionStorage.removeItem('custEmail');  
        navigate('/');
    }

    let loginHandler = () => {
        navigate('/login');
    }

    let signUpHandler = () => {
        navigate('/signup'); 
    }

    console.log("Name from storage: " + sessionStorage.getItem('custName')); 
    return (<>
        <div className="row bg-warning d-flex align-items-center">
            <div className="col-sm-3">
                <Link to="/"><img className="logo my-3" src="/img/logo.png" alt="logo here" width="100px" height="100px"></img></Link>
            </div>
            <div className="col-sm-5">
                <p className="m-0 tagline text-center">Welcome to FSD! Find your dream home here!</p>
            </div>
            <div className="col-sm-4 text-center">
                {sessionStorage.getItem('custName') ? 
                    <>
                    <h5>Welcome {sessionStorage.getItem('custName')}!</h5>
                    <button className="btn btn-danger mx-3" onClick={logoutHandler}>Logout</button>
                    </>
                    :
                    <>
                    <button className="btn btn-primary mx-3"  onClick={loginHandler}>Login</button>
                    <button className="btn btn-success"  onClick={signUpHandler}>Sign Up</button>
                    </>
                }
                
            </div>
        </div> 
    
    </> );
}
 
export default Header;
