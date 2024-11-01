import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Login() {

  const navigate = useNavigate()

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
      localStorage.setItem('login_id', JSON.stringify(response.data.data.login_id))
      localStorage.setItem('user_id', JSON.stringify(response.data.data.user_id))
      localStorage.setItem('role', JSON.stringify(response.data.data.role))
      navigate('/')
    }).catch((error) => {
      console.log('error==>', error);

    })
  }




  return (

    <div className="login-page">
      <div className="login-container">
        <h2 style={{ color: 'white' }}>Login to your site</h2>
        <form>
          <input
            name="email"
            style={{ width: '100%', borderColor: errorMessage?.email ? 'red' : '' }}
            type="email"
            className="form-control"
            placeholder="Email"
            onClick={() => { setErrorMessage({ ...errorMessage, email: '' }) }}
            onChange={inputChange}
            required
          />
          <input
            name="password"
            style={{ width: '100%', borderColor: errorMessage?.password ? 'red' : '' }}
            type="password"
            className="form-control"
            placeholder="Password"
            onClick={() => { setErrorMessage({ ...errorMessage, password: '' }) }}
            onChange={inputChange}
            required
          />
          <button type="submit" className="btn btn-danger btn-block" onClick={submit}>
            Login
          </button>
        </form>
        <div className="forgot-password">
          <span style={{ color: 'white' }}>Dont have an account yet?</span><br></br> <a href="/user-registration"><span style={{ color: 'white', textDecoration: 'none' }}> </span></a>
          <span style={{ color: 'white' }}></span><br></br> <a href="/user-registration"><span style={{ color: 'white', textDecoration: 'none' }}>Create user account </span></a>
          <span style={{ color: 'white' }}></span><br></br> <a href="/shopregistration"><span style={{ color: 'white', textDecoration: 'none' }}>Create Shop account </span></a>

          <br></br><br></br> <span style={{ color: 'white' }}>forgot password</span><br></br> <a href=""><span style={{ color: 'black', textDecoration: 'none' }}> <b ></b></span></a><br></br>

        </div>
      </div>
    </div>
  );
}







