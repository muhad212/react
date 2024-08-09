import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
var[val,setval]=useState("ADIL")
var[name,setname]=useState()
const hip=(e)=>{
    setval(e.target.value)
    console.log(e.target.value)
}
const submit=()=>{
    setname(val)
}
  return (
    <div>
        <Typography varient='h1'gutterBottom>WELCOME {name}</Typography>
        <TextField varient='outlined'label='enter your name'onChange={hip}/><br /><br />
        <Button varient='outlined' onClick={submit}>SUBMIT</Button>
        </div>
  )
}

export default Statebasic