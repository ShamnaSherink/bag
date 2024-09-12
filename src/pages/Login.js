import React, { useState } from 'react'
import './login.css'



export default function Login() {
  const [input, setInput] = useState({
    email: '',
    password: ''
  })
  console.log(input);
  const inputChange = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);

    const name = event.target.name
    const value = event.target.value

    setInput({ ...input, [name]: value })

  }

  const [errorMessage, setErrorMessage] = useState({})

  const validate = () => {
    console.log('event');
    const error = {}
    if (input.email == '') {
      error.email = 'Enter your email'
    }
    if (input.password == '') {
      error.password = 'Enter your password'
    }

    setErrorMessage(error)
    return Object.keys(error).length == 0

  }

  const submit = (event) => {
    if (!validate()) {
      return console.log('error');

    }


  }

  return (

    <div className="logcontainer">
      <div className='container1'>
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email" style={{ color: errorMessage?.email ? 'red' : '' }}>email:</label>
            <input style={{ borderColor: errorMessage?.email ? 'red' : '' }} type="text" id="email" onClick={() => { setErrorMessage({ ...errorMessage, email: '' }) }} onChange={inputChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="password" style={{ color: errorMessage?.password ? 'red' : '' }}>Password:</label>
            <input style={{ borderColor: errorMessage?.password ? 'red' : '' }} type="password" id="password" onClick={() => { setErrorMessage({ ...errorMessage, password: '' }) }} onChange={inputChange}/>
          </div>

          <div>
            <button
              style={{ width: '100px', backgroundColor: 'blue', color: 'white', height: '30px' }}
              type="submit" onClick={submit} >Login

            </button>
            <div className='loglink'>
              <b>Already have an account?<a href=''> Sign in </a></b>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
}













