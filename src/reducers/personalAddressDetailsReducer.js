import { SUBMIT_PERSONAL_ADDRESS_DETAILS } from '../actions/Types';

const initialState = {

    personalAddressDetailsResponse: [],

};

export default function submitPersonalAddressDetails(state = initialState, action) {

switch(action.type) {

   case SUBMIT_PERSONAL_ADDRESS_DETAILS:

   return {

       ...state,
       personalAddressDetailsResponse: [action.payload, ...state.personalAddressDetailsResponse]

   };

   default:

   return state;

}
}