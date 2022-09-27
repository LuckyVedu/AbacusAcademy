import { Component } from "react";

import {useForm} from 'react-hook-form'

import React from "react";

import {Link} from "react-router-dom"

import './Signup.css'

//class component start//

class Signup extends Component {
    state = {
      userName: "",
      email: '',
      password: '',
      mobileNumber: "",
      role: "",
      userNameValid: false,
      emailValid: false,
      isPasswordValid: false,
      error: false
    }
    

    // 

    onSucbmitSuccess = () =>{
      // Cookies.set('status_code', statusCode, {expires:30})
      const {history} = this.props
      history.push('/login')
    }

   
    
    submitForm = async (event) => {
      event.preventDefault()
      this.onChangeUsername();
      this.onChangeEmail()
      const {email, password, userName, mobileNumber, role} = this.state;
      
      //move to auth service
      // window.localStorage.setItem("userRole",userRole);
      const userDetails = {email, password, userName, mobileNumber, role}
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
        // this.userDefine()
          this.onSucbmitSuccess(data.statusCode)

      }
     
    
      
    }

    ////    **** VALIDATION START  **** ////
 
    //USER NAME VALIDATION
  onChangeUsername = (event) => {
      const {userName} = this.state
      const val = event ? event.target.value : userName
      if(/^[a-z0-9_.]+$/.test(val)){
        this.setState({userName: val})
        this.setState({userNameValid: false})
      }
      else{
        this.setState({userName: val})
        this.setState({userNameValid: true})
      }

      }
  // EMAIL VALIDATION 
    onChangeEmail = event => {
      const {email} = this.state
     const val = event ? event.target.value : email

     if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)){
      this.setState({email: val});
      this.setState({isEmailValid: false});
    }else{
      this.setState({email: val});
      this.setState({isEmailValid: true});
    }
      
    }
  
    onChangePassword = event => {
      this.setState({password: event.target.value})
      
    }

   // MOBILE NUMBER VALIDATION //    
    onChangeMobileNumber = event => {
      const {mobileNumber} = this.state
      const val = event ? event.target.value : mobileNumber
      
        
      }

    renderUsernameField = () => {
        const {userName, userNameValid} = this.state;
        return (
          <>
            <label className="input-label" htmlFor="email">
              USER NAME
            </label>
            <input
              // className={userNameValid ? "er" : ""}
              type="text"
              placeholder="Entet Name"
              className={`username-input-filed ${userNameValid ? 'border-err' : ''}`}
              value={userName}
              onChange={this.onChangeUsername}
              // onBlur={this.validateUser}
            />
             {userNameValid && <p className='error'>User Name Required</p>}
          </>
        )
      }
  
    renderPasswordField = () => {
      const {password } = this.state
      return (
        <>
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            placeholder="range B/W 6-14 only"
            className="username-input-filed"
            value={password}
            onChange={this.onChangePassword}
          />
        </>
      )
    }
  
    renderEmailField = () => {
      const {email , isEmailValid} = this.state
      return (
        <>
          <label className="input-label" htmlFor="email">
            EMAIL
          </label>
          <input
            type="text"
            id="email"
            placeholder="example@gmail.com"
            className={`username-input-filed ${isEmailValid ? 'border-err' : ''}`}
            value={email}
            onChange={this.onChangeEmail}
            />
            {isEmailValid && <p className='error'>Email Invalid</p>}
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
              placeholder="Numbers only"
              className="username-input-filed"
              value={mobileNumber}
              onChange={this.onChangeMobileNumber}
            />
          </>
        )
      }
  
    render() {
  
    const {error} = this.state
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
           
           <div className="input-container">
           <label className="input-label" htmlFor="role">USER TYPE</label>
           <select id="role" className="selectUserType" onChange={this.userDefine}>
                {/* <option selected className="typeOfUser" disabled>select</option> */}
                <option className="typeOfUser" value="Admin">Admin</option>
                <option className="typeOfUser"  value="Student">Student</option>
           </select>
          
           </div>
           <div className="input-container">{this.renderUsernameField()}</div>
           {error ? <div className="userError">Please enter valid username</div> : false} 
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