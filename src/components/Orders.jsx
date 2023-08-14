import { Card, Grid,Box ,Typography} from '@mui/material'
import React from 'react'

function Orders({address, product}) {
    console.log(address, product)
  return (
    <div>
        <Card mt={4}>
        <Grid container spacing={2} mt={3}>
            
            <Grid item md ={8}>
            <Box
            component="img"
            sx={{
              height: 250,
              width: 250,
            }}
            alt={product.title}
            src={product.image}
          />
          <Typography variant='h4'>
            {product.title}
          </Typography>
          <Typography variant='body1'mt={3}>
          {product.description}
          </Typography>
            </Grid>
            <Grid item md ={4}>
            <Typography variant='h5' mt={2}>
                Shipping address
            </Typography>
            <Typography mt= {2}>{address.name}, {address.number}</Typography>
            <Typography >{address.street}, {address.city}, {address.state}</Typography>
            <Typography mt= {1}>{address.zipcode}</Typography>
            </Grid>
        </Grid>
        </Card>
    </div>
  )
}

export default Orders