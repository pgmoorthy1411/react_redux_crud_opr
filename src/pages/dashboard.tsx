import React, { useEffect } from 'react';
import { getTodoData, editUserData, deleteUserData } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import './dashboard.css';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BaseButton from '../components/BaseButton';
const Dashboard = () => {

  const navigate = useNavigate();
  const { loading } = useSelector((data: any) => ({

    loading: data.crudReducer.loading
  }));

  const { data } = useSelector((data: any) => ({

    data: data.crudReducer.data
  }));

  const { ApiResponse } = useSelector((data: any) => ({

    ApiResponse: data.crudReducer.apiRespose

  }));

  // console.log(ApiResponse);


  // console.log(data);
  // console.log(loading);


  const dispatch = useDispatch();

  const addUser = () => {
    navigate('adduser');
  }

  useEffect(() => {

    dispatch(getTodoData());

  }, [])


  if (ApiResponse.status === "success" && ApiResponse.type === "deleted") {

    toast("Successfully Deleted!");

    dispatch(getTodoData());


  }

  const columns: any = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
      right: false

    },
    {
      name: "Name",
      selector: "username",
      sortable: true,
      right: false

    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      right: true
    },
    {
      name: "Phone",
      selector: "phone",
      sortable: true,
      right: true
    },
    {
      dataField: "edit",
      name: "Action",
      button: true,
      cell: (row: any) => (
        <>
          < BorderColorIcon
            onClick={() => editData(row.id)}
            data-testid={'edit'+row.id}
            style={{ fontSize: 20, marginRight: '5px' }}
            color="primary"
          />
          < DeleteForeverIcon
            onClick={() => deleteData(row.id)}
            style={{ fontSize: 20 }}
            color="warning"
          />
        </>

      ),

    }
  ];


  const deleteData = (values: any) => {
    // console.log(values);
    // setDelId(values)
    dispatch(deleteUserData(values))
    // setswaltDisplay(true);

  };

  const editData = (value: any) => {
    // console.log(value)
    dispatch(editUserData(value));
    navigate(`updateUser/${value}`)

  }

  return <div className='dashboard'>

    <div className='tbl' >
      <h2>Dashboard</h2>
      
      {/* <div style={{ padding: "15px" }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        ApiResponse.map((todo: any, index: number) => (
          <div style={{ marginBottom: "10px" }} key={todo.id}>
            {++index}. {todo.title}
          </div>
        ))
      )}
    </div> */}

      <ToastContainer />

      <div className='text-end'>
        <Button variant="contained" onClick={addUser} data-testid="btn-1" id="goToAddUser">Add User</Button>
      </div>
      <div style={{ padding: "15px" }}>
        <DataTable
          columns={columns}
          data={data}
          pagination
          selectableRows
        />
      </div>
    </div>
  </div>;
};

export default Dashboard;
