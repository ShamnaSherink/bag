import React, { useEffect, useState } from 'react';
import './registration.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

export default function Edit_shopprofile() {
    const [input, setInput] = useState({
        shop_name: '',
        password: '',
        address: '',
        phone_number: '',
        image: '',
    });
    console.log(input);
    

    const { id } = useParams();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState({});

    useEffect(() => {
        const login_id = JSON.parse(localStorage.getItem('login_id'));
        axios.get(`http://127.0.0.1:8000/view_shop_profile_api/${login_id}`)
            .then((response) => {
                setInput({
                    shop_name: response.data?.shop_name || '',
                    address: response.data?.address || '',
                    password: response.data?.password || '',
                    phone_number: response.data?.phone_number || '',
                    image: response.data?.image || '',
                    login_id: login_id
                });
            })
            .catch((error) => {
                console.error("Error fetching shop profile", error);
            });
    }, [id]);

    const inputChange = (event) => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    };

    const submit = (event) => {
        event.preventDefault();
        if (!validate()) {
            return console.log('Validation error');
        }

        const data = new FormData();
        data.append('shop_name', input.shop_name);
        data.append('address', input.address);
        data.append('phone_number', input.phone_number);
        if (input.image) {
            data.append('image', input.image);
        }
        data.append('password', input.password);

        axios.put(`http://127.0.0.1:8000/update_shop_profile_api/${id}`, data)
            .then((response) => {
                console.log(response.data.data);
                
                toast.success('Profile edited successfully!'); 
                navigate('/shopprofile');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const validate = () => {
        const error = {};
        if (input.shop_name === '') {
            error.shop_name = 'Enter your shop name';
        }
        if (input.password === '') {
            error.password = 'Enter your password';
        }
        if (input.phone_number === '') {
            error.phone_number = 'Enter your phone number';
        }
        if (input.address === '') {
            error.address = 'Enter your address';
        }
        setErrorMessage(error);
        return Object.keys(error).length === 0;
    };

    return (
        <div className="registration-container">
            <div className="form-container">
                <h2 style={{ color: 'black' }} className="text-center">Shop Profile</h2>
                <form onSubmit={submit}>
            <Toaster /> {/* This should be present here */}

                    <div className="form-group mb-3">
                        <label htmlFor="shop_name" style={{ color: errorMessage?.shop_name ? 'red' : '' }}>
                            Shop Name
                        </label>
                        <input
                            style={{ borderColor: errorMessage?.shop_name ? 'red' : '' }}
                            type="text"
                            name="shop_name"
                            className="form-control"
                            onClick={() => { setErrorMessage({ ...errorMessage, shop_name: '' }) }}
                            onChange={inputChange}
                            value={input.shop_name}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="address" style={{ color: errorMessage?.address ? 'red' : '' }}>
                            Address
                        </label>
                        <input
                            style={{ borderColor: errorMessage?.address ? 'red' : '' }}
                            type="text"
                            name="address"
                            className="form-control"
                            onClick={() => { setErrorMessage({ ...errorMessage, address: '' }) }}
                            onChange={inputChange}
                            value={input.address}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="phone_number" style={{ color: errorMessage?.phone_number ? 'red' : '' }}>
                            Phone Number
                        </label>
                        <input
                            style={{ borderColor: errorMessage?.phone_number ? 'red' : '' }}
                            type="text"
                            name="phone_number"
                            className="form-control"
                            onClick={() => { setErrorMessage({ ...errorMessage, phone_number: '' }) }}
                            onChange={inputChange}
                            value={input.phone_number}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="image">Shop Image</label>
                        <input
                            type="file"
                            name="image"
                            className="form-control image-upload"
                            onChange={(event) => { setInput({ ...input, image: event.target.files[0] }); }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" >Update Profile</button>
                </form>
            </div>
        </div>
    );
}



