import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { AvatarGroup, ListItemButton, Paper } from '@mui/material';
import { IoMdAdd } from "react-icons/io";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { BiSolidCategory } from "react-icons/bi";
import { IoLogOutSharp } from "react-icons/io5";
import { MdQuiz } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { logout } from '../../services/operations/authAPI';

export const Sidebar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout(navigate))
  }
  
  return (
    <div>
        <Paper variant="elevation" elevation={2} className='p-1' sx={{ width: '100%', maxWidth: 967, bgcolor: 'background.paper' }}>
          
          <div className='w-full p-1 mb-8 border border-dashed rounded-md border-rose-800 border-y-2'>
          <ListItemText>
            <div className='flex items-center justify-between gap-7'>
              <div className='flex items-center justify-center mx-auto text-lg'>
                Menu
              </div>
            </div>
            </ListItemText>
          </div>
        <NavLink to="/admin/home">
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
        <NavLink to="/admin/myProfile">
        <ListItem disablePadding>
        <ListItemButton className='flex items-start justify-start'>
          <ListItemAvatar>
              <FaUserCircle size={25}/>
          </ListItemAvatar>
          <ListItemText><div className='text-lg '>Profile</div></ListItemText>
          </ListItemButton>
        </ListItem>
        </NavLink>

        <NavLink to="/admin/categories">
            <ListItem disablePadding>
            <ListItemButton className='flex items-start justify-start gap-7'>
            <div className='flex items-start justify-normal'>
            <ListItemAvatar>
                <BiSolidCategory size={25} />
            </ListItemAvatar>
            <ListItemText><div className='text-lg '>Categories</div></ListItemText>
            </div>
            </ListItemButton>
            </ListItem>
        </NavLink>

        <NavLink to="/admin/quizzes">
            <ListItem disablePadding>
            <ListItemButton className='flex items-start justify-start gap-7'>
            <div className='flex items-start justify-normal'>
            <ListItemAvatar>
                <MdQuiz size={25} />
            </ListItemAvatar>
            <ListItemText><div className='text-lg '>Quizzes</div></ListItemText>
            </div>
            </ListItemButton>
            </ListItem>
        </NavLink>

        <NavLink to="/admin/addCategory">
            <ListItem disablePadding>
            <ListItemButton className='flex items-start justify-start gap-7'>
            <div className='flex items-start justify-normal'>
            <ListItemAvatar>
                <BiSolidMessageSquareAdd size={25} />
            </ListItemAvatar>
            <ListItemText><div className='text-lg '>Add Categories</div></ListItemText>
            </div>
            </ListItemButton>
            </ListItem>
        </NavLink>

        <NavLink to="/admin/addQuiz">
            <ListItem disablePadding>
            <ListItemButton className='flex items-start justify-start gap-7'>
            <div className='flex items-start justify-normal'>
            <ListItemAvatar>
                <IoMdAdd size={25} />
            </ListItemAvatar>
            <ListItemText><div className='text-lg '>Add Quiz</div></ListItemText>
            </div>
            </ListItemButton>
            </ListItem>
        </NavLink>

        <NavLink to="/admin/quizzes">
            <ListItem disablePadding>
            <ListItemButton className='flex items-start justify-start gap-7'>
            <div className='flex items-start justify-normal'>
            <ListItemAvatar>
                <IoLogOutSharp size={25} />
            </ListItemAvatar>
            <ListItemText><div className='text-lg' onClick={logoutHandler}>Logout</div></ListItemText>
            </div>
            </ListItemButton>
            </ListItem>
        </NavLink>
        
      </Paper>
    </div>
  )
}
