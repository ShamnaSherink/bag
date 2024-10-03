import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Login() {
  const navigate=useNavigate()
  const [input, setInput] = useState({
    email: '',
    password: ''
  })
  console.log(input);
  const inputChange = (event) => {

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
    event.preventDefault()

    if (!validate()) {
      return console.log('error');

    }

    axios.post('http://127.0.0.1:8000/login/', input).then((response) => {
      console.log('response==>', response);
      localStorage.setItem('login_id',JSON.stringify(response.data.data.login_id))
      localStorage.setItem('user_id',JSON.stringify(response.data.data.user_id))
      localStorage.setItem('role',JSON.stringify(response.data.data.role))
      navigate('/')
    }).catch((error) => {
      console.log('error==>', error);

    })


  }



 

  

  return (

    <div className="logcontainer">
      <div className='container1'>
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email" style={{ color: errorMessage?.email ? 'red' : '' }}>email:</label>
            <input
              name='email'
              style={{ borderColor: errorMessage?.email ? 'red' : '' }}
              type="text"
              id="email"
              onClick={() => { setErrorMessage({ ...errorMessage, email: '' }) }}
              onChange={inputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ color: errorMessage?.password ? 'red' : '' }}>Password:</label>
            <input
              style={{ borderColor: errorMessage?.password ? 'red' : '' }}
              type="password"
              id="password"
              name="password"
              onClick={() => { setErrorMessage({ ...errorMessage, password: '' }) }}
              onChange={inputChange} />
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













