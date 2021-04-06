import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Row, Col, Card } from 'react-bootstrap';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import './ProfileNotification.css';

import ProfileButton from '../button/ProfileButton';

function PersonalProfileNotification(props) {

    const history = useHistory();

    const [personalProfile, setPersonalProfile] = useState(false);

    const onPersonalProfileState = () => {

        setPersonalProfile(personalProfile => !personalProfile);

    }

  return (

    <Card as = {Col} md = "12"> 
        <Row>
            <Card.Body className = "space__between__flex__profile__notification">
                <Link to = "/dashboard" className = "row__flex__profile__notification" onClick = {onPersonalProfileState}>    
                    <Card.Subtitle className = "profile__notification ml-3">{props.stepDetails}</Card.Subtitle>
                </Link>

                <Link to = "/dashboard" className = "row__flex__profile__notification" onClick = {onPersonalProfileState}>   
                    <Card.Subtitle className = "mr-3 text-muted" style = {{marginTop: "-3px"}}>

                        {!personalProfile ?
                            <IoIosArrowDown className = "arrow__icons__profile__notification"/> 
                                :
                            <IoIosArrowUp className = "arrow__icons__profile__notification"/>
                        } 
            
                    </Card.Subtitle> 
                </Link>     
            </Card.Body>
        </Row>

        <Row style = {{marginLeft: "22px", marginRight: "0px"}}>

            {personalProfile ? <p className = "profile__notification__description">{props.profileNotificationDescription}</p> : null}    

        </Row>   

        <Row>

            {personalProfile ? 

                <div className = "notifications__btn">
                    <ProfileButton text = "Complete Profile" onClick = { () => history.push('./personal-profile') } />
                </div>

            : null}
            
        </Row>                                        

    </Card>
   
  );
}

export default PersonalProfileNotification;
