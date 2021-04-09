import { SUBMIT_MEMBER_PERSONAL_ADDRESS_DETAILS } from '../actions/Types';

const initialState = {

    memberPersonalAddressDetailsResponse: [],

};

export default function submitMemberPersonalAddressDetails(state = initialState, action) {

switch(action.type) {

   case SUBMIT_MEMBER_PERSONAL_ADDRESS_DETAILS:

   return {

       ...state,
       memberPersonalAddressDetailsResponse: [action.payload, ...state.memberPersonalAddressDetailsResponse]

   };

   default:

   return state;

}
}