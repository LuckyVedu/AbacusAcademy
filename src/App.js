// import {BrowserRouter as  Route, Router, Routes} from 'react-router-dom'
import React from 'react'
// import { ReactDOM } from 'react-dom'

import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'


import LoginForm from './Component/Loginpage/Login'
import Home from './Component/Home/Home'
import Signup from './Component/SignUpPage/Signup'
import NotFound from './Component/NotfoundPage/NotFound'
import viewInstitute from './AdminServices/Institute/viewInstitute'
import './App.css'

const App = () => (
  
     <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/institute" component={viewInstitute}/>
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found"/>
        </Switch>
    </BrowserRouter>
   
    
  
)

export default App
