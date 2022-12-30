
import React,{useState} from 'react';
import axios from "axios";
import './signUp.css';

const SignUp = () => {
    const[details,setDetails]=useState({
        username:'',
        email:'',
        phNumber:'',
        password:'',
        dateOfBirth:'',
        gender:'',
    })
         const [name,setName]=useState('')
         const [email,setData] =useState('')
         const [phNumber,setPhNumber] =useState('')
         const [pswd,setPswd] =useState('')
         const [dateOfBirth,setDob]=useState('')

        //this.OnChange = this.OnChange.bind(this);
        //this.OnSubmit = this.OnSubmit.bind(this);
        const handleName=(e)=>{
            e.preventDefault()
            let value=e.target.value
            if(!value){
                return(setName("Name is Required"))
            }else{
                setDetails(prevState=>({
                    ...prevState,
                    name:value
                }))
                // console.log(details.name)
                return(setName(""))
            }
            
        }
        const handleEmail=(e)=>{
            e.preventDefault()
            let value=e.target.value
            if(!value){
                return (setData('Email is required'))
            }
            if(value){
                let lastAtPos = value.lastIndexOf('@');
                let lastDotPos = value.lastIndexOf('.');
     
                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && value.indexOf('@@') === -1)) {
                   return setData("Email is not valid");
                 }
                 else{
                    setDetails(prevState=>({
                        ...prevState,
                        email:value
                    }))
                    return(setData(""))
                    
                }
            }
        }
        const handlePh=(e)=>{
            const value=e.target.value
            if(!value){
                return(setPhNumber("Phone Number Required"))
            }
            if(value){
                let regExp=/^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/
                if(!(regExp.test(value))){
                        return(setPhNumber("Not valid"))
                }
                else{
                    const value=e.target.value
                    setDetails(prevState=>({
                        ...prevState,
                        phNumber:value
                    }))
                    console.log(details.phNumber)
                    return(setPhNumber(""))
                    
                }
            }
        }
        const handlePswd=(e)=>{
            e.preventDefault()
            const value=e.target.value
            if(!value){
                return (setPswd('Password is required'))
            }
            if(value){
                let minNumberofChars = 6;
                let maxNumberofChars = 16;
                let regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
                    if(value.length < minNumberofChars || value.length > maxNumberofChars){
                        return (setPswd("Password should be of 6 to 16 characters"))
                    }
                    else if(!regularExpression.test(value)) {
                    return(setPswd(`Atleast one number and one special character`));
                    }
                    else{
                        setDetails(prevState=>({
                            ...prevState,
                            password:value
                        }))
                        return(setPswd(""))
                        
                    }
            }
        }
        const handleDate=(e)=>{
            e.preventDefault()
            let value=e.target.value
            if(!value){
                return(setDob("DOB Required"))
            }
            else{
                setDetails(prevState=>({
                    ...prevState,
                    dateOfBirth:value
                }))
                
                    return(setDob(""))
                }
     
        }
       const handleGender=(e)=>{
                const {value}=e.target
                setDetails(prevState=>({
                    ...prevState,
                    gender:value
                }))
        }
        async function handleSubmit(e){
            e.preventDefault();
            let res= await axios.post('http://localhost:8081/api/userinfo',{
                username:details.name,
                password:details.password,
                mobileNumber:details.phNumber,
                email:details.email,
                DateOfBirth:details.dateOfBirth
                
            });
       
           console.log('handling submit');
           console.log(res.data);
        }

        return(
            
            <div className="container-signup">
                <h1>Sign Up</h1>
                <form onSubmit={e=>handleSubmit(e)}>
                <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" id="userName" onBlur={e=>handleName(e)} />
                <div style={{color: "red"}}>{name}</div>
                <label>Password</label>
                <input type="password" className="form-control" id="userpaaword" onBlur={e=>handlePswd(e)} />
                <label>Email</label>
                <input type="email" className="form-control" id="userEmail" onBlur={e=>handleEmail(e)} />
                <div style={{color: "red"}}>{email}</div>
                <label>Mobile number</label>
                <input type="text" className="form-control" id="userPhone" onBlur={e=>handlePh(e)} />
                <div style={{color: "red"}}>{phNumber}</div>
                <label>Date of Birth</label>
                <input type="text" className="form-control" id="dateOfBirth" onBlur={e=>handleDate(e)} />
                <div style={{color: "red"}}>{dateOfBirth}</div>
                <div>  </div>
                <button type="submit" className="btn btn-outline-secondary">Submit</button>
                </div>
                </form>
                </div>
                
                );
    };
    export default SignUp;