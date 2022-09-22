import { Component } from "react";
// import Cookies from "js-cookie";
// import { Redirect } from "react-router-dom";
import React from "react";

import {Link} from "react-router-dom"

import './Signup.css'

class Signup extends Component {
    state = {
      userName: "",
      email: '',
      password: '',
      mobileNumber: "",
      userRole: "User"
    }
    onSucbmitSuccess = () =>{
    //   Cookies.set('status_code', statusCode, {expires:30})
      const {history} = this.props
      history.push('/login')
    }
    
    submitForm = async (event) => {
      event.preventDefault()
      const {email, password, userName, mobileNumber, userRole} = this.state
      const userDetails = {email, password, userName, mobileNumber, userRole}
      const url = "http://localhost:8081/user/signup"
      const options = {
        method: "POST",
        headers : {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(url, options)
      
      const data = await response.json()
   //   const result = JSON.parse(data)
    //   console.log(response)
      console.log(data.response)
    //  console.log(result)
      if(data.statusCode === "200"){
          this.onSucbmitSuccess(data.statusCode)
      }
     
        
      
    }

    // onChangeUserType = event => {
    //     this.setState({userRole: event.target.value})
    //     console.log("user defined")
    // }
    
    onChangeUsername = event => {
        this.setState({userName: event.target.value})
      }

    onChangeEmail = event => {
      this.setState({email: event.target.value})
    }
  
    onChangePassword = event => {
      this.setState({password: event.target.value})
    }

    onChangeMobileNumber = event => {
        this.setState({mobileNumber: event.target.value})
      }

    renderUsernameField = () => {
        const {userName} = this.state
        return (
          <>
            <label className="input-label" htmlFor="email">
              USER NAME
            </label>
            <input
              type="text"
              id="userName"
              className="username-input-filed"
              value={userName}
              onChange={this.onChangeUsername}
            />
          </>
        )
      }
  
    renderPasswordField = () => {
      const {password} = this.state
      return (
        <>
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="username-input-filed"
            value={password}
            onChange={this.onChangePassword}
          />
        </>
      )
    }
  
    renderEmailField = () => {
      const {email} = this.state
      return (
        <>
          <label className="input-label" htmlFor="email">
            EMAIL
          </label>
          <input
            type="text"
            id="email"
            className="username-input-filed"
            value={email}
            onChange={this.onChangeEmail}
          />
        </>
      )
    }

    renderMobileNumberField = () => {
        const {mobileNumber} = this.state
        return (
          <>
            <label className="input-label" htmlFor="email">
              MOBILE NUMBER
            </label>
            <input
              type="text"
              id="mobileNumber"
              className="username-input-filed"
              value={mobileNumber}
              onChange={this.onChangeMobileNumber}
            />
          </>
        )
      }
  
    render() {
    //   const {userRole} = this.state
    // const jwtToken = Cookies.get('jwt_token')
    // if (jwtToken !== undefined){
    //   return <Redirect to="/"/>
    // }
      return (
       <div>
           <div className="login-form-container">
         
         <img
           src="https://media.istockphoto.com/vectors/welcome-to-our-community-friendly-man-sitting-on-banner-and-waving-vector-id1019514594?k=6&m=1019514594&s=170667a&w=0&h=3Olt7WnXE8sL67p_pxoAs6AXspo3G766E28xUi8USzY="
           className="signup-image"
           alt="website Sign up"
         />
         <form className="form-container" onSubmit={this.submitForm}>
           <h1 className="signup-message"> Sign up here</h1>
           <label className="input-label" htmlFor="role">USER TYPE</label>
           <select id="role" className="selectUserType" >
                <option className="typeOfUser" value="Amin">Admin</option>
                <option className="typeOfUser"  value="User">User</option>
           </select>
           <div className="input-container">{this.renderUsernameField()}</div>
           <div className="input-container">{this.renderEmailField()}</div>
           <div className="input-container">{this.renderPasswordField()}</div>
           <div className="input-container">{this.renderMobileNumberField()}</div>

           {/* <div className="input-container">{this.renderPasswordField()}</div> */}

           <button type="submit" className="Signup-button">
             Sign up
           </button>
           <p className="loginPara">Already have an account? <Link to="/login"> <span className="signuplink"> Login</span> </Link> </p>
         </form>
       </div>

       </div>
      )
    }
  }
export default Signup