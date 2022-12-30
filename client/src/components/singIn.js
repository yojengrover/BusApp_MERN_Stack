import React,{useState} from 'react';
import SignUp from "./signUp";
import axios from 'axios';
import './signIn.css';



const Login = ({history}) => {
    const[details,setDetails]=useState({
        email:'',
        password:''       
    })
    
         const [email,setData] =useState('')
         const [pswd,setPswd] =useState('')
         
         const handleEmail=(e)=>{
            e.preventDefault()
            let value=e.target.value
            setDetails(prevState=>({
                ...prevState,
                email:value
            }))
            return(setData(""))
    }
    const handlePswd=(e)=>{
        e.preventDefault()
        const value=e.target.value
        setDetails(prevState=>({
            ...prevState,
            password:value
        }))
        return(setPswd(""))
    }
    
    const onSubmit= async(e)=>{
      
            e.preventDefault()
            console.log(details.dateOfBirth)
            try{
                let response=await axios.post("http://localhost:8081/api/logingin",{
                    
                    email:details.email,
                    password:details.password,
                })
               //message = response.setData
               if(response.status===200){
                console.log(response)
                history.push('/landing')
            }

                console.log(response)
            }
            catch(err){
                console.log(err)
            }
        }
        const renderSignUp=()=>(<SignUp />)
    
    
      
          return(
             <div className="row">
            <div class="col-6">
            <div className="container-Signup">
            <form className="form-row" onSubmit={e=>onSubmit(e)}>
                <div className="col"> 
              <input type="text" className="form-control" placeholder="Email Address" required   onBlur={e=>handleEmail(e)} />
              <div style={{color: "red"}}>{email}</div>
              </div>
              <div class="col">
              <input type="password" className="form-control" placeholder="Password" required onBlur={e=>handlePswd(e)} />
              <div style={{color: "red"}}>{pswd}</div>
              </div>      
              <button className="btn btn-lg btn btn-outline-secondary" type="submit">Login</button>  
            </form>
            </div>         
            </div>
            <div className="col-5">
                <div className="container-Signin">
            {renderSignUp()}
            </div>
            </div>  
          </div>
          
          );
      };
    
    
    export default Login;
  