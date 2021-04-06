import { SUBMIT_INCORPORATION_DETAILS } from '../actions/Types';

const initialState = {

    incorporationDetailsResponse: [],

};

export default function submitIncorporationDetails(state = initialState, action) {

switch(action.type) {

   case SUBMIT_INCORPORATION_DETAILS:

   return {

       ...state,
       incorporationDetailsResponse: [action.payload, ...state.incorporationDetailsResponse]

   };

   default:

   return state;

}
}