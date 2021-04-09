import { SUBMIT_MEMBER_IDENTIFICATION_DETAILS } from '../actions/Types';

const initialState = {

    memberIdentificationDetailsResponse: [],

};

export default function submitMemberIdentificationDetails(state = initialState, action) {

switch(action.type) {

   case SUBMIT_MEMBER_IDENTIFICATION_DETAILS:

   return {

       ...state,
       memberIdentificationDetailsResponse: [action.payload, ...state.memberIdentificationDetailsResponse]

   };

   default:

   return state;

}
}