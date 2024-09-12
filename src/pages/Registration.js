import React, { useState } from 'react'
import './registration.css'


export default function Registration() {
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        number: '',
        address: ''
    })
    console.log(input)


    const [errorMessage,setErrorMessage]=useState({})

    const validate = ()=>{
        
        console.log('event');
        const error = {} //object
        if(input.name==''){
            error.name = 'Enter your name'
        }
        if(input.email==''){
            error.email='Enter your email'
        }
        if(input.password==''){
            error.password='Enter your password'
        }
        if(input.number==''){
            error.number='Enter your number'
        }
        if(input.address==''){
            error.address='Enter your address'
        }
        setErrorMessage(error)
        return Object.keys(error).length==0

    }

    const submit=(event)=>{
        if (!validate()) {
            return console.log('error');
            
        }
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
        <div>

            <div className='registercontainer'>
                <div class="container">

                    <h2>Register</h2>

                    <div class="form-group">
                        <label for="username" style={{color:errorMessage?.name?'red':''}}>Name</label>
                        <input  style={{borderColor:errorMessage?.name?'red':''}} type="text" id="name" onClick={()=>{setErrorMessage({...errorMessage,name:''})}} onChange={inputChange}name="name" required />
                    </div>
                    <div class="form-group">
                        <label for="email"style={{color:errorMessage?.email?'red':''}}>Email:</label>
                        <input style={{borderColor:errorMessage?.email?'red':''}} type="text" id="email" onClick={()=>{setErrorMessage ({...errorMessage,email:''})}}  onChange={inputChange} name="email" required /><br></br>
                    </div>


                    <div class="form-group">
                        <label style={{color:errorMessage?.password?'red':''}} for="password">Password:</label>
                        <input style={{borderColor:errorMessage?.password?'red':''}}  type="text" id="password" onClick={()=>{setErrorMessage({...errorMessage,password:''})}} onChange={inputChange} name="password" required />
                    </div>

                    <div class="form-group">
                        <label style={{color:errorMessage?.number?'red':''}} for="number">Number:</label>
                        <input style={{borderColor:errorMessage?.number?'red':''}} type="text" id="number" onClick={()=>{setErrorMessage({...errorMessage,number:''})}} onChange={inputChange} name="number" required />
                    </div>


                    <div class="form-group">
                        <label style={{color:errorMessage?.address?'red':''}} for="number">Address:</label>
                        <input style={{borderColor:errorMessage?.address?'red':''}} type="text" id="address" onClick={()=>{setErrorMessage ({...errorMessage,address:''})}} onChange={inputChange} name="address" required />
                    </div>

                    <div class="form-group">
                        <input style={{ width: '100px', marginLeft: '120px' }} onClick={submit} type="submit" />
                    </div>
                    <div className='link'>
                        <b>Already have an account?<a href='/'> Sign in </a></b>
                    </div>

                </div>
            </div>


        </div>
    )
}
