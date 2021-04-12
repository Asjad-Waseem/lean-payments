import { SELECT_INSTRUCTIONS_OVERVIEW,
         SELECT_TRANSACTIONS_OVERVIEW
       } from '../actions/Types';

const initialState = {

    transactions_overview: "#000000",
    instructions_overview: "#b2bac1",

};

export default function onOverviewStateChange(state = initialState, action){

switch(action.type) {

   case SELECT_TRANSACTIONS_OVERVIEW:

   return{

       ...state,
       transactions_overview: "#000000",
       instructions_overview: "#b2bac1"

   };

   case SELECT_INSTRUCTIONS_OVERVIEW:

       return{

           ...state,
          transactions_overview: "#b2bac1",
          instructions_overview: "#000000"

   };
   
   default:

   return state;
   
}

}