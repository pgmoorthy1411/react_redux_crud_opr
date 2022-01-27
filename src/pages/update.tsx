import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { editUserData, postData, updateData } from '../store/actions';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BaseButton from '../components/BaseButton';

type FormValues = {
    firstName: string;
    email: string;
    phone: number;

};

const Update = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let { id } = useParams();
    const [editId, seteditId] = useState(id);
    console.log(editId);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        // console.log(data);
        let datas = {
            ...data,
            id: editId
        }
        // console.log(datas);

        dispatch(updateData(datas));

    }

    const { ApiResponse } = useSelector((data: any) => ({
        ApiResponse: data.crudReducer.apiRespose
    }));

    // console.log(ApiResponse);


    useEffect(() => {
        // dispatch(editUserData(editId));

        if (ApiResponse.type != 'updated') {
            setValue("firstName", ApiResponse.username)
            setValue("email", ApiResponse.email)
            //   let phone =  ApiResponse.phone.replace(/\D/g,'');
            //   console.log(phone)
            // setValue("phone", ApiResponse.phone)
            // setValue("phone", ApiResponse.phone.replace(/\D/g,''))
        }

        if (ApiResponse.type == 'updated') {
            toast(ApiResponse.message);
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
    }, [ApiResponse])

    useEffect(() => {
            dispatch(editUserData(editId));
      },[editId]);

    const backToHome = () => {
        navigate('/');
    }


    return <div className='crudform'>

        <h2>Update User</h2>

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
                        {/* <Button variant="contained" type="submit">Update</Button> */}
                        <BaseButton text="Update" variant="contained" />

                    </Grid>


                </Grid>


            </form>

        </div>
    </div>;
};

export default Update;

