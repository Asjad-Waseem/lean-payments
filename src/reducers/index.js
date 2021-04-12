import { combineReducers } from 'redux';

// Generic Imports
import collapsedReducer from './collapsedReducer';
import siderLinkColorsReducer from './siderLinkColors';

// 1A Imports
import dashboardReducer from './dashboardReducer';
import personalProfileStateReducer from './personalProfileStateReducer';
import businessProfileStateReducer from './businessProfileStateReducer';
import personalProfileDataReducer from './personalProfileDataReducer';
import personalAddressDetailsReducer from './personalAddressDetailsReducer';
import identificationDetailsReducer from './identificationDetailsReducer';
import basicInformationReducer from './basicInformationReducer';
import incorporationDetailsReducer from './incorporationDetailsReducer';
import expectedUseReducer from './expectedUseReducer';
import addMemberReducer from './addMemberReducer';
import memberPersonalDetailsReducer from './memberPersonalDetailsReducer';
import memberPersonalAddressDetailsReducer from './memberPersonalAddressDetailsReducer';
import memberIdentificationDetailsReducer from './memberIdentificationDetailsReducer';
import instructionsReducer from './instructionsReducer';

// 1B Imports
import moveMoneyReducer from './moveMoneyReducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {

    key: 'root',
    storage,
    whitelist: ['siderLinks', 'personalProfileState', 'businessProfileState', 'dashboard', 'instructions']

}

const rootReducer = combineReducers ({

    collapsed: collapsedReducer,
    siderLinks: siderLinkColorsReducer,
    dashboard: dashboardReducer,
    personalProfileState: personalProfileStateReducer,
    personalProfileData: personalProfileDataReducer,
    peronslAddressDetails: personalAddressDetailsReducer,
    identificationDetails: identificationDetailsReducer,
    businessProfileState: businessProfileStateReducer,
    basicInformation: basicInformationReducer,
    incorporationDetails: incorporationDetailsReducer,
    expectedUseDetails: expectedUseReducer,
    addMember: addMemberReducer,
    memberPersonalDetails: memberPersonalDetailsReducer,
    memberPersonalAddressDetails: memberPersonalAddressDetailsReducer,
    memberIdentificationDetails: memberIdentificationDetailsReducer,
    moveMoney: moveMoneyReducer,
    instructions: instructionsReducer
   
});

export default persistReducer(persistConfig, rootReducer);

