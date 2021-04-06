import { SUBMIT_IDENTIFICATION_DETAILS } from '../actions/Types';

const initialState = {

    identificationDetailsResponse: [],

};

export default function submitIdentificationDetails(state = initialState, action) {

switch(action.type) {

   case SUBMIT_IDENTIFICATION_DETAILS:

   return {

       ...state,
       identificationDetailsResponse: [action.payload, ...state.identificationDetailsResponse]

   };

   default:

   return state;

}
}