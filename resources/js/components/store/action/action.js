
import ActionTypes from '../constant/constant';
import axios from 'axios'


let uri = '/Todo';

export function LoadTodo() {
   
    return (dispatch) => {

          return axios.get(uri)
            .then(
              (response) => 
              { dispatch( getTodoData(response.data) ) } 
            );
    }
}


export function getTodoData(items , error='false') {
    return dispatch => {
        dispatch({ type: ActionTypes.RECORDS, payload: items , error : error })
    }
}

export function ResponseError(items , error='false') {
    return (dispatch) => {

        return axios.get(uri)
         .then(
           (response) => 
           {  dispatch( getTodoData(response.data , 'true') ) } 
         );
  }
}




export function AddTodo(item) {

    return dispatch => {

           axios.post(uri,item)
            .then(
              (response) => {  dispatch( LoadTodo() ) } ,
              (error) => {   dispatch( ResponseError('true') )  }  
            );
     }
}

export function DeleteTodo(id) {
    return dispatch => {

        return axios.delete(uri+'/'+id)
          .then(
          (res) => { dispatch( LoadTodo() ) } ,
          (error) => {   dispatch( ResponseError('true') )  }  
          );
          
    }
}
