import React,{useState} from 'react';
import './Planning.css';
//import getBus from '../../api/api';
import axios from 'axios';
import BusTable from './Busdetails'
const Planning = ({history}) => {
    const [plan,setPlan]=useState('')
    const [busDetails,setBusData]=useState({})
    const handleFrom=(e,field)=>{
        e.preventDefault()
        let value=e.target.value
        setPlan({...plan,[field]:value})
      
    }
    const handlePlan=async (e)=>{
        e.preventDefault()
        try{
            let response=await axios.post('http://localhost:8081/api/findbus',{
                        from:plan.from, 
                        to:plan.to 
                       
    
            })
            if(response.data.status===true){
                console.log(response.data)
               return( setBusData(response.data))

            }
        }
        catch(err){console.log(err)}
    } 
    const renderbusTable=(busDetails)=>{
            if(Object.keys(busDetails).length>0)
                return(<BusTable value={busDetails}/>)
    }
    return (
        <div>
        <div className="planning">
            <div>
            <label class="badge badge-dark">From</label>
            <select className="form-control" id="exampleFormControlSelect1" onBlur={e=>handleFrom(e,"from")}>
                <option>Patiala</option>
                <option>Delhi</option>
                <option>Hyderabad</option>
                <option>Vijayawada</option>
                <option>Coimbatore</option>
            </select>
            </div>
            <div>
            <label class="badge badge-dark">To</label>
            <select className="form-control"  id="exampleFormControlSelect1" onBlur={e=>handleFrom(e,"to")}>
                 <option>Delhi</option>
                <option>Chandigarh</option>
                <option>Hyderabad</option>
                <option>vijayawada</option>
                <option>Coimbatore</option>
            </select>
            </div>
            <div>
                <label class="badge badge-dark">Travel Date</label>
                <div><input type="date" id="doj" name="doj" /></div>
            </div>
            <div>
                <button className="btn btn-success" onClick={e=>handlePlan(e)}>Plan Trip</button>
            </div>
        </div>
            {renderbusTable(busDetails)}
        </div>
    );
};

export default Planning;

