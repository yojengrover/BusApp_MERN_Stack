import React,{useState} from 'react';
import axios from "axios";
import Planning from './Planning'
import './landing_page.css'
const Landingpage = () => {
    //const [tab, setTab] = useState(1);
    const renderBus=()=>(<Planning />)
    
    // const changeTab = (e, tabIdx) => {
    //     e.preventDefault()
    //     setTab(tabIdx)
    // }
    return (
        <div>
            <div className="wrapper">
                <ul class="nav nav-tabs navbar-dark bg-dark">
                    <li class="nav-item">
                        <a class="nav-link"  href="#">Plan your Trip</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Select Seats</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Payment</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Checkout</a>
                    </li>
                    </ul>
            {renderBus()}
        </div>
        </div>
        
    );
}

export default Landingpage; 