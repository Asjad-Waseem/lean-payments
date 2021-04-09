import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Card, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { MdModeEdit } from 'react-icons/md';

import './PersonalDetails.css';

import InfoField from '../../../profiles/personal profile/info field/InfoField';

import { submitMemberPersonalDetails } from '../../../../../actions/businessMemberActions';

function PersonalDetails() {

  const [ edit, setEditState ] = useState(false);

  const editState = () => {

    setEditState(true);

  }

  const { register, errors, watch, handleSubmit, reset } = useForm();

  const firstName = useRef();
  const lastName = useRef();
  const emailAddress = useRef();
  const mobilePhone = useRef();

  firstName.current = watch("firstName", "");
  lastName.current = watch("lastName", "");
  emailAddress.current = watch("emailAddress", "");
  mobilePhone.current = watch("mobilePhone", "");

  let firstNameError = "";
  let lastNameError = "";
  let emailAddressError = "";
  let mobilePhoneError = "";

  if ((firstName.current) && (!/^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i.test(firstName.current))) {

    firstNameError = "First Name should only have letters";

  }

  if ((lastName.current) && (!/^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i.test(lastName.current))) {

    lastNameError = "Last Name should only have letters";

  }

  if ((emailAddress.current) && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailAddress.current))) {

    emailAddressError = "Email should have @ and . at the correct places";

  }

  if ((mobilePhone.current) && (!/^(?:[0-9]●?){6,14}[0-9]$/i.test(mobilePhone.current))) {

    mobilePhoneError = "Mobile Phone Number should only have numbers and must be within 7-15 characters";

  }

  const dispatch = useDispatch();

  const onSubmit = (personalDetails) => {

      if(!firstNameError && !lastNameError && !emailAddressError && !mobilePhoneError) {

          const finalData = {

              firstName: personalDetails.firstName,
              lastName: personalDetails.lastName,
              emailAddress: personalDetails.emailAddress,
              mobilePhone: personalDetails.mobilePhone

          }

    dispatch(submitMemberPersonalDetails(finalData));

    reset();

    setEditState(false);

  }


  }

  return (
  
    <Card as = {Col} md = "12"> 
        <Card.Body className = "">
                <Card.Title className = "personal__details">
                  
                  <p className = "personal__details__heading">Personal Details</p>

                  {!edit ?

                  <Link to = "/member-information">      
                      <MdModeEdit className = "edit__icon ml-2" onClick = {editState}/>
                  </Link>

                  : null}

                  </Card.Title>

                  {!edit ?
                  
                  <div className = "info__state">

                      <InfoField title = "First Name" info = "Kevin"/>
                      <InfoField title = "Last Name" info = "Lee"/>
                      <InfoField title = "Work Email Address" info = "kevin@gmail.com"/>
                      <InfoField title = "Mobile Phone Number" info = "+1 905 123 4567"/>

                  </div>

                  : 
                  
                  <form onSubmit={handleSubmit(onSubmit)}>

                    <Row>

                      <Col md = "4">
      
                      <Form.Group className = "personal__details__form">
                          <Form.Label className = "input__label">First Name</Form.Label>
                              <Form.Control 
                                  className = {errors.firstName || firstNameError ? "is-invalid" : null} 
                                  type = "text" 
                                  name = "firstName" 
                                  placeholder="First Name" 
                                  ref={register( { required: true } ) }
                                  />
                                  <div className = "text-danger">
                                      {errors.firstName && errors.firstName.type === "required" && <span>This field is required</span>}
                                      {firstNameError}
                                  </div>

                                  <br/>

                          <Form.Label className = "input__label">Last Name</Form.Label>
                              <Form.Control 
                                  className = {errors.lastName || lastNameError ? "is-invalid" : null} 
                                  type = "text" 
                                  name = "lastName" 
                                  placeholder="Last Name" 
                                  ref={register( { required: true } ) }
                                  />
                                  <div className = "text-danger">
                                      {errors.lastName && errors.lastName.type === "required" && <span>This field is required</span>}
                                      {lastNameError}
                                  </div>

                                  <br/>

                          <Form.Label className = "input__label">Work Email Address</Form.Label>
                              <Form.Control 
                                  className = {errors.emailAddress || emailAddressError ? "is-invalid" : null} 
                                  type = "email" 
                                  name = "emailAddress" 
                                  placeholder="Work Email Address" 
                                  ref={register( { required: true } ) }
                                  />
                                  <div className = "text-danger">
                                      {errors.emailAddress && errors.emailAddress.type === "required" && <span>This field is required</span>}
                                      {emailAddressError}
                                  </div>

                                  <br/>

                          <Form.Label className = "input__label">Mobile Phone Number</Form.Label>

                          <InputGroup>

                          <InputGroup.Prepend>
                          
                          <InputGroup.Text className = "mr-2">+</InputGroup.Text>
                          </InputGroup.Prepend>

                              <Form.Control 
                                  className = {errors.mobilePhone || mobilePhoneError ? "is-invalid" : null} 
                                  type = "text" 
                                  name = "mobilePhone" 
                                  placeholder="Mobile Phone Number" 
                                  ref={register( { required: true } ) }
                              >
                              </Form.Control>

                              </InputGroup>
                              <div className = "text-danger">
                                  {errors.mobilePhone && errors.mobilePhone.type === "required" && <span>This field is required</span>}
                                  {mobilePhoneError}
                              </div>

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

export default PersonalDetails;
