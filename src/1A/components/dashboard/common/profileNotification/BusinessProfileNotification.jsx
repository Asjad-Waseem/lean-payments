import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Row, Col, Card } from 'react-bootstrap';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import './ProfileNotification.css';

import ProfileButton from '../button/ProfileButton';

function BusinessProfileNotification(props) {

    const history = useHistory();

    const [businessProfile, setBusinessProfile] = useState(false);

    const onBusinessProfileState = () => {

        setBusinessProfile(businessProfile => !businessProfile);

    }

  return (

    <Card as = {Col} md = "12"> 
        <Row>
            <Card.Body className = "space__between__flex__profile__notification">
                <Link to = "/dashboard" className = "row__flex__profile__notification" onClick = {onBusinessProfileState}>    
                    <Card.Subtitle className = "profile__notification ml-3">{props.stepDetails}</Card.Subtitle>
                </Link>

                <Link to = "/dashboard" className = "row__flex__profile__notification" onClick = {onBusinessProfileState}>   
                    <Card.Subtitle className = "mr-3 text-muted" style = {{marginTop: "-3px"}}>

                        {!businessProfile ?
                            <IoIosArrowDown className = "arrow__icons__profile__notification"/> 
                            :
                            <IoIosArrowUp className = "arrow__icons__profile__notification"/>
                        } 
            
                    </Card.Subtitle> 
                </Link>     
            </Card.Body>
        </Row>

        <Row style = {{marginLeft: "22px", marginRight: "0px"}}>

            {businessProfile ? <p className = "profile__notification__description">Please confirm all members have been added to this business.
                <br/>
                In order to manage international payments, all board of directors and stakeholders with more than 25% ownership must be added, if not, click <Link to = "/add-members" className = "add__members__link">here</Link> to add members.
                </p> : null}    

        </Row>  

        <Row>

            {businessProfile ?

                <div className = "notifications__btn">
                    <ProfileButton text = "Confirm" onClick = { () => history.push('./business-profile') } />
                </div>

            : null}

        </Row>             

    </Card>
   
  );
}

export default BusinessProfileNotification;
