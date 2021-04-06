import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { MdModeEdit } from 'react-icons/md';

import './IncorporationDetails.css';

import InfoField from '../../personal profile/info field/InfoField';

import Country from '../../../../../data/countries.json';
import States from '../../../../../data/usaStates.json';

import { submitIncorporationDetails } from '../../../../../actions/businessProfileActions';

function IncorporationDetails() {

  const [ edit, setEditState ] = useState(false);

  const editState = () => {

    setEditState(true);

  }

  const { register, errors, watch, handleSubmit, reset } = useForm();

  const businessIncorporationDate = useRef();
  const countryOfJurisdication = useRef();

  businessIncorporationDate.current = watch("businessIncorporationDate", "");
  countryOfJurisdication.current = watch("countryOfJurisdication", "");

  var currentDate = new Date();
  let businessIncorporationDate1 = new Date(businessIncorporationDate.current);

  let currentDateTime = currentDate.getTime();
  let businessIncorporationDateTime = businessIncorporationDate1.getTime();

  let businessIncorporationDateError = "";

  if(currentDateTime < businessIncorporationDateTime) {

    businessIncorporationDateError = "Business Incorporation Date cannot be greater than today's date";

  }

  const dispatch = useDispatch();

  const onSubmit = (incorporationDetails) => {

    if( !businessIncorporationDateError ) {

          const finalData = {

              businessRegistrationNumber: incorporationDetails.businessRegistrationNumber,
              businessIncorporationDate: incorporationDetails.businessIncorporationDate,
              countryOfJurisdication: incorporationDetails.countryOfJurisdication,
              provinceState: incorporationDetails.provinceState,
              businessLegalStructure: incorporationDetails.businessLegalStructure
             
          }

    dispatch(submitIncorporationDetails(finalData));

    reset();

    setEditState(false);

  }

}

  return (
  
    <Card as = {Col} md = "12"> 
        <Card.Body className = "">
                <Card.Title className = "incorporation__details">
                  
                  <p className = "incorporation__details__heading">Incorporation Details</p>

                  {!edit ?

                      <Link to = "/business-profile">      
                          <MdModeEdit className = "edit__icon ml-2" onClick = {editState}/>
                      </Link>

                  : null}

                  </Card.Title>

                  {!edit ?
                  
                  <div className = "info__state">

                      <InfoField title = "Business Registration Number" info = "Kool Company"/>
                      <InfoField title = "Business Incorporation Date" info = "Bhatia"/>
                      <InfoField title = "Country/Jurisdication of Incorporation" info = "Canada"/>
                      <InfoField title = "Business Legal Structure" info = "L.L.C"/>

                  </div>

                  :

                  <form onSubmit={handleSubmit(onSubmit)}>

                  <Row>

                    <Col md = "4">
    
                    <Form.Group>
                        <Form.Label className = "input__label">Business Registration Number</Form.Label>
                            <Form.Control 
                                className = {errors.businessRegistrationNumber  ? "business__registration__number is-invalid" : "business__registration__number"} 
                                type = "number" 
                                name = "businessRegistrationNumber" 
                                placeholder="Business Registration Number" 
                                ref={register( { required: true, minLength: 8, maxLength: 10 } ) }
                                />
                                <div className = "text-danger">
                                    {errors.businessRegistrationNumber && errors.businessRegistrationNumber.type === "required" && <span>This field is required</span>}
                                    {errors.businessRegistrationNumber && ((errors.businessRegistrationNumber.type === "minLength") || (errors.businessRegistrationNumber.type === "maxLength")) && <span>Business Registration Number should be between 8-10 characters</span>}
                                </div>

                                <br/>

                        <Form.Label className = "input__label">Business Incorporation Date</Form.Label>
                            <Form.Control 
                                className = {errors.businessIncorporationDate || businessIncorporationDateError ? "generic__date is-invalid" : "generic__date"} 
                                type = "date" 
                                name = "businessIncorporationDate" 
                                ref={register( { required: true } ) }
                                />
                                <div className = "text-danger">
                                    {errors.businessIncorporationDate && errors.businessIncorporationDate.type === "required" && <span>This field is required</span>}
                                    {businessIncorporationDateError}
                                </div>

                                <br/>

                        <Form.Label className = "input__label">Country/Jurisdication of Incorporation</Form.Label>
                            <Form.Control 
                                as="select"
                                className = {errors.countryOfJurisdication ? "country__drpdown is-invalid" : "country__drpdown"} 
                                name = "countryOfJurisdication" 
                                ref={register ( { required: true } ) }
                                >
                                <option value = "">Select Country</option>

                                  { Country.CountryNames.map((result) => (<option text = {result.code}>{result.name}</option>)) }

                            </Form.Control>
                                <div className = "text-danger">
                                    {errors.countryOfJurisdication && errors.countryOfJurisdication.type === "required" && <span>This field is required</span>}
                                </div>

                                  <br/>

                                  {countryOfJurisdication.current === "Canada" ? 

                                  <>

                                      <Form.Control 
                                          as="select"
                                          className = {errors.provinceState ? "generic__drpdown is-invalid" : "generic__drpdwn"} 
                                          name = "provinceState" 
                                          ref={register( { required: "Select Province" } ) }
                                      >
                                          <option value = "">Select Province</option>
                                          <option value = "None">None</option>
                                          <option value = "Alberta">Alberta</option>
                                          <option value = "British Columbia">British Columbia</option>
                                          <option value = "Manitoba">Manitoba</option>
                                          <option value = "New Brunswick">New Brunswick</option>
                                          <option value = "New foundland and Labrador">New foundland and Labrador</option>
                                          <option value = "Nova Scotia">Nova Scotia</option>
                                          <option value = "Ontario">Ontario</option>
                                          <option value = "Prince Edward Island">Prince Edward Island</option>
                                          <option value = "Quebec">Quebec</option>
                                          <option value = "Saskatchewan">Saskatchewan</option>

                                      </Form.Control>
                                          <div className = "text-danger">
                                              {errors.provinceState && errors.provinceState.type === "required" && <span>This field is required</span>}
                                          </div>

                                          <br/>

                                  </>

                                  : 
                                  
                                  countryOfJurisdication.current === "United States" ?

                                  <>

                                      <Form.Control 
                                          as="select"
                                          className = {errors.provinceState ? "generic__drpdown is-invalid" : "generic__drpdwn"} 
                                          name = "provinceState" 
                                          ref={register( { required: "Select State" } ) }
                                      >
                                          <option value = "">Select State</option>
                                          <option value = "None">None</option>
                                              { States.states.map((result) => (<option text = {result}>{result}</option>)) }

                                      </Form.Control>
                                          <div className = "text-danger">
                                              {errors.provinceState && errors.provinceState.type === "required" && <span>This field is required</span>}
                                          </div>

                                          <br/>

                                  </>

                                  : null}    

                        <Form.Label className = "input__label">Business Legal Structure</Form.Label>
                            <Form.Control 
                                as="select"
                                className = {errors.businessLegalStructure ? "generic__drpdown is-invalid" : "generic__drpdown"} 
                                name = "businessLegalStructure" 
                                ref={register ( { required: true } ) }
                                >
                                <option value = "">Select Business Legal Structure</option>
                                <option value = "Corporation">Corporation</option>
                                <option value = "Partnership">Partnership</option>
                                <option value = "Limited Liability Company (LLC)">Limited Liability Company (LLC)</option>
                                <option value = "Sole Proprietorship">Sole Proprietorship</option>
                                <option value = "Association/Non-Profit Organization">Association/None-Profit Organization</option>

                            </Form.Control>
                                <div className = "text-danger">
                                  {errors.businessLegalStructure && errors.businessLegalStructure.type === "required" && <span>This field is required</span>}
                                </div>

                                <br/>

                    </Form.Group>

                    <Button className = "save__btn" type="submit">
                        <p className = "save__btn__txt">Save</p>
                    </Button>

                    </Col>

                    </Row>

                </form>

                }

        </Card.Body>
    </Card>
  );
}

export default IncorporationDetails;
