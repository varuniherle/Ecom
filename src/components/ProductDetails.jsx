import { Grid ,Container,Box, Button, Typography, Rating } from '@mui/material'
import React from 'react'
import { useLocation,Link} from 'react-router-dom'
import { CardMedia } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function ProductDetails({product}) {
  console.log(product)
  const rate  = product.rating.rate
  return (
    <div>
      <Grid container spacing={2}  mt={5}>
        <Grid md={6}>
          <Box
            component="img"
            sx={{
              height: 400,
              width: 350,
            }}
            alt={product.title}
            src={product.image}
          />
          
        </Grid>
        <Grid md={6}>
          <Typography variant='h4'>
            {product.title}
          </Typography>
          <Typography variant='body1'mt={3}>
          {product.description}
          </Typography>

          <Typography component="legend" mt={2}>{product.rating.count} people have rated </Typography>  
           <Rating value={rate} readOnly></Rating>
           <Typography variant='h6'>
            {product.price}
           </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductDetails