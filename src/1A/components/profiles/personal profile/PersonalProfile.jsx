import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Sider from '../../layout/sider/Sider';
import PersonalDetails from './personal details/PersonalDetails';
import PersonalAddress from './personal address/PersonalAddress';
import Identification from './identification/Identification';
import CloseAccount from '../../dashboard/common/close account footer/CloseAccount';

import '../Profile.css';

import { personalDetailsState, 
         personalAddressState,
         identificationState,
       } from '../../../../actions/personalProfileActions';

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

function PersonalProfile() {

    const dispatch = useDispatch();

    const onPersonalDetailsStep = () => dispatch(personalDetailsState());
    const onPersonalAddressStep = () => dispatch(personalAddressState());
    const onIdentificationStep = () => dispatch(identificationState());

    const collapsed = useSelector(state => state.collapsed.collapsed);
    const personalProfileSteps = useSelector(state => state.personalProfileState);

    const step = personalProfileSteps.active_step;

    const step_1_color = personalProfileSteps.personal_details;
    const step_2_color = personalProfileSteps.personal_address;
    const step_3_color = personalProfileSteps.identification;

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
    <div className = "profile">

        <Sider/>

            <Container fluid className = "profile__layout__container">

                <div className = {collapsed && width >= 768 ? "profile__page__content":  
                                 !collapsed && width >= 768 ? "profile__page__content__open":
                                 "profile__page__content__1"}>            

                    <Row className = {width >= 768 ? "profile__container" : "profile__container__1"}>

                        <Col sm>

                            <Row> 

                                <h2 className = "profile__heading"><span className = "profile__heading__underline profile__heading__underline__padding"> Kevin Lee's Profile </span></h2> 
                            
                            </Row> 

                            <br/>

                            <Row>

                                <div className = "profile__links profile__links__layout">
                                    
                                    <Link to = "/personal-profile" style = {{color: step_1_color}} onClick = {onPersonalDetailsStep}>Personal Details</Link>
                                    <Link to = "/personal-profile" className = {width > 507 ? "ml-3" : "mt-1"} style = {{color: step_2_color}} onClick = {onPersonalAddressStep}>Personal Address</Link>
                                    <Link to = "/personal-profile" className = {width > 507 ? "ml-3" : "mt-1"} style = {{color: step_3_color}} onClick = {onIdentificationStep}>Identification</Link>
    
                                </div>

                            </Row>

                            <br/>

                            <Row>

                              {step === "1" ?

                              <PersonalDetails />

                              :

                              step === "2" ?

                              <PersonalAddress />

                              : 
                              
                              step === "3" ? 
                            
                              <Identification />
                            
                              : null}
                              
                            </Row>

                            <br/>
                            <br/>
                            <br/>
                            {step !== "3" && width > 767 ? 
                            <>
                            <br/>
                            <br/>
                            <br/>
                            </>
                            : width < 422 ? 
                            <br/> 
                            : null}

                            <Row style = {{paddingBottom: "0", bottom: "0", position: "absolute"}}>

                                <CloseAccount />

                            </Row>

                        </Col>

                    </Row>

                </div>

            </Container>

    </div>
  );
}

export default PersonalProfile;
