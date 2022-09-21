// import {BrowserRouter as  Route, Router, Routes} from 'react-router-dom'
import React from 'react'
// import { ReactDOM } from 'react-dom'

import {BrowserRouter, Route, Switch} from 'react-router-dom'


import LoginForm from './componnent/Loginpage/Login'
import Home from './History/Main'
import Signup from './Signup/Signup'
import NotFound from './componnent/Router/NotFound'
import './App.css'

const App = () => (
  
     <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
   
    
  
)

export default App
