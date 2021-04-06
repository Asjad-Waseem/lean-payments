import { SELECT_DASHBOARD, 
         SELECT_BUSINESSES, 
         SELECT_FINANCIAL_POSITION,
         SELECT_CREATE_A_BUSINESS, 
         SELECT_KOOL_COMPANY,  
         SELECT_PAYEES,
         SELECT_GLOBAL_PAYEES,
         SELECT_MEMBERS,
         SELECT_POCKETS,
         SELECT_OPEX,
         SELECT_TAX,
         SELECT_OWNERS_COMP
       } from '../actions/Types';

  const initialState = {

    dashboard: "#ffffff",
    businesses: "#b7bec4",
    financial_position: "#b7bec4",
    create_business: "#b7bec4",
    kool_company: "#b7bec4",
    payees: "#b7bec4",
    global_payees: "#b7bec4",
    members: "#b7bec4",
    pockets: "#b7bec4",
    opex: "#b7bec4",
    tax: "#b7bec4",
    owners_comp: "#b7bec4"

  };

  export default function onSiderLinkColorChange(state = initialState, action){

    switch(action.type) {

        case SELECT_DASHBOARD:

        return{

            ...state,
            dashboard: "#ffffff",
            businesses: "#b7bec4",
            financial_position: "#b7bec4",
            create_business: "#b7bec4",
            kool_company: "#b7bec4",
            payees: "#b7bec4",
            global_payees: "#b7bec4",
            members: "#b7bec4",
            pockets: "#b7bec4",
            opex: "#b7bec4",
            tax: "#b7bec4",
            owners_comp: "#b7bec4"

        };

        case SELECT_BUSINESSES:

            return{
    
                ...state,
                businesses: "#4696de",
                dashboard: "#b7bec4",
                financial_position: "#b7bec4",
                create_business: "#b7bec4",
                kool_company: "#b7bec4",
                payees: "#b7bec4",
                global_payees: "#b7bec4",
                members: "#b7bec4",
                pockets: "#b7bec4",
                opex: "#b7bec4",
                tax: "#b7bec4",
                owners_comp: "#b7bec4"
    
        };

        case SELECT_FINANCIAL_POSITION:

            return{
    
                ...state,
                financial_position: "#ffffff",
                dashboard: "#b7bec4",
                businesses: "#b7bec4",
                create_business: "#b7bec4",
                kool_company: "#b7bec4",
                payees: "#b7bec4",
                global_payees: "#b7bec4",
                members: "#b7bec4",
                pockets: "#b7bec4",
                opex: "#b7bec4",
                tax: "#b7bec4",
                owners_comp: "#b7bec4"
    
        };

        case SELECT_CREATE_A_BUSINESS:

            return{
    
                ...state,
                create_business: "#4696de",
                kool_company: "#b7bec4",
                payees: "#b7bec4",
                global_payees: "#b7bec4",
                members: "#b7bec4",
                pockets: "#b7bec4",
                opex: "#b7bec4",
                tax: "#b7bec4",
                owners_comp: "#b7bec4"
    
        };

        case SELECT_KOOL_COMPANY:

            return{
    
                ...state,
                kool_company: "#4696de",
                create_business: "#b7bec4",
    
        };

        case SELECT_PAYEES:

            return{
    
                ...state,
                payees: "#ffffff",
                global_payees: "#b7bec4",
                members: "#b7bec4",
                pockets: "#b7bec4",
                opex: "#b7bec4",
                tax: "#b7bec4",
                owners_comp: "#b7bec4"
    
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
                opex: "#b7bec4",
                tax: "#b7bec4",
                owners_comp: "#b7bec4"
    
        };

        case SELECT_MEMBERS:

            return{
    
                ...state,
                members: "#ffffff",
                financial_position: "#b7bec4",
                payees: "#b7bec4",
                global_payees: "#b7bec4",
                pockets: "#b7bec4",
                opex: "#b7bec4",
                tax: "#b7bec4",
                owners_comp: "#b7bec4"
    
        };

        case SELECT_POCKETS:

            return{
    
                ...state,
                pockets: "#ffffff",
                payees: "#b7bec4",
                global_payees: "#b7bec4",
                members: "#b7bec4",
    
        };

        case SELECT_OPEX:

            return{
    
                ...state,
                opex: "#4696de",
                tax: "#b7bec4",
                owners_comp: "#b7bec4",
                payees: "#b7bec4",
                global_payees: "#b7bec4",
                members: "#b7bec4",
    
        };

        
        case SELECT_TAX:

            return{
    
                ...state,
                tax: "#4696de",
                opex: "#b7bec4",
                owners_comp: "#b7bec4",
                payees: "#b7bec4",
                global_payees: "#b7bec4",
                members: "#b7bec4",
    
        };

        case SELECT_OWNERS_COMP:

            return{
    
                ...state,
                owners_comp: "#4696de",
                opex: "#b7bec4",
                tax: "#b7bec4",
                payees: "#b7bec4",
                global_payees: "#b7bec4",
                members: "#b7bec4",
    
        };

        default:

        return state;
        
    }

}