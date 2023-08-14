import React from 'react'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

function Confirmation() {

  return (
    <div>
        <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert onClose={() => {window.location="/"}}>Order Placed</Alert>
    </Stack>
    <Typography variant='h4' justifyContent={'center'}>
      The order has been successfully Placed
    </Typography>
    </div>
  )
}

export default Confirmation