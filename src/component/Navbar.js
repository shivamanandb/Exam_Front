import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { MdOutlineMenuBook } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../services/operations/authAPI';
import { capitalize } from '@mui/material';


export const Navbar = () => {

  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const loginHandler = () => {
    navigate("/login");
  }

  const signupHandler = () => {
    navigate("/signup");
  }

  const logoutHandler = () => {
    dispatch(logout(navigate));
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'linear-gradient(to left, #000080, #FFD700)' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MdOutlineMenuBook />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
              Exam Portal
            </Link>
          </Typography>

          {
            token === null && (
              <div>
                <Button onClick={loginHandler} color="inherit">Login</Button>
                <Button onClick={signupHandler} color="inherit">Register</Button>
              </div>
            )
          }
          {
            token !== null && user != null && (
              <div className='flex flex-row gap-3 items-center justify-center'>
                <div style={{ color: '#fff' }}> {capitalize(user.firstName)} {capitalize(user.lastName)} </div>
                <div>
                  <div className='cursor-pointer' onClick={logoutHandler} color="inherit" style={{ color: '#fff' }}>Logout</div>
                </div>
              </div>
            )
          }

        </Toolbar>
      </AppBar>
    </Box>
  );
}

