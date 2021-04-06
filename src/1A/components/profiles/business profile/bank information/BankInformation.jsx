import React from 'react';

import { Card, Col } from 'react-bootstrap';

import './BankInformation.css';

import InfoField from '../../personal profile/info field/InfoField';

function BankInformation() {

  return (
  
    <Card as = {Col} md = "12"> 
        <Card.Body className = "">
                <Card.Title className = "bank__information">
                  
                  <p className = "bank__information__heading">Bank Information</p>

                  </Card.Title>
                  
                  <div className = "info__state">

                      <InfoField title = "Bank Institution Number" info = "123"/>
                      <InfoField title = "Bank Transit Number" info = "12345"/>
                      <InfoField title = "Bank Account Number" info = "1234567"/>
                      <InfoField title = "Account Type" info = "Chequing"/>
                      <InfoField title = "Account Currency" info = "CAD"/>

                  </div>

        </Card.Body>
    </Card>
  );
}

export default BankInformation;
