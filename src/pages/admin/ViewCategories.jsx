import { Button, Card, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { MdCategory } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../services/operations/categoryAPI';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const ViewCategories = () => {

    const [categories, setCategories] = useState([])
    const {token} = useSelector((state) => state.auth)
    const navigate = useNavigate()

    const getCategories = async (token) => {
      const toastId = toast.loading("loading...")
        try {
          const res = await getAllCategories(token);
          setCategories(res)
          // console.log("DATA:", res)
          toast.success("All Categories Fetched")
        } catch (error) {
          console.log("fetching Categories error")
          toast.error("Something went wrong")
        }
        toast.dismiss(toastId)        
      };
      
      useEffect(() => {
        getCategories(token)
      }, [])
    
  return (
    <div>
        <Card>
            <List className='flex flex-col gap-4'>
                <Typography variant="subtitle1" className='p-4' component="div" style={{ fontWeight: 'bold' }}>
                      <div className='text-2xl'> All Categories</div>
                </Typography>
                {categories.map((c, index) => (
                <ListItem key={index} className='border-t-2 border-b-2'>
                    
                    <ListItemIcon>
                      <MdCategory size={24} />
                    </ListItemIcon>
                    
                    <ListItemText primary={c.title} secondary={c.description} />
                    
                </ListItem>
                ))}
                    
            <div className='mx-auto'><Button variant="contained" onClick={()=>{navigate("/admin/addCategory")}} color="secondary"><IoMdAdd size={20}/>  Add New Category</Button></div>
                
            </List>
        </Card>
    </div>
  )
}
