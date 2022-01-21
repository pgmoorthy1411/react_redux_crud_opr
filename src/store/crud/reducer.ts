import { CrudTypes } from "./actionTypes"
const initialState = {
    apiRespose: [],
    loading: false,
    editData: [],
    data: []
}
const crudReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case CrudTypes.Crud_GET:
            state.apiRespose = [];
            state = {
                ...state,
                loading: true
            }
            break;
        case CrudTypes.Crud_POST:
            state = {
                ...state,
                loading: true
            }
            break;
        case CrudTypes.Crud_EDIT:
            state.editData = [];
            state.apiRespose = [];
            
            const data = action.payload

            state = {
                ...state,
                loading: true,
                editData: data,

            }
            break;
        case CrudTypes.Crud_UPDATE:
            state = {
                ...state,
                loading: true
            }
            break;
        case CrudTypes.Crud_DELETE:
            state = {
                ...state,
                loading: true
            }
            break;
        case CrudTypes.Crud_SUCCESS:
            const responses = action.payload
            state = {
                ...state,
                data: responses,
                loading: false

            }
            break;
        case CrudTypes.CrudApi_SUCCESS:
            const successResponse = action.payload
            state = {
                ...state,
                apiRespose: successResponse,
                loading: false

            }
            break;

        default:
            state = {
                ...state
            }
    }
    return state

}

export default crudReducer;