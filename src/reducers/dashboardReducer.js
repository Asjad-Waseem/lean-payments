import { SWITCH_ACTIVE_BUSINESS } from '../actions/Types';

const initialState = {

    activeBusinessDetails: [],

};

export default function switchActiveBusiness(state = initialState, action) {

switch(action.type) {

   case SWITCH_ACTIVE_BUSINESS:

   return {

       ...state,
       activeBusinessDetails: [action.payload, ...state.activeBusinessDetails]

   };

   default:

   return state;

}
}