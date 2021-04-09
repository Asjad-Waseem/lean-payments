import { ADD_MEMBER } from '../actions/Types';

const initialState = {

    addMemberResponse: [],

};

export default function addMember(state = initialState, action) {

switch(action.type) {

   case ADD_MEMBER:

   return {

       ...state,
       addMemberResponse: [action.payload, ...state.addMemberResponse]

   };

   default:

   return state;

}
}