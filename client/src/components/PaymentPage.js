import React,{useState} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const Paymentpage =(props) => {
    // console.log(sessionStorage.getItem("fare"))
    // console.log(sessionStorage.getItem("name"))
    // console.log(sessionStorage.getItem("name1"))
    // console.log(sessionStorage.getItem("seat"))
    // console.log(sessionStorage.getItem("seat1"))
    var storedArray = JSON.parse('[' + sessionStorage.getItem("names") + ']');
    const doubled = storedArray.map((number) => number);
	console.log(doubled)
	let fare = sessionStorage.getItem('fare');
	let servicetax = 0.05*fare;
	let total=fare*1.05;
    
    return (
        <div>
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
                        <a class="nav-link" href="#">Payment</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Checkout</a>
                    </li>
                    </ul>
					<div className="row">
					<div className="col-6">
					<form>
        <h4 class="mb-4">Payment</h4>
				
				<div class="form-check">
					<input type="radio" class="form-check-input" id="credit" name="payment-method" checked required />
					<label for="credit" class="form-check-label">Credit Card</label>
				</div>

				<div class="form-check">
					<input type="radio" class="form-check-input" id="debit" name="payment-method" required/>
					<label for="debit" class="form-check-label">Debit Card</label>
				</div>

				<div class="form-check">
					<input type="radio" class="form-check-input" id="paypal" name="payment-method"  required/>
					<label for="paypal" class="form-check-label">PayPal</label>
				</div>
			
				<div class="row mt-4">
					<div class="col-md-6 form-group">
							<label for="card-name">Name on card</label>
							<input type="text" class="form-control" id="card-name" placeholder required/>
							<div class="invalid-feedback">
								Name on card is required
							</div>
						</div>

						<div class="col-md-6 form-group">
							<label for="card-no">Card Number</label>
							<input type="text" class="form-control" id="card-no" placeholder required/>
							<div class="invalid-feedback">
								Credit card number is required
							</div>
						</div>
				</div>
                
				<div class="form-row">
					<div class="col-md-5 form-group">
							<label for="expiration">Expire Date</label>
							<input type="text" class="form-control" id="card-name" placeholder required/>
							<div class="invalid-feedback">
								Expiration date required
							</div>
						</div>
					

					<div class="col-md-5 form-group">
							<label for="ccv-no">Security Number</label>
							<input type="text" class="form-control" id="sec-no" placeholder required/>
							<div class="invalid-feedback">
								Security code required
							</div>
					</div>
				</div>

					<hr class="mb-4"></hr>
				
				<Link to={'/checkout/'+ props.match.params.id}><button class="btn btn-outline-dark" type="submit">Continue to Checkout</button></Link>
        </form>
		</div>
		<div className="col-6">
		<div class="card" >
     <div class="card-header">
      <h4>Billing Sumary</h4>
     </div>
  		<ul class="list-group list-group-flush">
	<li class="list-group-item">Total Fare: {fare}</li>
	<li class="list-group-item">Service Tax 5%: {servicetax}</li>
	<li class="list-group-item">Total Payable Amount: {total}</li>
         </ul>
      </div>


		</div>
        </div>
        <div>
            
        </div>
        </div>
      
        
        </div>
		</div>
    )
}
export default Paymentpage; 