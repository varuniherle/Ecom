import React,{useState} from 'react'
import {Button,TextField, Checkbox,Box,Grid,Typography, Container} from '@mui/material'
import ProductDetails from './ProductDetails';
import Orders from './Orders';

function Address({ onNext,onFormComplete }) {
  
const handleSubmit =(event)=>{
  event.preventDefault();
  console.log('called')
  const name = event.target['name'].value;
  const number = event.target['number'].value;
  const street = event.target['street'].value;
  const city = event.target['city'].value;
  const state = event.target['state'].value;
  const landmark = event.target['landmark'].value;
  const zipcode = event.target['zipcode'].value;
  const address = {
    name: name,
    number: number,
    street: street,
    city: city,
    landmark: landmark,
    state: state,
    zipcode: zipcode,
  };
  if (!name || !number || !street || !city || !state || !zipcode) {
    alert('Please fill in all required fields.');
    return;
  }
  console.log(address)
  onFormComplete();
  onNext(address);
}
  return (
    <div>
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography component="h1" variant="h5">
            Add Address
            </Typography>
            <Box component = "form" onSubmit={handleSubmit}>
            <TextField margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus />
            <TextField margin="normal"
              required
              fullWidth
              id="number"
              label="Contact Number"
              name="number"
               />
            <TextField margin="normal"
            required
            fullWidth
            id = "street"
            label = "Street" 
            name = "street"
             />
            <TextField margin="normal"
            required
            fullWidth
            id = "city"
            label = "City" 
            name = "city"
             />
            <TextField margin="normal"
            required
            fullWidth
            id = "state"
            label = "State" 
            name = "state"
             />
            <TextField margin="normal"
            required
            fullWidth
            id = "landmark"
            label = "Landmark" 
            name = "landmark"
             />
            <TextField margin="normal"
            required
            fullWidth
            id = "zipcode"
            label = "Zip Code" 
            name = "zipcode"
             />
            <Button type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
               >
                Save Address
            </Button>
            </Box>
            </Box>
        </Container>
    </div>
  )
}

export default Address