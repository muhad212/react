import {AppBar,Box,Button,FormGroup,Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar >
        <Toolbar>
         <Typography variant='h6'>login</Typography>
         <Link to='/S2'>
         <Button variant="contained">Signup</Button>
         </Link>
         <Link to='/l'>
         <Button variant="contained">login</Button>
         </Link>
         <Link to='/Sb'>
         <Button variant="contained">home</Button>
         </Link>
         <Link to='/Hi'>
          <Button variant="contained">Hi</Button>
          </Link>
          <Link to='/Api'>
            <Button variant="contained">Api</Button>
          </Link>
         </Toolbar>
        </AppBar><br /><br /><br /><br />

    </div>
  )
}

export default Navbar