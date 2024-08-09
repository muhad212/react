import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Hi = () => {
var[val,setval]=useState()

 const input1=()=>{
 setval("React")
 console.log("clicked")
}
const input2=()=>{
    setval("Angular")
   }
   const input3=()=>{
    setval("View")
   }

   useEffect(()=>{
    input2()},[])
  return (
    <div>
        <Typography varient='h1'>Hi{val}</Typography>
        <Button variant='outlined' color='secondary' onClick={input1}>React</Button>
        <Button variant='outlined'color='primary'onClick={input2}>Angular</Button>
        <Button variant='outlined'color='success'onClick={input3}>View</Button>
    </div>
  )
}

export default Hi