import React from 'react'

export default function Editproduct() {

  return (
    <div>
        <Form.Group controlId="formProductDescription">
                  <Form.Label style={{ color: errorMessage.description ? 'red' : '' }}>
                    {errorMessage.description ? errorMessage.description : 'Description'}
                  </Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Enter product description" 
                    name="description" 
                    onChange={inputChange} 
                  />
                </Form.Group>

                <Form.Group controlId="formProductPrice">
                  <Form.Label style={{ color: errorMessage.price ? 'red' : '' }}>
                    {errorMessage.price ? errorMessage.price : 'Price'}
                  </Form.Label>
                  <Form.Control 
                    type="number" 
                    placeholder="Enter product price" 
                    name="price" 
                    onChange={inputChange} 
                  />
                </Form.Group>



              <Form.Group controlId="quantity">
                  <Form.Label style={{ color: errorMessage.quantity ? 'red' : '' }}>
                    {errorMessage.quantity ? errorMessage.quantity : 'Quantity'}
                  </Form.Label>
                  <Form.Control 
                    type="number" 
                    placeholder="" 
                    name="price" 
                    onChange={inputChange} 
                  />
                </Form.Group>
           
    </div>
  )
}
