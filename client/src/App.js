import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUp from "./components/signUp";
import Login from "./components/singIn";
import Landingpage from './components/landing_page';
import SeatSelection from './components/Seat-selection';
import BusTables from './components/Busdetails';
import './App.css';
import ViewSeats from './components/seatSelection/SeatMapping';
import Paymentpage from './components/PaymentPage';
import Checkout from './components/Checkout';
import logo from './logo.jpg';



export default class App extends Component {


  render() {
    return (
      <Router>
      <div className="App">
        <nav className="navbar navbar-expand-sm navbar-custom">
          <a className="navbar-brand">
            <img src={logo} width="35" height="35" alt="My-Bus-App" />
          </a>
          <p className="navtitle">My-Bus-App</p>
        <ul className="nav navbar-nav ml-auto">
         
        </ul>
             </nav>
      <Switch>    
      <Route path='/' exact render={props => <Login {...props}/>}/>
      <Route path='/' exact render={props => <SignUp {...props}/>}/>
      <Route path='/landing' render={props=> <Landingpage {...props}/>}/>
      <Route path='/seatselection/:id' render={props=> <SeatSelection {...props}/>}/>
      <Route path='/landing/plan' render={props=> <BusTables {...props}/>}/>
      <Route path='/landing/seat/:id' render={props=> <ViewSeats {...props}/>}/>
      <Route path='/payments/:id' render={props=> <Paymentpage {...props}/>}/>
      <Route path='/checkout/:id' render={props=> <Checkout {...props}/>}/>     
       </Switch>
      </div>
      </Router>
      
    )
  }
}
