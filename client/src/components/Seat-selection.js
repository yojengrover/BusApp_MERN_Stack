import React,{useState} from 'react';
import axios from "axios";
import './Seat-selection.css';
import ViewSeats from './seatSelection/SeatMapping'
const SeatSelection = (props) => {
    
    const renderSeats=()=>(<ViewSeats value={props} />)

    //const renderBus=()=>(<Planning />)

    return (
        <div>
            <div className="landing">
                <ul class="nav nav-tabs navbar-dark bg-dark">
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Plan your Trip</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Select Seats</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Payment</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Checkout</a>
                    </li>
                    </ul>
                    {renderSeats()}
        </div>
        
        </div>
        
            
        
    );
}

export default SeatSelection; 