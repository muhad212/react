import { Button, TextField } from '@mui/material'
import React from 'react'

const S2 = () => {
  return (
    <div>
      <TextField variant='outlined'label='name'/><br /><br />
      <TextField variant='outlined'label='email'/><br /><br />
      <TextField variant='outlined'label='password'/><br /><br />
      <Button variant='outlined'>SUBMIT</Button>
      
    </div>
  )
}

export default S2