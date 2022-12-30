import React, { Component } from 'react';
import './SeatMapping.css';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';
import Axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
      Route,
      Link,
      NavLink
    } from "react-router-dom";


export default class ViewSeats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalSeats: [...new Array(30)].map((item, index) => {
                return {
                    seatNo: index + 1,
                    selected: false
                } 
            }),
            bookedSeats: [1, 2, 7, 9, 15, 29, 30],
            result:[],
            seats:0,
            passangeAge:[],
            passangerName:[],
            arr:[],
            confirmedSeats:[],
            finalseats:[],
            seatTo:[],
            count:0,
            names:[]
        }
    }
    

    
    componentDidMount() {
        console.log(this.state.totalSeats)
            Axios.get('http://localhost:8081/api/findseat/'+this.props.value.match.params.id)
                .then(res=>{
                    //console.log(res.data.message.SeatsBooked)
                    this.setState({
                    bookedSeats:res.data.message.bookedSeats
                    })
                })
    
        }

        componentWillUnmount(){

        }
    

    isBookedSeat(seatNo) {
        return this.state.bookedSeats.includes(seatNo);
    }

    selectSeatHandler(seatNo) {
        const muteState = { ...this.state };
        console.log(muteState)

        if (!this.isBookedSeat(seatNo)) {
            muteState.totalSeats[seatNo - 1].selected = !muteState.totalSeats[seatNo - 1].selected;
            const selectedSeats =muteState.totalSeats.filter(item => item.selected).map((item =>{
                return {
                    name:'',
                    age:'',
                    seatNo:item.seatNo
                }
            }))
            this.setState({
                totalSeats: muteState.totalSeats,
                arr: selectedSeats
            })
            console.log(this.state.totalSeats);
            var b=this.state.totalSeats.filter(Boolean).length;
            this.state.count=this.state.totalSeats.filter((x,i) => { return x.selected; }).length
            this.state.seats  = this.state.totalSeats.filter((x,i) => { return x.selected; }).length*700;
            this.state.result = this.state.totalSeats.filter((x,i) => { return x.selected;})
            
            
            
        }
    }
    handleSubmit = e =>{
    this.setState({
        passanger_name: e.target.value
    })
    this.setState({
        passange_age: e.target.value
    })
    }

    componentWillMount(){
        const data = this.state.res
        
    }




    renderList = (seats) =>{
        if(seats>0)
        {
        return this.state.arr.map((item,i)=>{
            return(
                <div className="myseats">
                <div className="card text-white bg-info mb-3" key ={i}>
                    <p>Seat No:{item.seatNo}</p>
                    <input type="text" placeholder="Name" name="name" onChange={(e)=>this.onChangeHandler(e,item.seatNo)}/><br/><br/>
                    <input type="text" placeholder="Age" name="age" onChange={(e)=>this.onChangeHandler(e,item.seatNo)} /> <br/>

                </div>
                </div>
            )
        })
    }
    }

    onChangeHandler=(e,seatNo)=>{
        const muteState=[...this.state.arr]
        muteState.map((item)=>{
            if(seatNo === item.seatNo){
                item[e.target.name] = e.target.value
            }
        });
        this.setState({
            arr:muteState
        })
        
        console.log(this.state.arr)
    }

    handleClick=(e)=>{
        //typeof(this.state.bookedSeats)
        //this.state.finalseats=this.state.bookedSeats;
        sessionStorage.setItem('fare', this.state.seats);
        //sessionStorage.setItem('count',this.state.count);
        switch (this.state.count){

            case 1:
                {
                this.state.names=this.state.arr[0].name
                sessionStorage.setItem("names", JSON.stringify(this.state.names));
                this.state.seatTo=this.state.arr[0].seatNo
                sessionStorage.setItem("seats", JSON.stringify(this.state.seatTo));   
            break;
        }
        case 2:
            this.state.names=this.state.arr[0].name
            this.state.names=this.state.names.concat(" "+this.state.arr[1].name)
            sessionStorage.setItem("names", JSON.stringify(this.state.names));
             //sessionStorage.setItem('seat1',this.state.arr[1].seatNo)
             const one=(this.state.arr[0].seatNo)
                const newLocal = one +" "+(this.state.arr[1].seatNo).toString();
             //this.state.seatTo.concat(" " + newLocal)
             sessionStorage.setItem("seats", JSON.stringify(newLocal));
        break;
        case 3:this.state.names=this.state.arr[0].name
        this.state.names=this.state.names.concat(" "+this.state.arr[1].name)
        this.state.names=this.state.names.concat(" "+this.state.arr[2].name)
        sessionStorage.setItem("names", JSON.stringify(this.state.names));
        this.state.seatToSend=this.state.arr[0].seatNo
             this.state.seatTo=this.state.seatTo.concat(" "+this.state.arr[1].seatNo)
             this.state.seatTo=this.state.seatTo.concat(" "+this.state.arr[2].seatNo)
             sessionStorage.setItem("seats", JSON.stringify(this.state.seatTo));
            break;
        case 4:this.state.names=this.state.arr[0].name
        this.state.names=this.state.names.concat(" "+this.state.arr[1].name)
        this.state.names=this.state.names.concat(" "+this.state.arr[2].name)
        this.state.names=this.state.names.concat(" "+this.state.arr[3].name)
        sessionStorage.setItem("names", JSON.stringify(this.state.names));
        this.state.seatToSend=this.state.arr[0].seatNo
             this.state.seatTo=this.state.seatTo.concat(" "+this.state.arr[1].seatNo)
             this.state.seatTo=this.state.seatTo.concat(" "+this.state.arr[2].seatNo)
             this.state.seatToS=this.state.seatTo.concat(" "+this.state.arr[3].seatNo)
             sessionStorage.setItem("seats", JSON.stringify(this.state.seatTo));
            
        break;
        default:alert('Maximum seats allowed per ID is 4')
        
        }
        this.state.result.map((seat, index) => (
            
            this.state.confirmedSeats.push(seat.seatNo.toString())
        ))
        this.state.finalseats=this.state.bookedSeats.concat(this.state.confirmedSeats)
        console.log(this.state.finalseats)
        Axios.put('http://localhost:8081/api/updateseat/' + this.props.value.match.params.id,{
                bookedSeats:this.state.finalseats
            })

            for (const property in this.state.arr) {
                console.log(`${property}: ${this.state.arr[property]}`);
              }

        
                
    }
    

    render() {
        return (
            <div class="container-fluid">
            <div className="row">
            <div class="col-7">
               
                <ul className="seating-list">
                    { 
                        
                        this.state.totalSeats.map((item, index) =>
                         <li onClick={() => this.selectSeatHandler(item.seatNo)} key={item.seatNo}
                            className={this.isBookedSeat(item.seatNo) ? 'bookedSeat' : item.selected ? 'selectSeat' : ''}>
                            <button className={this.isBookedSeat(item.seatNo) ? 'bookedSeat' : item.selected ? 'selectSeat' : ''}>{item.seatNo}</button>
                        </li>)
                    }
                </ul>
                {this.renderList(this.state.seats)}
            </div>
            <div class="col"><div class="card">
            <h5 class="card-title">Seat Details</h5>
           <ul class="list-group list-group-flush">
                <li class="list-group-item">Seats selected:<div>
                   {this.state.result.map((seat, index) => (
                       <div>{seat.seatNo}</div>
                   ))}
                   </div></li>
                <li class="list-group-item">Fare<div>
                          {this.state.seats}  
                       </div></li>
                            {console.log(this.props.value.match.params.id)} 

                       <li class="list-group-item"><Link to={'/payments/'+this.props.value.match.params.id}><button class="btn btn-info" onClick={e=>this.handleClick(e)}>Proceed to payment</button></Link></li>
                
           </ul>
           <div>
               
           </div>
            </div>
            </div> 
            </div>
            </div>
            
        )
    }
}
