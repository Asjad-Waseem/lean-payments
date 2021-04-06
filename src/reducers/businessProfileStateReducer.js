import { BASIC_INFORMATION_STATE,
         BUSINESS_ADDRESS_STATE,
         BANK_INFORMATION_STATE,
         INCORPORATION_DETAILS_STATE,
         EXPECTED_USE_STATE
       } from '../actions/Types';

const initialState = {

    basic_information: "#000000",
    business_address: "rgba(106, 112, 126, 0.5)",
    bank_information: "rgba(106, 112, 126, 0.5)",
    incorporation_details: "rgba(106, 112, 126, 0.5)",
    expected_use_details: "rgba(106, 112, 126, 0.5)",
    active_step: "1"

};

export default function onBusinessProfileStepChange(state = initialState, action){

switch(action.type) {

    case BASIC_INFORMATION_STATE:

    return{

      ...state,
      basic_information: "#000000",
      business_address: "rgba(106, 112, 126, 0.5)",
      bank_information: "rgba(106, 112, 126, 0.5)",
      incorporation_details: "rgba(106, 112, 126, 0.5)",
      expected_use_details: "rgba(106, 112, 126, 0.5)",
      active_step: "1"

    };

    case BUSINESS_ADDRESS_STATE:

    return{

      ...state,
      business_address: "#000000",
      basic_information: "rgba(106, 112, 126, 0.5)",
      bank_information: "rgba(106, 112, 126, 0.5)",
      incorporation_details: "rgba(106, 112, 126, 0.5)",
      expected_use_details: "rgba(106, 112, 126, 0.5)",
      active_step: "2"
   
    };

    case BANK_INFORMATION_STATE:

    return{

      ...state,
      bank_information: "#000000",
      basic_information: "rgba(106, 112, 126, 0.5)",
      business_address: "rgba(106, 112, 126, 0.5)",
      incorporation_details: "rgba(106, 112, 126, 0.5)",
      expected_use_details: "rgba(106, 112, 126, 0.5)",
      active_step: "3"

    };

    case INCORPORATION_DETAILS_STATE:

    return{
    
      ...state,
      incorporation_details: "#000000",
      basic_information: "rgba(106, 112, 126, 0.5)",
      business_address: "rgba(106, 112, 126, 0.5)",
      bank_information: "rgba(106, 112, 126, 0.5)",
      expected_use_details: "rgba(106, 112, 126, 0.5)",
      active_step: "4"
    
    };

    case EXPECTED_USE_STATE:

    return{
    
      ...state,
      expected_use_details: "#000000",
      basic_information: "rgba(106, 112, 126, 0.5)",
      business_address: "rgba(106, 112, 126, 0.5)",
      bank_information: "rgba(106, 112, 126, 0.5)",
      incorporation_details: "rgba(106, 112, 126, 0.5)",
      active_step: "5"
    
    };

default:

return state;

}

}