import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { useSelector } from 'react-redux';

import './Dashboard.css';

import Sider from '../../../layout/Sider';
import Greeting from './greeting/Greeting';
import PersonalProfileNotification from './common/profileNotification/PersonalProfileNotification';
import BusinessProfileNotification from './common/profileNotification/BusinessProfileNotification';
import ActiveBusinessPanel from './activeBusinessPanel/ActiveBusiness';

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

function Dashboard1A() {

    const collapsed = useSelector(state => state.collapsed.collapsed);

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const width = windowDimensions.width;

  return (
    <div className = "dashboard__1A">

        <Sider/>

            <Container fluid className = "dashboard__1A__layout__container">

                <div className = {collapsed && width >= 768 ? "dashboard__1A__page__content":  
                                 !collapsed && width >= 768 ? "dashboard__1A__page__content__open":
                                 "dashboard__1A__page__content__1"}>            

                    <Row className = {width >= 768 ? "dashboard__1A__container" : "dashboard__1A__container__1"}>

                        <Col sm>

                            <Row> 

                                <Greeting name = "Nadir!" /> 
                            
                            </Row> 

                            <br/>

                            <Row>

                                <PersonalProfileNotification stepDetails = "Complete Your Personal Profile"
                                                             profileNotificationDescription = "Tell us a little about yourself! To start making or receiving transfers we need to collect some personal details and Signing Officers must provide ID verification to pass compliance requirements." />                                           
                           
                            </Row>

                            <Row className  = "mt-2">
                            
                                <BusinessProfileNotification stepDetails = "Complete Businesss Profile and Add Key Members for John Doe"/>
                        
                            </Row>

                            <br/>

                            <Row> 
                          
                                <ActiveBusinessPanel /> 
                          
                            </Row>

                            <br/>

                        </Col>

                    </Row>

                </div>

            </Container>

    </div>

  );
}

export default Dashboard1A;
