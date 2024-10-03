import React, { useState } from 'react'
import './shopregistration.css'
import axios from 'axios';

export default function Shopregistration() {
  const [ input,setInput]=useState({
    shop_name:'',
    email:'',
    password:'',
    address:'',
    phone_number:''
    })
    console.log(input);



    const [errorMessage, setErrorMessage] = useState({})

    const validate = () => {

        console.log('event');
        const error = {} //object
        if (input.shop_name == '') {
            error.shop_name = 'Enter your name'
        }
        if (input.email == '') {
            error.email = 'Enter your email'
        }
        if (input.password == '') {
            error.password = 'Enter your password'
        }
        if (input.address == '') {
          error.address = 'Enter your address'
      }

        if (input.phone_number == '') {
            error.phone_number = 'Enter your number'
        }
       
        setErrorMessage(error)
        return Object.keys(error).length == 0

    }

    const submit = (event) => {
        event.preventDefault()
        if (!validate()) {
            return console.log('error');

        }
        axios.post('', input).then((response) => {
            console.log('response==>',response);

        }).catch((error) => {
            console.log('error==>',error);

        })


        console.log('hello');



    }

    const inputChange = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.target.name);
        console.log(event.target.value);

        const name = event.target.name
        const value = event.target.value

        setInput({ ...input, [name]: value })

    }

  
  return (
    
      
    
    

    <div className="registration-container">
      <div className="form-container">
        <h2 className="text-center">Shop Registration</h2>
        <form>
        <div className="form-group mb-3">
            <label htmlFor="shop_name" style={{color:errorMessage?.shop_name?'red':''}}>Shop Name </label>
            <input style={{borderColor:errorMessage?.shop_name?'red':''}}
   
              type="text"
              className="form-control"
              onClick={() => { setErrorMessage({ ...errorMessage, shop_name: '' }) }} onChange={inputChange}
              id="shop_name"
              required
            />
         



          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" style={{color:errorMessage?.email?'red':''}}>Email </label>
            <input style={{borderColor:errorMessage?.email?'red':''}}
   
              type="email"
              className="form-control"
              onClick={() => { setErrorMessage({ ...errorMessage, email: '' }) }} onChange={inputChange}
              id="email"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password"style={{color:errorMessage?.password?'red':''}}>Password</label>
            <input style={{borderColor:errorMessage?.password?'red':''}}
   
              type="password"
              className="form-control"
              onClick={() => { setErrorMessage({ ...errorMessage,password: '' }) }} onChange={inputChange}
              id="password"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="Enter address"style={{color:errorMessage?.address?'red':''}}>Address</label>
            <input style={{borderColor:errorMessage?.address?'red':''}}
   
              type="name"
              className="form-control"
              onClick={() => { setErrorMessage({ ...errorMessage,address: '' }) }} onChange={inputChange}
              id="address"
              required
            />
          </div>


          <div className="form-group mb-3">
            <label htmlFor="confirmPassword"style={{color:errorMessage?.phone_number?'red':''}}>Phone Number</label>
            <input style={{borderColor:errorMessage?.phone_number?'red':''}}
   
              type="name"
              className="form-control"
              id="phon_number"
              onClick={() => { setErrorMessage({ ...errorMessage, phone_number: '' }) }} onChange={inputChange}
              placeholder=""
              required
            />
          </div>
         
          <button type="submit" className="btn btn-primary w-100" onClick={submit}>Register</button>
        </form>
      </div>
    </div>
 

  )
}
