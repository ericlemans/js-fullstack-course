import axios from 'axios';
import { FETCH_USER } from './types';

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
