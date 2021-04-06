import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Sider from '../../layout/sider/Sider';
import BasicInformation from '../business profile/basic information/BasicInformation';
import BusinessAddress from '../business profile/business address/BusinessAddress';
import BankInformation from '../business profile/bank information/BankInformation';
import IncorporationDetails from '../business profile/incorporation details/IncorporationDetails';
import ExpectedUse from '../business profile/expected use/ExpectedUse';

import CloseAccount from '../../dashboard/common/close account footer/CloseAccount';

import '../Profile.css';

import { basicInformationState, 
         businessAddressState,
         bankInformationState,
         incorporationDetailsState,
         expectedUseState
       } from '../../../../actions/businessProfileActions';

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

function BusinessProfile() {

    const dispatch = useDispatch();

    const onBasicInformationStep = () => dispatch(basicInformationState());
    const onBusinessAddressStep = () => dispatch(businessAddressState());
    const onBankInformationStep = () => dispatch(bankInformationState());
    const onIncorporationDetailsStep = () => dispatch(incorporationDetailsState());
    const onExpectedUseStep = () => dispatch(expectedUseState());

    const collapsed = useSelector(state => state.collapsed.collapsed);
    const businessProfileSteps = useSelector(state => state.businessProfileState);

    const step = businessProfileSteps.active_step;

    const step_1_color = businessProfileSteps.basic_information;
    const step_2_color = businessProfileSteps.business_address;
    const step_3_color = businessProfileSteps.bank_information;
    const step_4_color = businessProfileSteps.incorporation_details;
    const step_5_color = businessProfileSteps.expected_use_details;

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

                                <h2 className = "profile__heading"><span className = "profile__heading__underline profile__heading__underline__padding"> Kevin L.L.C's Profile </span></h2> 
                            
                            </Row> 

                            <br/>

                            <Row>

                                <div className = "profile__links profile__links__layout">
                                    
                                    <Link to = "/business-profile" style = {{color: step_1_color}} onClick = {onBasicInformationStep}>Basic Information</Link>
                                    <Link to = "/business-profile" className = {width > 507 ? "ml-3" : "mt-1"} style = {{color: step_2_color}} onClick = {onBusinessAddressStep}>Business Address</Link>
                                    <Link to = "/business-profile" className = {width > 507 ? "ml-3" : "mt-1"} style = {{color: step_3_color}} onClick = {onBankInformationStep}>Bank Information</Link>
                                    <Link to = "/business-profile" className = {width > 507 ? "ml-3" : "mt-1"} style = {{color: step_4_color}} onClick = {onIncorporationDetailsStep}>Incorporation Details</Link>
                                    <Link to = "/business-profile" className = {width > 507 ? "ml-3" : "mt-1"} style = {{color: step_5_color}} onClick = {onExpectedUseStep}>Expected Use</Link>

                                </div>

                            </Row>

                            <br/>

                            <Row>

                              {step === "1" ?

                              <BasicInformation />

                              :

                              step === "2" ?

                              <BusinessAddress />

                              : 
                              
                              step === "3" ? 
                            
                              <BankInformation />
                            
                              : 
                              
                              step === "4" ? 
                            
                              <IncorporationDetails />
                            
                              :

                              step === "5" ?
                              
                              <ExpectedUse />
                              
                              : null}
                              
                            </Row>

                            {/* <br/>
                            <br/>
                            <br/> */}

                            <Row>

                                <CloseAccount />

                            </Row>

                        </Col>

                    </Row>

                </div>

            </Container>

    </div>
  );
}

export default BusinessProfile;
