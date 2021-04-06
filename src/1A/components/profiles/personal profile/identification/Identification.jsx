import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { MdModeEdit } from 'react-icons/md';

import './Identification.css';

import InfoField from '../info field/InfoField';

import { submitIdentificationDetails } from '../../../../../actions/personalProfileActions';

import Country from '../../../../../data/countries.json';

function Identification() {

  const [ edit, setEditState ] = useState(false);

  const editState = () => {

    setEditState(true);

  }

  const { register, errors, watch, handleSubmit, reset } = useForm();

  const identification = useRef();
  const idType = useRef();
  const idExpiration = useRef();
  const dateOfBirth = useRef();

  identification.current = watch("identification", "");
  idExpiration.current = watch("idExpiration", "");
  idType.current = watch("idType", "");
  dateOfBirth.current = watch("dateOfBirth", "");
  
  var currentDate = new Date();
  let idExpirationDate = new Date(idExpiration.current);
  let dateOfBirthDate = new Date(dateOfBirth.current);

  let currentDateTime = currentDate.getTime();
  let idExpirationDateTime = idExpirationDate.getTime();
  let dateOfBirthDateTime = dateOfBirthDate.getTime();

  let identificationError = "";
  let idExpirationError = "";
  let dateOfBirthError = "";

  if ((identification.current) && (!/^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i.test(identification.current))) {

    identificationError = "Identification should only have letters";

  }

  if(currentDateTime > idExpirationDateTime) {

    idExpirationError = "Your ID Number is no longer valid";

  }

  if(dateOfBirthDateTime >= currentDateTime) {

    dateOfBirthError = "Date of Birth cannot be greater than or equal to current date";

  }

  const dispatch = useDispatch();

  const onSubmit = (identificationDetails) => {

      let finalIDProvince;

      if(identificationDetails.idType === "Passport") {

        finalIDProvince = "Canada";

      }

      else {


        finalIDProvince = identificationDetails.idProvince;


      }

      if( !identificationError && !idExpirationError && !dateOfBirthError) {

          const finalData = {

                 identification: identificationDetails.identification,
                 idType: identificationDetails.idType,
                 idNumber: identificationDetails.idNumber,
                 idExpiration: identificationDetails.idExpiration,
                 idProvince: finalIDProvince,
                 dateOfBirth: identificationDetails.dateOfBirth,
                 citizenship: identificationDetails.citizenship
            
          }

    dispatch(submitIdentificationDetails(finalData));

    reset();

    setEditState(false);

}  

}

  return (
  
    <Card as = {Col} md = "12"> 

        <Card.Body className = "">

            <Row>

                <Col>

                    <Card.Title className = "identification">
                  
                        <p className = "identification__heading">Identification</p>

                    {!edit ?

                    <Link to = "/personal-profile">      
                        <MdModeEdit className = "edit__icon ml-2" onClick = {editState}/>
                    </Link>

                    : null}

                    </Card.Title>

                    {!edit ?

                        <div className = "info__state">

                            <InfoField title = "Identification" info = "Vishal Bhatia"/>
                            <InfoField title = "ID Type" info = "Passport"/>
                            <InfoField title = "ID Number" info = "12345678"/>
                            <InfoField title = "ID Expiration" info = "05/23/2030"/>
                            <InfoField title = "Province in which ID was issued" info = "Ontario"/>

                        </div>

                    : null}

                </Col>

                {!edit ? 

                <Col className = "" style = {{marginTop: "56px"}} >

                    <InfoField title = "Date of Birth" info = "12/29/1996"/>
                    <InfoField title = "Citizenship" info = "Canada"/>

                </Col>

                : null}

            </Row>

            {edit ? 

                <form onSubmit={handleSubmit(onSubmit)} as = {Row}>

                    <Form.Group>

                        <Row>

                            <Col md = "4">

                                <Form.Label className = "input__label">Identification</Form.Label>
                                    <Form.Control 
                                        className = {errors.identification || identificationError ? "is-invalid" : null} 
                                        type = "text" 
                                        name = "identification" 
                                        placeholder="Identification" 
                                        ref={register( { required: true } ) }
                                    />
                                    <div className = "text-danger">
                                        {errors.identification && errors.identification.type === "required" && <span>This field is required</span>}
                                        {identificationError}
                                    </div>

                                    <br/>

                                <Form.Label className = "input__label">ID Type</Form.Label>
                                    <Form.Control 
                                        as="select"
                                        className = {errors.idType ? "generic__drpdown is-invalid" : "generic__drpdwn"} 
                                        name = "idType" 
                                        ref={register( { required: "Select ID Type" } ) }
                                    >
                                    <option value = "">Select ID Type</option>
                                    <option value = "Passport">Passport</option>
                                    <option value = "Driver's License">Driver's License</option>
                                
                                    </Form.Control>
                                        <div className = "text-danger">
                                            {errors.idType && errors.idType.type === "required" && <span>This field is required</span>}
                                        </div>

                                    <br/>

                                <Form.Label className = "input__label">ID Number</Form.Label>
                                    <Form.Control 
                                        className = {errors.idNumber ? "is-invalid" : null} 
                                        type = "number" 
                                        name = "idNumber" 
                                        placeholder="ID Number" 
                                        ref={register( { required: true } ) }
                                    />
                                    <div className = "text-danger">
                                        {errors.idNumber && errors.idNumber.type === "required" && <span>This field is required</span>}
                                    </div>

                                    <br/>

                                <Form.Label className = "input__label">ID Expiration</Form.Label>
                                    <Form.Control 
                                        className = {errors.idExpiration || idExpirationError ? "generic__date is-invalid" : "generic__date"} 
                                        type = "date" 
                                        name = "idExpiration" 
                                        ref={register( { required: true } ) }
                                    />
                                    <div className = "text-danger">
                                        {errors.idExpiration && errors.idExpiration.type === "required" && <span>This field is required</span>}
                                        {idExpirationError}
                                    </div>

                                    <br/>

                                <Form.Label className = "input__label">Province in which ID was issued</Form.Label>

                                { idType.current !== "Passport" ?

                                <>

                                    <Form.Control 
                                        as="select"
                                        className = {errors.idType ? "generic__drpdown is-invalid" : "generic__drpdwn"} 
                                        name = "idProvince" 
                                        ref={register( { required: "Select Province" } ) }
                                    >
                                    <option value = "">Select Province</option>
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
                                            {errors.idType && errors.idType.type === "required" && <span>This field is required</span>}
                                        </div>

                                    <br/>

                                    </>

                                    : 

                                    <p>Canada</p>

                                    }

                            </Col>

                            <Col md = "4">

                                <Form.Label className = "input__label">Date of Birth</Form.Label>
                                    <Form.Control 
                                        className = {errors.dateOfBirth || dateOfBirthError ? "generic__date is-invalid" : "generic__date"} 
                                        type = "date" 
                                        name = "dateOfBirth" 
                                        ref={register( { required: true } ) }
                                    />
                                    <div className = "text-danger">
                                        {errors.dateOfBirth && errors.dateOfBirth.type === "required" && <span>This field is required</span>}
                                        {dateOfBirthError}
                                    </div>

                                    <br/>

                                <Form.Label className = "input__label">Citizenship</Form.Label>
                                    <Form.Control 
                                        as="select"
                                        className = {errors.citizenship ? "generic__drpdown is-invalid" : "generic__drpdown"} 
                                        name = "citizenship" 
                                        ref={register( { required: "Select Citizenship" } ) }
                                    >  
                                    <option value = "">Select Citizenship</option>

                                    { Country.CountryNames.map((result) => (<option text = {result.code}>{result.name}</option>)) }

                                    </Form.Control>
                                        <div className = "text-danger">
                                            {errors.citizenship && errors.citizenship.type === "required" && <span>This field is required</span>}
                                        </div>

                                    <br/>

                            </Col>

                        </Row>
                            
                    </Form.Group>

                        <Button className = "save__btn" type="submit">
                            <p className = "save__btn__txt">Save</p>
                        </Button>

                </form>

            : null}

        </Card.Body>
    </Card>
  );
}

export default Identification;
