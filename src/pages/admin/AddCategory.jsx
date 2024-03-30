import React, { useEffect } from 'react';
import { Button, Card, ListItemText, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { addCategory } from '../../services/operations/categoryAPI';
import { useSelector } from 'react-redux';

export const AddCategory = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
  const { token } = useSelector((state) => state.auth);

  const formSubmit = (data) => {
    addCategory(data, token);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        title: "",
        description: ""
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="">
      <Card className='flex flex-col gap-4'>
        <Typography variant="subtitle1" className='p-4' component="div" style={{ fontWeight: 'bold' }}>
          <div className='text-2xl'> Add New Category</div>
        </Typography>

        <ListItemText className='p-7'>
          <div>
            <form className='flex flex-col gap-6 lg:items-center lg:justify-center' onSubmit={handleSubmit(formSubmit)}>
              <TextField className='w-full md:w-6/12 mx-auto'
                size='small'
                id="outlined-basic"
                label="Title"
                name='title'
                variant="outlined"
                color='secondary'
                placeholder='Enter Title here'
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="-mt-3 text-[12px] text-yellow-900">
                  Please enter the Title.
                </span>
              )}
              <TextField rows={10}
                className='w-full md:w-6/12'
                size='small'
                multiline
                id="outlined-basic"
                label="Description"
                name='description'
                color='secondary'
                variant="outlined"
                placeholder='Enter Description here'
                {...register("description", { required: true })}
              />
              {errors.description && (
                <span className="-mt-3 text-[12px] text-yellow-900">
                  Please enter the Description.
                </span>
              )}

              <div className='flex items-center justify-center md:justify-start gap-4 mt-5'>
                <Button type='submit' variant="contained" color="success">
                  ADD
                </Button>
              </div>
            </form>
          </div>
        </ListItemText>

      </Card>
    </div>
  );
};
