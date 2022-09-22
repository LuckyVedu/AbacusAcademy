import React from 'react'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import  {Component} from 'react'
import {Link} from "react-router-dom"
import './Login.css'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    valuesNotMatch: false
  }
  onSucbmitSuccess = data =>{
    Cookies.set('jwt_token', data, {expires:30})
    const {history} = this.props
    history.push('/')
    
  }
  showErrorMessage = () => {
    this.setState({valuesNotMatch: true})
  }
  
  submitForm = async (event) => {
    event.preventDefault()
    const {email, password} = this.state
    const userDetails = {email, password}
    const url = "http://localhost:8081/user/login"
    const options = {
      method: "POST",
      headers : {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if(data){
        console.log("data",data);

        this.onSucbmitSuccess(data)
    } else{
      this.showErrorMessage()
    }
   
      
    
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
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
          className="password-input-filed"
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

  render() {
    const {valuesNotMatch} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined){
      return <Redirect to="/"/>
    }
    return (
     <div>
         <div className="login-form-container">
       
       <img
         src="https://i.pinimg.com/originals/ce/c6/0b/cec60b45d8a44a2ca7bc047450ade16d.png"
         className="login-image"
         alt="website login"
       />
       <form className="form-container" onSubmit={this.submitForm}>
         <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPs-S06IbCwG6dyZRjqq0GG1Po4h2AirEGZA&usqp=CAU"
           className="login-website-logo-desktop-image"
           alt="website logo"
         />
         <div className="input-container">{this.renderEmailField()}</div>
         <div className="input-container">{this.renderPasswordField()}</div>
         {valuesNotMatch && <p className='error-message'>User and Password did'nt match</p>}
         <button type="submit" className="login-button">
           Login
         </button>
         <p className='signupPara'>New user?   <Link to="/signup"> <span className='signupLink'> Signup</span> </Link> </p>
       </form>
     </div>
      {/* <div className="signuplink">
       
      </div> */}
     </div>
    )
  }
}

export default LoginForm
