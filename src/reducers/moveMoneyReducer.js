import { SUBMIT_MOVING_MONEY_DETAILS } from '../actions/Types';

const initialState = {

    movingMoneyDetailsResponse: [],

};

export default function submitMovingMoneysDetails(state = initialState, action) {

switch(action.type) {

   case SUBMIT_MOVING_MONEY_DETAILS:

   return {

       ...state,
       movingMoneyDetailsResponse: [action.payload, ...state.movingMoneyDetailsResponse]

   };

   default:

   return state;

}
}