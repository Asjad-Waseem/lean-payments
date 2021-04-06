import { SUBMIT_PERSONAL_DETAILS } from '../actions/Types';

const initialState = {

    personalDetailsResponse: [],

};

export default function submitPersonalDetails(state = initialState, action) {

switch(action.type) {

   case SUBMIT_PERSONAL_DETAILS:

   return {

       ...state,
       personalDetailsResponse: [action.payload, ...state.personalDetailsResponse]

   };

   default:

   return state;

}
}