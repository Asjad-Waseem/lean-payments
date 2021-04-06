import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

// General App CSS Imports
import './App.css';

// Components Import 1A
import Dashboard1A from './1A/components/dashboard/Dashboard';
import PersonalProfile from './1A/components/profiles/personal profile/PersonalProfile';
import BusinessProfile from './1A/components/profiles/business profile/BusinessProfile';

// Components Import 1B
import Instructions from './1B/components/pocket view/Instructions';
import ExecutiveView from './1B/components/dashboard/ExecutiveView';
import NewPockets from './1B/components/kool company/NewPockets';
import SameCompany from './1B/components/move money/SameCompany';

// Font Testing Components

import abc from './1A/abc/abc';

function App() {

  return (

    <Provider store = { store }>

        <Router>

            <PersistGate persistor = { persistor }>

                <div className="App">

                    <Route exact path = "/pocket-view/instructions" component = {Instructions} />
                    <Route exact path = "/dashboard/executive-view" component = {ExecutiveView} />
                    <Route exact path = "/kool-company/newly-created-pockets" component = {NewPockets} />
                    <Route exact path = "/move-money/within-same-company" component = {SameCompany} />

                    <Route exact path = "/abc" component = {abc} />
                    <Route exact path = "/dashboard" component = {Dashboard1A} />
                    <Route exact path = "/personal-profile" component = {PersonalProfile} />
                    <Route exact path = "/business-profile" component = {BusinessProfile} />
    
                </div>

            </PersistGate>

        </Router>

    </Provider>

  );
}

export default App;
