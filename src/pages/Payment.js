import React, { useState } from 'react'
import axios from 'axios';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './payment.css'
import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import { json } from 'react-router-dom';

export default function Payment() {
    const [input, setInput] = useState({
        card_holder_name: '',
        card_number: '',
        expiry_date: '',
        cvv: ''
    })
    const [errorMessage, setErrorMessage] = useState({})
    const inputChange = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.target.name);
        console.log(event.target.value);

        const name = event.target.name
        const value = event.target.value

        setInput({ ...input, [name]: value })

    }
    const submit = (event) => {
        if (!validate()) {
            return console.log('error');

        }
    }
    const id = json.parse(localStorage.getItem('login_id'))
    axios.get(`http://127.0.0.1:8000/place-order/${id}`).then((response) => {
        console.log(response.data.message);

    }).catch((error) => {
        console.log('error==>', error);

    })



    // console.log(input)




    const validate = () => {

        console.log('event');
        const error = {}
        if (input.card_holder_name == 'enter your name') {
            error.card_holder_name = ''
        }
        if (input.card_number == '') {
            error.card_number = 'Enter card number'
        }
        if (input.expiry_date == '') {
            error.expiry_date = 'Expiry date'
        }
        if (input.cvv == '') {
            error.cvv = 'cvv'
        }

        setErrorMessage(error)
        return Object.keys(error).length == 0

    }



    return (
        <div>
            <Navbar />
            <Navbar2 />
            <div className="container payment-form-container">
                <div className="row justify-content-center">
                    <div className="d-flex flex-wrap col-md-10 col-lg-8">
                        <div className="col-md-7 col-sm-12 payment-card-container">
                            <div className="payment-card shadow">
                                <div className="payment-header">
                                    <h2 >Payment Methods</h2>
                                </div>
                                <Container className="mt-5">
                                    <Form>
                                        <Row className="mt-4 d-flex justify-content-between">
                                            <Col xs={12} md={3}>
                                                <Form.Check
                                                    type="radio"
                                                    id="card"
                                                    name="paymentMethod"
                                                    label="Card"
                                                    className="mb-3"
                                                />
                                            </Col>
                                            <Col xs={12} md={3}>
                                                <Form.Check
                                                    type="radio"
                                                    id="upi"
                                                    name="paymentMethod" style={{ marginLeft: '-30px' }}
                                                    label="UPI"
                                                    className="mb-3"
                                                />
                                            </Col>
                                            <Col xs={12} md={3}>
                                                <Form.Check
                                                    type="radio"
                                                    id="cod"
                                                    name="paymentMethod" style={{ marginLeft: '-72px' }}
                                                    label={<span>Cash&nbsp;on&nbsp;Delivery</span>}
                                                    className="mb-3"
                                                />
                                            </Col>
                                        </Row>
                                        <Button type="submit" className="btn btn-primary w-100 mt-4">Continue</Button>
                                    </Form>
                                </Container>
                            </div>
                        </div>

                        <div style={{ marginLeft: '-8px' }} className="col-md-5 col-sm-12 summary-card-container">
                            <div className="summary-card shadow">
                                <div className="summary-header">
                                </div>
                                <div className="summary-body">

                                    <div className="payment-methods">
                                        <button style={{ height: '50px', borderColor: 'white', marginLeft: '16px' }}><img src="/assets/google-pay.png " alt="Gpay" /></button>
                                        <button style={{ height: '50px', borderColor: 'white' }}>  <img src="/assets/paypal.png" alt="paypal" height={'20px'} width={'30px'} /></button>
                                        <button style={{ height: '50px', borderColor: 'white' }}>  <img src="/assets/phonepe.png" alt="phonepe" /></button>
                                    </div>
                                    <br></br>
                                    <form>
                                        <div className="form-group">
                                            <label style={{ color: errorMessage?.name ? 'red' : '' }}>Card Holder Name</label>
                                            <input style={{ width: '100%', borderColor: errorMessage?.name ? 'red' : '' }} type="text" onClick={() => { setErrorMessage({ ...errorMessage, name: '' }) }} onChange={inputChange} className="form-control" placeholder="Enter your full name" />
                                        </div>

                                        <div className="form-group">
                                            <label style={{ color: errorMessage?.name ? 'red' : '' }}>Card Number</label>
                                            <input style={{ width: '100%', borderColor: errorMessage?.name ? 'red' : '' }} type="text" onClick={() => { setErrorMessage({ ...errorMessage, name: '' }) }} onChange={inputChange} className="form-control" placeholder="0000-0000-0000-0000" />
                                        </div>

                                        <div className="form-group">
                                            <label style={{ color: errorMessage?.name ? 'red' : '' }}>Expiry Date</label>
                                            <input style={{ width: '70%', borderColor: errorMessage?.name ? 'red' : '' }} type="text" onClick={() => { setErrorMessage({ ...errorMessage, name: '' }) }} onChange={inputChange} className="form-control" placeholder="MM/YY" />

                                            <div className="form-group">
                                                <label style={{ color: errorMessage?.name ? 'red' : '' }}>CVV</label>
                                                <input style={{ width: '70%', borderColor: errorMessage?.name ? 'red' : '' }} type="text" onClick={() => { setErrorMessage({ ...errorMessage, name: '' }) }} onChange={inputChange} className="form-control" placeholder="CVv" />
                                            </div>
                                        </div>


                                        <button type="submit" className="btn btn-primary w-100 mt-4" onClick={submit}>Continue</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
