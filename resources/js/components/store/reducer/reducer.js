import ActionTypes from '../constant/constant';
import React, { Component } from 'react'



const INITIAL_STATE = {
   id : '' ,
   text : '' ,
   error : 'no'
}

export default (state = INITIAL_STATE , action) => {
    
      
     switch (action.type) {
      
        case ActionTypes.RECORDS:
            return ({
                data : action.payload ,
                error : action.error
            })
        case ActionTypes.ERROR:
            return (
                 state
            )
        default:
            return state;
    }

}