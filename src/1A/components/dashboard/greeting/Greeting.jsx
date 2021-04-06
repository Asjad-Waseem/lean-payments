import React from 'react';
import { Col, Card } from 'react-bootstrap';

import './Greeting.css';

import ProfileButton from '../common/button/ProfileButton';

function Greeting(props) {

    const createNewBusinessProfile = () => {

        alert("New Business Profile");

    }

  return (

    <Card as = {Col} md = "12"> 
        <Card.Body className = "space__between__flex__dashboard">
            <div className = "column__flex mt-2">
                <Card.Title className = "greeting__name">Hi {props.name}</Card.Title>
                    <Card.Subtitle className="greeting__statement mb-2 text-muted">Welcome to your international payments control center</Card.Subtitle>
            </div>
            <ProfileButton text = "New Business Profile" onClick = {createNewBusinessProfile}/>
        </Card.Body>
    </Card>

  );
}

export default Greeting;
