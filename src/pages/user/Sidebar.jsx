import React, { useEffect, useState } from 'react';
import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Alert,
  IconButton,
  ListItemButton,
  ListItemAvatar,
  Paper,
} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { getAllCategories } from '../../services/operations/categoryAPI';
import { useSelector } from 'react-redux';
import { IoLogOutSharp } from 'react-icons/io5';
import { MdQuiz } from "react-icons/md";
import { IoMdHome } from 'react-icons/io';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const {token} = useSelector((state) => state.auth)
        

  useEffect(() => {
    const fetchCategories = async (token) => {
      try {
        const response = await getAllCategories(token)
        setCategories(response);
      } catch (error) {
        setError(error); // Store error for Snackbar display
      }
    };
    
    fetchCategories(token);
  }, [token]);
  
  const handleSnackbarClose = () => {
    setError(null); // Clear error state for Snackbar dismissal
  };

  return (
    <div className="bg-gray-200 ">
      <Card>
        <List component="nav" aria-label="main mailbox folders">
        <div className='w-full p-1 mb-8 border border-dashed rounded-md border-rose-800 border-y-2'>
          <ListItemText>
            <div className='flex items-center justify-between gap-7'>
              <div className='flex items-center justify-center mx-auto text-lg'>
                Menu
              </div>
            </div>
            </ListItemText>
          </div>
          <NavLink to="/user/home">
            <ListItem disablePadding>
            <ListItemButton className='flex items-start justify-start gap-7'>
            <div className='flex items-start justify-normal'>
            <ListItemAvatar>
                <IoMdHome size={25} />
            </ListItemAvatar>
            <ListItemText><div className='text-lg '>Home</div></ListItemText>
            </div>
            </ListItemButton>
            </ListItem>
        </NavLink>
          
          <ListItem component={Link} to={`/user/0`}>
            <ListItem disablePadding>
            <ListItemButton className='flex items-start justify-start gap-7'>
            <div className='flex items-center justify-normal'>
            <ListItemAvatar>
                <MdQuiz size={24}/>
            </ListItemAvatar>
              <ListItemText primary="All Quiz" />
              </div>
              </ListItemButton>
              </ListItem>
            </ListItem>
          {categories.map((category) => (
            <ListItem key={category.cid} component={Link} to={`/user/${category.cid}`}>
            <ListItem disablePadding>
            <ListItemButton className='flex items-start justify-start gap-7'>
            <div className='flex items-center justify-normal'>
            <ListItemAvatar>
                <MdQuiz size={24}/>
            </ListItemAvatar>
              <ListItemText primary={category.title} />
              </div>
              </ListItemButton>
              </ListItem>
            </ListItem>
          ))}
        </List>
      </Card>
      
      <Snackbar
        open={error !== null} // Control Snackbar visibility based on error state
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Optional customization
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
            {/* <CloseIcon /> */}
          </IconButton>
        }
      >
        <Alert severity="error" sx={{ width: '100%' }}>
          Error in loading categories from server
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Sidebar;
