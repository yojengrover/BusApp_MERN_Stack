import React from 'react';
import {Link} from'react-router-dom';
//import './Busdetails.css'
//import SeatSelection from './Seat-selection'
//import LinkButton from '/mybutton/LinkButton'

const BusTable =({value:busData}) =>{

  const chechBusid=(e,row)=>{
    e.preventDefault()
    sessionStorage.setItem("bus-id",row)
    console.log(sessionStorage.getItem("bus-id"))
    //props.history.push('/seatselection')
    //onClick={e=>chechBusid(e,row._id)
  }
     
  return(
     <div className="container-Bus">
     <table className='table table-striped table-dark'>
         <thead className="thead thead-dark">
             <tr>
                 <th></th>
                 <th>BusType</th>
                 <th>Departure</th>
                 <th>Arrival</th>
                 <th>To</th>
                 <th>Fare</th>
                 
                 <th></th>
                 
             </tr>
         </thead>
         <tbody className='tbody tbody-light'>
            {busData.bus.map((row) => (
            <tr key={row._id}>
            <th component="th" scope="row">
               {row.name}
             </th>
             <th>{row.BusType}</th>
             <th>{row.Departure}</th>
             <th>{row.Arrival}</th>
             <th>{row.to}</th>
             <th>{row.fare}</th>
             <div>
             <Link to={'/seatselection/' + row._id}>
             <button className="btn btn-success" >View Seats</button></Link>
             </div>
             </tr>
             
            ))}

        
             
         </tbody>
         
         

     </table>
</div>
  );
 };

 export default BusTable;