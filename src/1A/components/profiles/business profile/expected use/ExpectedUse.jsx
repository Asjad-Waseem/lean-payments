import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Multiselect } from 'multiselect-react-dropdown';
import { MdModeEdit } from 'react-icons/md';
import { HiInformationCircle } from 'react-icons/hi';

import './ExpectedUse.css';

import InfoField from '../../personal profile/info field/InfoField';

import Country from '../../../../../data/countries.json';

import { submitExpectedUseDetails } from '../../../../../actions/businessProfileActions';

function ExpectedUse() {

  const [ edit, setEditState ] = useState(false);
  const [ transactionCountriesError, setTransactionCountriesError ] = useState("");

  let transactionCountries = [];

  const editState = () => {

    setEditState(true);

  }

  const onSelect = (selectedList) => {

    transactionCountries = selectedList;

    setTransactionCountriesError("");

  }

  const onRemove = (selectedList) => {

    transactionCountries = selectedList;

    if(transactionCountries.length < 1) {

        setTransactionCountriesError("This field is required");
    
    }
    
  }

  const validateCountries = () => {

    if(transactionCountries.length < 1) {

        setTransactionCountriesError("This field is required");

    }

  }

  const { register, errors, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (expectedUseDetails) => {

          const finalData = {

              purposeOfPayments: expectedUseDetails.purposeOfPayments,
              expectedNumberOfMonthlyPayments: expectedUseDetails.expectedNumberOfMonthlyPayments,
              expectedMonthlyTradeVolume: expectedUseDetails.expectedMonthlyTradeVolume,
              expectedCountriesOfTransaction: transactionCountries
             
          }

    dispatch(submitExpectedUseDetails(finalData));

    reset();

    setEditState(false);

}

  return (
  
    <Card as = {Col} md = "12"> 
        <Card.Body className = "">

            <Row>

                <Col>

                <Card.Title className = "expected__use__details">
                  
                  <p className = "expected__use__details__heading">Expected Use</p>

                  {!edit ?

                      <Link to = "/business-profile">      
                          <MdModeEdit className = "edit__icon ml-2" onClick = {editState}/>
                      </Link>

                  : null}

                  </Card.Title>

                  {!edit ?
                  
                  <div className = "info__state">

                      <InfoField title = "Purpose of Payments" info = "Business Expenditure"/>
                      <InfoField title = "Expected Number of Monthly Payments" info = "10"/>
                      <InfoField title = "Expected Monthly Trade Volume" info = "100,000"/>
                      <InfoField title = "Expected Countries of Transaction" info = "Canada, United States"/>

                  </div>

                  : null}

                  </Col>

                  {!edit ? 

                      <Col md style = {{marginTop: "56px"}} >

                          <div className = "auto__approval">
                              <InfoField title = "Auto - Approval Value" info = "Not Set"/>
                              <HiInformationCircle className = "mt-1 ml-1" style = {{fill: "#3E8CE2"}} />
                          </div>

                          <div className = "auto__approval">
                              <InfoField title = "Single Approval Value" info = "Not Set"/>
                              <HiInformationCircle className = "mt-1 ml-1" style = {{fill: "#3E8CE2"}} />
                          </div>

                          <div className = "auto__approval">
                              <InfoField title = "Double Approval Value" info = "Not Set"/>
                              <HiInformationCircle className = "mt-1 ml-1" style = {{fill: "#3E8CE2"}} />
                          </div>

                      </Col>

                  : null}

            </Row>

            {edit ? 

                <form onSubmit={handleSubmit(onSubmit)} as = {Row}>

                    <Form.Group>

                        <Row>

                            <Col md = "4">

                                <Form.Label className = "input__label">Purpose of Payments</Form.Label>
                                    <Form.Control 
                                        as="select"
                                        className = {errors.purposeOfPayments ? "generic__drpdown is-invalid" : "generic__drpdwn"} 
                                        name = "purposeOfPayments" 
                                        ref={register( { required: "Select Purpose of Payments" } ) }
                                    >
                                        <option value = "">Select Purpose of Payments</option>
                                        <option value = "Sending Payments">Sending Payments</option>
                                        <option value = "Receiving Payments">Receiving Payments</option>
                                        <option value = "Currency Exchange">Currency Exchange</option>
                                        <option value = "Sending and Receiving Payments">Sending and Receiving Payments</option>
                                        
                                    </Form.Control>
                                        <div className = "text-danger">
                                            {errors.purposeOfPayments && errors.purposeOfPayments.type === "required" && <span>This field is required</span>}
                                        </div>

                                        <br/>
    
                                <Form.Label className = "input__label">Expected Number of Monthly Payments</Form.Label>
                                    <Form.Control 
                                        className = {errors.expectedNumberOfMonthlyPayments  ? "expected is-invalid" : "expected"} 
                                        type = "number" 
                                        name = "expectedNumberOfMonthlyPayments" 
                                        placeholder="Expected Number of Monthly Payments" 
                                        ref={register( { required: true } ) }
                                    />
                                <div className = "text-danger">
                                    {errors.expectedNumberOfMonthlyPayments && errors.expectedNumberOfMonthlyPayments.type === "required" && <span>This field is required</span>}
                                </div>

                                <br/>

                                <Form.Label className = "input__label">Expected Monthly Trade Volume</Form.Label>
                                    <Form.Control 
                                        className = {errors.expectedMonthlyTradeVolume  ? "expected is-invalid" : "expected"} 
                                        type = "number" 
                                        name = "expectedMonthlyTradeVolume" 
                                        placeholder="Expected Monthly Trade Volume" 
                                        ref={register( { required: true } ) }
                                />
                                <div className = "text-danger">
                                    {errors.expectedMonthlyTradeVolume && errors.expectedMonthlyTradeVolume.type === "required" && <span>This field is required</span>}
                                </div>

                                <br/>

                                <Form.Label className = "input__label">Expected Countries of Transaction</Form.Label>
    
                                    <Multiselect

                                        options={Country.CountryNames}
                                        name = "transactionCountries"
                                        onSelect = {onSelect}
                                        onRemove = {onRemove}
                                        displayValue="name"
                                        showCheckbox={true}
                                    />

                                <div className = "text-danger">
                                    {transactionCountriesError}      
                                </div>

                                <br/> 

                            </Col>

                        </Row>

                    </Form.Group>

                    <Button className = "save__btn" type="submit" onClick = {validateCountries}>
                        <p className = "save__btn__txt">Save</p>
                    </Button>

                </form>

                : null}

        </Card.Body>
    </Card>
  );
}

export default ExpectedUse;
