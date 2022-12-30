import React,{useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const Checkout =(props) => {
    let [name, setname] = useState([])
    let [seat, setseat] = useState([])
    let [count, setCount] = useState(0)

    const[details,setDetails]=useState({
        from:'',
        to:'',
        busType:'',
        arrival:'',
        departure:''
        
    })
    count = sessionStorage.getItem('count')
    // var name = sessionStorage.getItem('name')
    // var name1= sessionStorage.getItem('name1')
    console.log(props.match.params.id)
    // switch (count){
    //     case 1:var name=sessionStorage.getItem('name')
    //     var seat=sessionStorage.getItem('seat')
    //     break;
    // case 2:var name=sessionStorage.getItem('name')
    // name=name.push(sessionStorage.getItem('name1'))
    // //sessionStorage.setItem('seat1')
    // break;
    // case 3:sessionStorage.getItem('name2')
    //     sessionStorage.getItem('seat2')
    //     break;
    // case 4:sessionStorage.getItem('name3')
    // sessionStorage.getItem('seat3')
    // break;
    // default:alert('Maximum seats allowed per ID is 4')
    count = sessionStorage.getItem('count')
    // switch(count){
    //     case 4: seat.push(sessionStorage.getItem("seat3"))
    //             name.push(sessionStorage.getItem("name3"))
    //      case 3: seat.push(sessionStorage.getItem("seat2"))
    //             name.push(sessionStorage.getItem("name2"))
    //     case 2: seat.push(sessionStorage.getItem("seat1"))
    //               name.push(sessionStorage.getItem("name1"))
    //     case 1: seat.push(sessionStorage.getItem("seat"))
    //     name.push(sessionStorage.getItem("name"))
    //     break;        
    
    // }
    var namesArray = JSON.parse('[' + sessionStorage.getItem("names") + ']');
    const names = namesArray.map((number) => number);
    var storedArray = JSON.parse('[' + sessionStorage.getItem("seats") + ']');
    const seats = storedArray.map((number) => number);
    console.log(seats)


    // console.log('count' + count)
    // console.log('name'+ name)
    // console.log()
 
    useEffect(()=>{
        //console.log({details.arrival} )   
        axios.get('http://localhost:8081/api/findseat/' + props.match.params.id)
        .then(res => {
           // console.log(res.data.message.bookedSeats)
            setDetails({
                      from: res.data.message.from,
                      to:res.data.message.to,
                      busType:res.data.message.BusType,
                      arrival:res.data.message.Arrival,
                      departure:res.data.message.Departure,
                      
            })
        })    
     })
 
 
     //console.log(details.arrival)
return(
    <div>
            <div className="landing">
                <ul class="nav nav-tabs navbar-dark bg-dark">
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Plan your Trip</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Select Seats</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Payment</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">Checkout</a>
                    </li>
                    </ul>
                    <div>
            <h2>Congratulation For Your Booking </h2>
        <div class="card">
          {details.a}
        <div class="card-body">
        <h5 class="card-title">Booking Details</h5>
 <ul class="list-group list-group-flush">
 <li class="list-group-item">Name: {names}</li>
 <li class="list-group-item">Seats: {seats}</li>
<li class="list-group-item">From: {details.from}</li>
<li class="list-group-item">To: {details.to}</li>
<li class="list-group-item">Departure: {details.departure}</li>
<li class="list-group-item">Arrival: {details.arrival}</li>
<li class="list-group-item">BusType: {details.busType}</li>


  </ul> 
       </div>
       
    
 
  
       </div>
        </div>
           
        </div>
     
        </div>
)
}
export default Checkout;
 
