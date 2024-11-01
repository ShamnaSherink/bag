import React, { useEffect, useState } from 'react';
import './registration.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Toaster, toast } from 'react-hot-toast';



export default function Editprofile() {
    const [input, setInput] = useState({
        name: '',
        password: '',
        phone_number: '',
        address: '',
        image: '',
    });
    
    const { id } = useParams(); 
    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState({});

    useEffect(() => {
        const login_id = JSON.parse(localStorage.getItem('login_id'));
        axios.get(`http://127.0.0.1:8000/view_user_profile_api/${login_id}`)
            .then((response) => {
                setUser(response.data.data);
                setInput({
                    name: response.data.data.name,
                    address: response.data.data.address,
                    phone_number: response.data.data.phone_number,
                    image: response.data.data.image,
                });
            })
            .catch((error) => {
                console.error("Error fetching user profile", error);
            });
    }, []);

    const validate = () => {
        const error = {};
        if (input.name === '') {
            error.name = 'Enter your name';
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

    const data = new FormData();
    data.append('name', input.name);
    data.append('address', input.address);
    data.append('phone_number', input.phone_number);
    if (input.image) {
        data.append('image', input.image); 
    }

    const submit = (event) => {
        event.preventDefault();
        if (!validate()) {
            return console.log('Validation error');
        }

        axios.post('http://127.0.0.1:8000/update_single_user_api/', data)
        .then((response) => {
            console.log('Response:', response);
            toast.success('Profile edited successfully!');
            navigate('/');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

    const inputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput({ ...input, [name]: value });
    };

    return (
        <div>

            <div className='registercontainer'>
            <Toaster/>

                <div className="container1">
                    <h2 style={{ textAlign: 'center' }}>Edit Profile</h2>
                    <div className="form-group">
                        <label htmlFor="name" style={{ color: errorMessage?.name ? 'red' : '' }}>Name</label>
                        <input name='name' value={input.name} style={{ borderColor: errorMessage?.name ? 'red' : '' }} type="text" id="name" onClick={() => { setErrorMessage({ ...errorMessage, name: '' }) }} onChange={inputChange} required />
                    </div>
                    <div className="form-group">
                        <label style={{ color: errorMessage?.phone_number ? 'red' : '' }} htmlFor="number">Number:</label>
                        <input name='phone_number' style={{ borderColor: errorMessage?.phone_number ? 'red' : '' }} type="text" id="number" onClick={() => { setErrorMessage({ ...errorMessage, phone_number: '' }) }} onChange={inputChange} value={input.phone_number} required />
                    </div>
                    <div className="form-group">
                        <label style={{ color: errorMessage?.address ? 'red' : '' }} htmlFor="address">Address:</label>
                        <input name='address' style={{ borderColor: errorMessage?.address ? 'red' : '' }} type="text" id="address" onClick={() => { setErrorMessage({ ...errorMessage, address: '' }) }} onChange={inputChange} value={input.address} required />
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
                        
                         style={{ width: '100px', marginLeft: '120px' }} onClick={submit} type="submit" />
                    </div>
                </div>
            </div>
        </div>
    );
}