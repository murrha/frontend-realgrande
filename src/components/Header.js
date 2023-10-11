import { Link } from "react-router-dom";

const Header = () => {
    return (<>
        <div className="row bg-warning d-flex align-items-center text-white">
            <div className="col-sm-3">
                <Link to="/"><img className="logo" src="/img/logo.png" alt="logo here"></img></Link>
            </div>
            <div className="col-sm-5">
                <p className="m-0 tagline">Find your dream home here!</p>
            </div>
            <div className="col-sm-4">
                <Link to="/login"><button className="btn btn-primary mx-3">Login</button></Link>
                <Link to="/signup"> <button className="btn btn-success">Sign Up</button></Link>
            </div>
        </div> 
    
    </> );
}
 
export default Header;