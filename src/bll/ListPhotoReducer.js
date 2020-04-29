import {api} from "../dall/api";

const GET_PHOTO = 'listPhotoReducer/GET_PHOTO';
const LOADING_STATUS = 'listPhotoReducer/LOADING_STATUS';
const ERROR_MESSAGE = 'listPhotoReducer/ERROR_MESSAGE';


const initialState = {
    photo: [],
    loading: false,
    error:''
};
export const ListPhotoReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case  GET_PHOTO:
            return {
                ...state,
                photo: action.photo
            };
        case LOADING_STATUS: {
            return {
                ...state,
                loading: action.loading,
            }

        }
        case ERROR_MESSAGE : {
          return {
              ...state,
              error: action.error,
          }
        }
        default:
            return state;
    }
};


const getPhotoAC = (photo) => ({type: GET_PHOTO, photo});

 const loadAC = (loading)=>({type: LOADING_STATUS, loading})

 const errorAlertSuccess=(error)=>({type : ERROR_MESSAGE, error})


export const getProhotTC = () => async (dispatch) => {

    try {
        dispatch(loadAC(true))
        let res = await api.getPhotoALL()
        dispatch(getPhotoAC(res))
        dispatch(loadAC(false))
    } catch (error) {
        dispatch(loadAC(false))
        dispatch(errorAlertSuccess(error))


    }
}
