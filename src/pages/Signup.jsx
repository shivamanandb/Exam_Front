import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { Button, Paper, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { apiConnector } from '../services/apiConnector'
import { endpoints } from '../services/api'
import toast from 'react-hot-toast'

export const Signup = () => {
    
    const {register, handleSubmit, reset, formState:{errors, isSubmitSuccessful}} = useForm();
    const [loading, setLoading] = useState(false); // Fixed the typo in useState
    useEffect(() => {
        if (isSubmitSuccessful) {
          reset({
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
          })
        }
      }, [reset, isSubmitSuccessful])

    const formSubmit = async (data) => {
        // setting signup data to state
        const toastId = toast.loading("Loading...");
        try {
            const res = await apiConnector("POST", endpoints.SIGNUP_API, data)
            console.log("Response:", res)
            toast.success("Registered Successfully")
            toast.dismiss(toastId)
        } catch (error) {
            toast.error("Something went wrong") 
            toast.dismiss(toastId)
        }
    }

    return (
        <div className="flex items-center justify-center h-full mx-auto lg:w-4/5">
            <Paper variant="elevation" elevation={24} className='flex flex-col items-center w-4/5 p-5 mt-5 md:w-2/5'>
                <div className='flex flex-col items-center'>
                    <img src={logo} height={120} width={120} alt='logo' />
                    <h1 className='text-2xl'>Register Here !!</h1>
                </div>
                <div className="w-full">
                    <form className='flex flex-col gap-3' onSubmit={handleSubmit(formSubmit)}>
                        {/* Username */}
                        <TextField
                            type='text'
                            name='username'
                            label="Username*"
                            color='secondary'
                            variant="outlined"
                            className="rounded-md"
                            placeholder='Enter Username'
                            size="small" 
                            margin="dense" 
                            {...register("username", {required: true})}
                        />
                        {errors.username && (
                            <span className="text-sm text-yellow-900">
                                Please enter your username.
                            </span>
                        )}
                        {/* Password */}
                        <TextField
                            type='password'
                            name='password'
                            label="Password*"
                            color='secondary'
                            variant="outlined"
                            className="rounded-md"
                            placeholder='Enter Password'
                            size="small"  
                            margin="dense"
                            {...register("password", {required: true})}
                        />
                        {errors.password && (
                            <span className="text-sm text-yellow-900">
                                Please enter your password.
                            </span>
                        )}
                        {/* First name  */}
                        <TextField
                            type='text'
                            name='firstName'
                            label="First Name*"
                            color='secondary'
                            variant="outlined"
                            className="rounded-md"
                            placeholder='Enter First Name'
                            size="small"  
                            margin="dense"
                            {...register("firstName", {required: true})}
                        />
                        {errors.firstName && (
                            <span className="text-sm text-yellow-900">
                                Please enter your First Name.
                            </span>
                        )}
                        {/* Last name */}
                        <TextField
                            type='text'
                            name='lastName'
                            label="Last Name*"
                            color='secondary'
                            variant="outlined"
                            className="rounded-md"
                            placeholder='Enter Last Name'
                            size="small"  
                            margin="dense"
                            {...register("lastName", {required: true})}
                        />
                        {errors.lastName && (
                            <span className="text-sm text-yellow-900">
                                Please enter your Last Name.
                            </span>
                        )}
                        {/* Email */}
                        <TextField
                            type='email'
                            name='email'
                            label="Email ID*"
                            color='secondary'
                            variant="outlined"
                            className="rounded-md"
                            placeholder='Enter Email ID'
                            size="small" 
                            margin="dense" 
                            {...register("email", {required: true})}
                        />
                        {errors.email && (
                            <span className="text-sm text-yellow-900">
                                Please enter your email ID.
                            </span>
                        )}
                        {/* Phone number */}
                        <TextField
                            type='text'
                            name='phone'
                            label="Phone Number*"
                            color='secondary'
                            variant="outlined"
                            className="rounded-md"
                            placeholder='Enter Phone Number'
                            size="small" 
                            margin="dense"
                            {...register("phone", {required: true})}
                        />
                        {errors.phone && (
                            <span className="text-sm text-yellow-900">
                                Please enter your Phone number.
                            </span>
                        )}
                        <div className='flex items-center justify-center gap-10 mt-5'>
                            <Button type='submit' variant="contained" color="success">
                                Register
                            </Button>
                            <Button type='reset' variant="contained" color="error">
                                Clear
                            </Button>
                        </div>
                    </form>
                </div>
            </Paper>
        </div>
    )
}

export default Signup;
