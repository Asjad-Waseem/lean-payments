import { combineReducers } from 'redux';
import collapsedReducer from './collapsedReducer';
import siderLinkColorsReducer from './siderLinkColors';
import dashboardReducer from './dashboardReducer';
import personalProfileStateReducer from './personalProfileStateReducer';
import businessProfileStateReducer from './businessProfileStateReducer';
import personalProfileDataReducer from './personalProfileDataReducer';
import personalAddressDetailsReducer from './personalAddressDetailsReducer';
import identificationDetailsReducer from './identificationDetailsReducer';
import basicInformationReducer from './basicInformationReducer';
import incorporationDetailsReducer from './incorporationDetailsReducer';
import expectedUseReducer from './expectedUseReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {

    key: 'root',
    storage,
    whitelist: ['siderLinks', 'personalProfileState', 'businessProfileState', 'dashboard']

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
    expectedUseDetails: expectedUseReducer
   
});

export default persistReducer(persistConfig, rootReducer);

