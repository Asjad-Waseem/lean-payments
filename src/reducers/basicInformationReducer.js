import { SUBMIT_BASIC_INFORMATION } from '../actions/Types';

const initialState = {

    basicInformationResponse: [],

};

export default function submitBasicInformation(state = initialState, action) {

switch(action.type) {

   case SUBMIT_BASIC_INFORMATION:

   return {

       ...state,
       basicInformationResponse: [action.payload, ...state.basicInformationResponse]

   };

   default:

   return state;

}
}