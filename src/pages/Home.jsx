import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {
  
  const {token} = useSelector((state) => state.auth)
  
  return (
    <div className='flex flex-col gap-3 float-start'>
        Welcome To ExamPortal
        {
          token && (
            <div><Button  variant="contained" color="primary">Home Page</Button></div>
          )
        }
    </div>
  )
}
