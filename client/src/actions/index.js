import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_SURVEYS } from "./types";

// THE ORIGINAL SYNTAX FOR THE ACTION GET USER
// export const fetchUser = () => {
//     return async function (dispatch) {
//         const res = await axios.get('/api/current_user');
//         dispatch({ type: FETCH_USER, payload: res });
//     }
// };


//THE REFACTORED VERSION OF THE GET USER DISPATCH FUNCTION (ONLY THE RES.DATA from the object)
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data }) //we assume that we get the exact user model so we can use the same type
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch ({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');
    
    dispatch({ type: FETCH_SURVEYS, payload: res.data })
}