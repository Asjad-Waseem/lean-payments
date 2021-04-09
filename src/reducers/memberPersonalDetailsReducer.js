import { SUBMIT_MEMBER_PERSONAL_DETAILS } from '../actions/Types';

const initialState = {

    memberPersonalDetailsResponse: [],

};

export default function submitMemberPersonalDetails(state = initialState, action) {

switch(action.type) {

   case SUBMIT_MEMBER_PERSONAL_DETAILS:

   return {

       ...state,
       memberPersonalDetailsResponse: [action.payload, ...state.memberPersonalDetailsResponse]

   };

   default:

   return state;

}
}