import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { postData } from '../store/actions';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BaseButton from '../components/BaseButton';

type FormValues = {
    firstName: string;
    email: string;
    phone: number;

};

const Insert = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = data => {
        console.log('login Clicked');
        // console.log(data);

        dispatch(postData(data));

    }

    const { ApiResponse } = useSelector((data: any) => ({
        ApiResponse: data.crudReducer.apiRespose
    }));

    // console.log(ApiResponse);

    const backToHome = () => {
        navigate('/');
    }

    useEffect(() => {
        if(ApiResponse.id === 11 ){
            toast("Successfully Inserted!");
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
    },[ApiResponse]);


    return <div className='crudform'>

        <h2>Add User</h2>

        <div className='text-end'>
            <Button variant="contained" onClick={backToHome}>Back</Button>
        </div>
        <div style={{ padding: "5%", alignItems: 'center' }}>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)}>

                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField placeholder='First Name' {...register("firstName", { required: true })} />
                        {errors.firstName && <p className='errorP'>First name required</p>}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField type="email" placeholder='Email Address' {...register("email", { required: true })} />
                        {errors.email && <p className='errorP'>Email is required</p>}

                    </Grid>
                    <Grid item xs={12}>
                        <TextField placeholder='Phone' type="number" {...register("phone", { required: true })} />
                        {errors.phone && <p className='errorP'>Phone is required</p>}

                    </Grid>
                    <Grid item xs={12}>
                        {/* <Button variant="contained" type="submit">Submit</Button> */}
                        <BaseButton  text="Submit" variant="contained"   />
                        {/* <BaseButton  text="Submits" variant="contained"  color="error"  /> */}

                    </Grid>


                </Grid>


            </form>

        </div>
    </div>;
};

export default Insert;

