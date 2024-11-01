import React, { useState } from 'react';
import './registration.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';  

export default function Registration() {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        phone_number: '',
        address: '',
        image: '',
        login_id: localStorage.getItem('login_id')
    });
    console.log(input);

    const [errorMessage, setErrorMessage] = useState({});
    console.log(errorMessage);

    const inputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput({ ...input, [name]: value });
    };

    const validate = () => {
        const error = {};
        if (input.name === '') {
            error.name = 'Enter your name';
        }
        if (input.email === '') {
            error.email = 'Enter your email';
        }
        if (input.password === '') {
            error.password = 'Enter your password';
        }
        if (input.phone_number === '') {
            error.phone_number = 'Enter your number';
        }
        if (input.address === '') {
            error.address = 'Enter your address';
        }
        setErrorMessage(error);
        return Object.keys(error).length === 0;
    };

    const submit = (event) => {
        event.preventDefault();
        if (!validate()) {
            return console.log('error');
        }

        const data = new FormData();
        data.append('name', input.name);
        data.append('email', input.email);
        data.append('password', input.password); 
        data.append('address', input.address);
        data.append('phone_number', input.phone_number);
        data.append('image', input.image); 

        axios.post('http://127.0.0.1:8000/registration/', data, {
            headers: {
                'Content-Type': 'multipart/form-data', 
            },
        })
        .then((response) => {
            console.log('response==>', response);
            navigate('/');
        })
        .catch((error) => {
            console.log('error==>', error);
        });
    };

    return (
        <div>
            <div className='registercontainer'>
                <div className="container1">
                    <h2 className="text-center" style={{ color: 'black' }}>Registration</h2>

                    <div className="form-group">
                        <label htmlFor="name" style={{ color: errorMessage?.name ? 'red' : '' }}>Name</label>
                        <input
                            style={{ borderColor: errorMessage?.name ? 'red' : '' }}
                            type="text"
                            id="name"
                            onClick={() => { setErrorMessage({ ...errorMessage, name: '' }) }}
                            onChange={inputChange}
                            name="name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" style={{ color: errorMessage?.email ? 'red' : '' }}>Email:</label>
                        <input
                            style={{ borderColor: errorMessage?.email ? 'red' : '' }}
                            type="text"
                            id="email"
                            onClick={() => { setErrorMessage({ ...errorMessage, email: '' }) }}
                            onChange={inputChange}
                            name="email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ color: errorMessage?.password ? 'red' : '' }} htmlFor="password">Password:</label>
                        <input
                            style={{ borderColor: errorMessage?.password ? 'red' : '' }}
                            type="text"
                            id="password"
                            onClick={() => { setErrorMessage({ ...errorMessage, password: '' }) }}
                            onChange={inputChange}
                            name="password"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ color: errorMessage?.number ? 'red' : '' }} htmlFor="number">Number:</label>
                        <input
                            style={{ borderColor: errorMessage?.number ? 'red' : '' }}
                            type="text"
                            // id="phone_number"
                            onClick={() => { setErrorMessage({ ...errorMessage,phone_number: '' }) }}
                            onChange={inputChange}
                            name="phone_number"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ color: errorMessage?.address ? 'red' : '' }} htmlFor="address">Address:</label>
                        <input
                            style={{ borderColor: errorMessage?.address ? 'red' : '' }}
                            type="text"
                            id="address"
                            onClick={() => { setErrorMessage({ ...errorMessage, address: '' }) }}
                            onChange={inputChange}
                            name="address"
                            required
                        />
                    </div>

                    <Form.Group controlId="formProductImage">
                        <Form.Label style={{ color: errorMessage.image ? 'red' : '' }}>
                            {errorMessage.image ? errorMessage.image : 'Image'}
                        </Form.Label>
                        <Form.Control
                            type="file"
                            name="image"
                            onChange={(event) => { setInput({ ...input, image: event.target.files[0] }); }}
                        />
                    </Form.Group>

                    <div className="form-group">
                        <input
                            style={{ width: '100px', marginLeft: '120px' }}
                            onClick={submit}
                            type="submit"
                        />
                    </div>

                    <div className='link'>
                        <b>Already have an account?<a href='/'> Sign in </a></b>
                    </div>
                </div>
            </div>
        </div>
    );
}
