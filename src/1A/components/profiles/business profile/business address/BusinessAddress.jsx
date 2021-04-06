import React from 'react';

import { Card, Col } from 'react-bootstrap';

import './BusinessAddress.css';

import InfoField from '../../personal profile/info field/InfoField';

function BusinessAddress() {

  return (
  
    <Card as = {Col} md = "12"> 
        <Card.Body className = "">
                <Card.Title className = "business__address">
                  
                  <p className = "business__address__heading">Business Address</p>

                  </Card.Title>
                  
                  <div className = "info__state">

                      <InfoField title = "Street Address" info = "70 Kool Avenue"/>
                      <InfoField title = "City" info = "Toronto"/>
                      <InfoField title = "Province" info = "Bhatia"/>
                      <InfoField title = "Postal Code" info = "+1 905 923 3949"/>
                      <InfoField title = "Country" info = "Canada"/>

                  </div>

        </Card.Body>
    </Card>
  );
}

export default BusinessAddress;
