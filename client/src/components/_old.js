import React,{useState} from 'react';
import './Planning.css'
import axios from 'axios';
const Planning = () => {
    const[details,setDetails]=useState({
        from:'',
        to:''       
    })

         const [exampleFormControlSelect1,setfrom] =useState('')
         const [pswd,setto] =useState('')
    
         const handlefor=(e)=>{
        e.preventDefault()
        const value=e.target.value
        setDetails(prevState=>({
            ...prevState,
            password:value
        }))
        return(setfrom(""))
    }
    const handleto=(e)=>{
        e.preventDefault()
        const value=e.target.value
        setDetails(prevState=>({
            ...prevState,
            password:value
        }))
        return(setto(""))
    }
    async function handleSubmit(e){
        e.preventDefault();
       // console.log('handeling')
    //    console.log(details.dateAvailable)
    try{ 
       let res= await axios.post('http://localhost:8081/api/findbus',{
           from:details.from,
           to:details.to         
            
        })
 
        if(res.data.status===true){
            //return (setBuses(res.data))
            console.log(res.data)
        }
    }
    catch(err){
        console.log(err)
    }
}
    return (
        <div className="planning">
            <div>
            <label for="exampleFormControlSelect1">From</label>
            <select class="form-control" id="exampleFormControlSelect1" onSelect={e=>handlefor(e)} >
                <option>Patiala</option>
                <option>Banglore</option>
                <option>Hyderabad</option>
                <option>Vijayawada</option>
                <option>Coimbatore</option>
            </select>
            </div>
            <div>
            <label for="exampleFormControlSelect1">To</label>
            <select class="form-control"  id="exampleFormControlSelect1" onSelect={e=>handleto(e)} >
                 <option>Delhi</option>
                <option>Banglore</option>
                <option>Hyderabad</option>
                <option>Vijayawada</option>
                <option>Coimbatore</option>
            </select>
            </div>
            <div>
                <label for="doj">Travel Date</label>
                <div><input type="date" id="doj" name="doj"/></div>
            </div>
            <div>
                <button className="btn btn-success" onClick={e=>handleSubmit(e)}>Plan Trip</button>
            </div>
            
        </div>
    );
};

export default Planning;