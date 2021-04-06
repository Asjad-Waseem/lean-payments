import { COLLAPSED_STATE } from '../actions/Types';

  const initialState = {

    collapsed: true,
   
  };

  export default function onCollapse(state = initialState, action){

    switch(action.type) {

        case COLLAPSED_STATE:

        return{

            ...state,
            collapsed: !state.collapsed,

        };

        default:

        return state;
        
    }

}