import { CrudTypes } from "./actionTypes";

export  const getTodoData = () => {

    return {
        type: CrudTypes.Crud_GET,
    }
    
}
export  const postData = (data: any) => {

    return {
        type: CrudTypes.Crud_POST,
        payload:  data 

    }
    
}
export  const editUserData = (data: any) => {

    return {
        type: CrudTypes.Crud_EDIT,
        payload:  data 

    }
    
}
export  const updateData = (data: any) => {

    return {
        type: CrudTypes.Crud_UPDATE,
        payload:  data 

    }
}
export  const deleteUserData = (data: any) => {

    return {
        type: CrudTypes.Crud_DELETE,
        payload:  data 

    }
}
export  const ApiResponse = ( values: any) => {

    return {
        type: CrudTypes.Crud_SUCCESS,
        payload:  values 
    }
    
}
export  const successApiResponse = ( values: any) => {

    return {
        type: CrudTypes.CrudApi_SUCCESS,
        payload:  values 
    }
    
}