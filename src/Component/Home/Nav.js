import React from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './Nav.css'
// import history from './history'
import { useHistory } from "react-router-dom";
// import { history } from 'react-router';

const Header = (props) => {
  const history = useHistory();
  const logout = () =>{
    Cookies.remove('jwt_token');
    localStorage.removeItem("userRole");
    history.push('/')
  }

    // const clickCustom  = (event) => {
    //   parentCallback(text);
    //   event.preventDefault();
    // }

  const {shouldShow=false, text, parentCallback} = props;
  return (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            View Students
          </Link>
        </li>
        <li>
          <Link to="/institute" className="nav-link">
            View Institute
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            View Courses
          </Link>
        </li>
    
      </ul>
      {/* {shouldShow && <button type="button" className="logout-desktop-btn" onClick={clickCustom} >
        {text}
      </button>} */}
      <button type="button" className="logout-desktop-btn" onClick={logout} >
        Logout
      </button>
    </div>
  </nav>
)}
export default Header 
