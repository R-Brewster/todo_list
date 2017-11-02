import types from '../actions/types';
import todoData from '../helpers/dummy_data';

export function getAll(){

    //Make a network  request here

    return{
        type: types.GET_ALL,
        payload: todoData
    }
}