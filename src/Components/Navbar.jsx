import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import {withRouter} from "react-router-dom"
const Nav = (props) => {
    return ( <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand  >
      <div className="Nav">
      <img style={{cursor:"pointer"}} onClick={()=>props.history.push("/")}
        alt=""
        src="https://cdn4.vectorstock.com/i/1000x1000/88/28/cinema-popcorn-box-concept-background-realistic-vector-21398828.jpg"
        width="50"
        height="50"
        className="d-inline-block align-top"
      />{' '}
      <h3 style={{cursor:"pointer"}} onClick={()=>props.history.push("/")}> Movie App </h3>
      </div>
    </Navbar.Brand>
    {/* <ul className="lien">
    <li>Home</li>
    <li>About Us</li>
  </ul> */}
  </Navbar>
  
    </div> );
}
 
export default withRouter(Nav);