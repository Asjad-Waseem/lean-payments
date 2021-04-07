import { SELECT_DASHBOARD, 
         SELECT_FINANCIAL_POSITION,
         SELECT_PAYEES,
         SELECT_GLOBAL_PAYEES,
         SELECT_MEMBERS,
         SELECT_POCKETS,
       } from '../actions/Types';

  const initialState = {

    dashboard: "#ffffff",
    financial_position: "#b7bec4",
    payees: "#b7bec4",
    global_payees: "#b7bec4",
    members: "#b7bec4",
    pockets: "#b7bec4",

  };

  export default function onSiderLinkColorChange(state = initialState, action){

    switch(action.type) {

        case SELECT_DASHBOARD:

        return{

            ...state,
            dashboard: "#ffffff",
            financial_position: "#b7bec4",
            payees: "#b7bec4",
            global_payees: "#b7bec4",
            members: "#b7bec4",
            pockets: "#b7bec4",

        };

        case SELECT_FINANCIAL_POSITION:

            return{
    
                ...state,
                financial_position: "#ffffff",
                dashboard: "#b7bec4",
                payees: "#b7bec4",
                global_payees: "#b7bec4",
                members: "#b7bec4",
                pockets: "#b7bec4",
    
        };

        case SELECT_PAYEES:

            return{
    
                ...state,
                payees: "#ffffff",
                dashboard: "#b7bec4",
                financial_position: "#b7bec4",
                global_payees: "#b7bec4",
                members: "#b7bec4",
                pockets: "#b7bec4",
    
        };

        case SELECT_GLOBAL_PAYEES:

            return{
    
                ...state,
                global_payees: "#ffffff",
                dashboard: "#b7bec4",
                financial_position: "#b7bec4",
                payees: "#b7bec4",
                members: "#b7bec4",
                pockets: "#b7bec4",
    
        };

        case SELECT_MEMBERS:

            return{
    
                ...state,
                members: "#ffffff",
                dashboard: "#b7bec4",
                financial_position: "#b7bec4",
                payees: "#b7bec4",
                global_payees: "#b7bec4",
                pockets: "#b7bec4",
    
        };

        case SELECT_POCKETS:

            return{
    
                ...state,
                pockets: "#ffffff",
                dashboard: "#b7bec4",
                financial_position: "#b7bec4",
                payees: "#b7bec4",
                global_payees: "#b7bec4",
                members: "#b7bec4",
    
        };
        
        default:

        return state;
        
    }

}