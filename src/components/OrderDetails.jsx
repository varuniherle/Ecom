import React ,{useState}from 'react'
import { useLocation } from 'react-router-dom'
import { Step, Box, Container, Stepper, StepLabel, Button } from '@mui/material';
import Orders from './Orders';
import Address from './Address';
import ProductDetails from './ProductDetails';
import Confirmation from './Confirmation';

const steps = ['Product Details', 'Shipping Address', 'Review your order'];
function OrderDetails() {
const [activeStep, setActiveStep] = useState(0);
const location = useLocation()
  const {product} = location.state
  console.log(product)
  const [address, setAddress] = useState(null);
  console.log(address)
  const [isAddressFormCompleted, setIsAddressFormCompleted] = useState(false);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAddressSubmit = (addressData) => {
    setAddress(addressData);
    handleNext();
  };

  return (
    <div>
        <Container component="main">
        <Box sx={{ marginTop: 8 }}>
        
        <Stepper activeStep={activeStep} >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
            {activeStep === steps.length ? (
              <Confirmation />
            ) : (
              <div>
                {activeStep === 0 && <ProductDetails product ={product} />}
                {activeStep === 1 && <Address onNext={handleAddressSubmit} 
                onFormComplete={() => setIsAddressFormCompleted(true)}
                 />}
                 {activeStep === steps.length-1 && <Orders address={address} product ={product} />}
                <div>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mt: 3, mr: 1 }}>
                    Back
                  </Button>
                  
                  <Button variant="contained" color="primary" onClick={handleNext} sx={{ mt: 3, ml: 1 }} disabled={activeStep === 1 && !isAddressFormCompleted}>
                    {activeStep === steps.length-1  ? 'Place Order' : 'Next'}
                  </Button>
                  </Box>
                </div>
              </div>
            )}
         
        </Box>

        </Container>
    </div>
  )
}

export default OrderDetails