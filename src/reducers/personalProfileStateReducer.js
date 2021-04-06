import { PERSONAL_DETAILS_STATE,
         PERSONAL_ADDRESS_STATE,
         IDENTIFICATION_STATE
       } from '../actions/Types';

const initialState = {

    personal_details: "#000000",
    personal_address: "rgba(106, 112, 126, 0.5)",
    identification: "rgba(106, 112, 126, 0.5)",
    active_step: "1"

};

export default function onPersonalProfileStepChange(state = initialState, action){

switch(action.type) {

   case PERSONAL_DETAILS_STATE:

   return{

       ...state,
      personal_details: "#000000",
      personal_address: "rgba(106, 112, 126, 0.5)",
      identification: "rgba(106, 112, 126, 0.5)",
      active_step: "1"

   };

   case PERSONAL_ADDRESS_STATE:

       return{

           ...state,
          personal_address: "#000000",
          personal_details: "rgba(106, 112, 126, 0.5)",
          identification: "rgba(106, 112, 126, 0.5)",
          active_step: "2"
   };

   case IDENTIFICATION_STATE:

       return{

           ...state,
          identification: "#000000",
          personal_details: "rgba(106, 112, 126, 0.5)",
          personal_address: "rgba(106, 112, 126, 0.5)",
          active_step: "3"

   };

   default:

   return state;
   
}

}