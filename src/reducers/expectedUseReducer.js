import { SUBMIT_EXPECTED_USE_DETAILS } from '../actions/Types';

const initialState = {

    expectedUseDetailsResponse: [],

};

export default function submitExpectedUseDetails(state = initialState, action) {

switch(action.type) {

   case SUBMIT_EXPECTED_USE_DETAILS:

   return {

       ...state,
       expectedUseDetailsResponse: [action.payload, ...state.expectedUseDetailsResponse]

   };

   default:

   return state;

}
}