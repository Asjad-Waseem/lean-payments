import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { MdModeEdit } from 'react-icons/md';

import './PersonalAddress.css';

import InfoField from '../../../profiles/personal profile/info field/InfoField';

import Country from '../../../../../data/countries.json';

import { submitMemberPersonalAddressDetails } from '../../../../../actions/businessMemberActions';

function PersonalAddress() {

  const [ edit, setEditState ] = useState(false);

  const editState = () => {

    setEditState(true);

  }

  const { register, errors, watch, handleSubmit, reset } = useForm();

  const city = useRef();

  city.current = watch("city", "");

  let cityError = "";

  if ((city.current) && (!/^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i.test(city.current))) {

    cityError = "City should only have letters";

  }

  const dispatch = useDispatch();

  const onSubmit = (personalAddressDetails) => {

      if(!cityError) {

          const finalData = {

              streetAddress: personalAddressDetails.streetAddress,
              city: personalAddressDetails.city,
              province: personalAddressDetails.province,
              postalCode: personalAddressDetails.postalC,
              country: personalAddressDetails.country
            
          }

    dispatch(submitMemberPersonalAddressDetails(finalData));

    reset();

    setEditState(false);

  }

  }

  return (
  
    <Card as = {Col} md = "12"> 
        <Card.Body className = "">
                <Card.Title className = "personal__address">
                  
                  <p className = "personal__address__heading">Personal Address</p>

                  {!edit ?

                  <Link to = "/member-information">      
                      <MdModeEdit className = "edit__icon ml-2" onClick = {editState}/>
                 </Link>

                 : null}

                  </Card.Title>

                  {!edit ?

                      <div className = "info__state">

                          <InfoField title = "Street Address" info = "70 Kool Avenue"/>
                          <InfoField title = "City" info = "Toronto"/>
                          <InfoField title = "Province" info = "Bhatia"/>
                          <InfoField title = "Country" info = "Canada"/>

                      </div>

                  : 

                  <form onSubmit={handleSubmit(onSubmit)}>

                    <Row>

                      <Col md = "4">
      
                      <Form.Group className = "personal__address__form">
                          <Form.Label className = "input__label">Street Address</Form.Label>
                              <Form.Control 
                                  className = {errors.streetAddress  ? "is-invalid" : null} 
                                  type = "text" 
                                  name = "streetAddress" 
                                  placeholder="Street Address" 
                                  ref={register( { required: true } ) }
                                  />
                                  <div className = "text-danger">
                                      {errors.streetAddress && errors.streetAddress.type === "required" && <span>This field is required</span>}
                                  </div>

                                  <br/>

                          <Form.Label className = "input__label">City</Form.Label>
                              <Form.Control 
                                  className = {errors.city || cityError ? "is-invalid" : null} 
                                  type = "text" 
                                  name = "city" 
                                  placeholder="City" 
                                  ref={register( { required: true } ) }
                                  />
                                  <div className = "text-danger">
                                      {errors.city && errors.city.type === "required" && <span>This field is required</span>}
                                      {cityError}
                                  </div>

                                  <br/>

                          <Form.Label className = "input__label">Province</Form.Label>
                              <Form.Control 
                                  className = {errors.province ? "is-invalid" : null} 
                                  type = "text" 
                                  name = "province" 
                                  placeholder="Province" 
                                  ref={register( { required: true } ) }
                                  />
                                  <div className = "text-danger">
                                      {errors.province && errors.province.type === "required" && <span>This field is required</span>}
                                  </div>

                                  <br/>

                          <Form.Label className = "input__label">Postal Code</Form.Label>
                              <Form.Control 
                                  className = {errors.postal ? "is-invalid" : null} 
                                  type = "text" 
                                  name = "postalC" 
                                  placeholder="Postal Code"
                                  ref={register( { required: true } ) }
                                  />
                                  <div className = "text-danger">
                                      {errors.postalC && errors.postalC.type === "required" && <span>This field is required</span>}
                                  </div>

                                  <br/>

                          <Form.Label className = "input__label">Country</Form.Label>
                              <Form.Control 
                                  as="select"
                                  className = {errors.country ? "country__drpdown is-invalid" : "country__drpdown"} 
                                  name = "country" 
                                  ref={register ( { required: true } ) }
                                  >
                                  <option value = "">Select Country</option>

                                  { Country.CountryNames.map((result) => (<option text = {result.code}>{result.name}</option>))
                                 

                                  }

                              </Form.Control>
                                  <div className = "text-danger">
                                    {errors.country && errors.country.type === "required" && <span>This field is required</span>}
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

export default PersonalAddress;
