import React from 'react';
import "../App.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";
class Navbar extends React.Component {
    render() {
        return (

            <div className="container-fluid">

                <div classNameName="row">
                    <div classNameName="col-md-12">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
                            <ul className="nav navbar-nav">
                            <Link to="/home"><li><span className="linkbar glyphicon glyphicon-home" aria-hidden="true"></span> Home</li></Link>
                            <Link to="/home">  <li><span className="linkbar glyphicon glyphicon-phone-alt" aria-hidden="true"></span> Contact Us</li></Link>
                            <Link to="/about">  <li><span className="linkbar glyphicon glyphicon-globe" aria-hidden="true"></span>  About Us</li></Link>
                            <Link to="/home">  <li><span className="linkbar glyphicon glyphicon-download-alt" aria-hidden="true"></span> Savednews</li></Link>
                            <Link to="/getplanes">  <li><span className="linkbar glyphicon glyphicon-glass" aria-hidden="true"></span> Drinks</li></Link>
                            
                            <div class="rightVal">
                            <Link to="/home">  <li>Login <span className="linkbar glyphicon glyphicon-log-in" aria-hidden="true"></span> </li></Link>
                            <Link to="/home"> <li>Register <span className="linkbar glyphicon glyphicon-plus-sign" aria-hidden="true"></span> </li></Link>
                            </div>
                            </ul>
                        </nav>
                    </div>
                </div> <br></br>
                {/* <button className="btn btn-primary">Search Here</button> */}
            </div>
        )
    }
}

export default Navbar;