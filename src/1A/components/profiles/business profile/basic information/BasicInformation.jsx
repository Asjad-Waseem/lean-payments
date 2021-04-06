import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { MdModeEdit } from 'react-icons/md';

import './BasicInformation.css';

import InfoField from '../../personal profile/info field/InfoField';

import Description from '../../../../../data/description.json';

import { submitBasicInformation } from '../../../../../actions/businessProfileActions';

function BasicInformation() {

  const [ edit, setEditState ] = useState(false);

  const editState = () => {

    setEditState(true);

  }

  const { register, errors, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (basicInformation) => {

          const finalData = {

              descriptionOfIndustry: basicInformation.descriptionOfIndustry,
             
          }

    dispatch(submitBasicInformation(finalData));

    reset();

    setEditState(false);

  }

  return (
  
    <Card as = {Col} md = "12"> 
        <Card.Body className = "">
                <Card.Title className = "basic__information">
                  
                  <p className = "basic__information__heading">Basic Information</p>

                  {!edit ?

                  <Link to = "/business-profile">      
                      <MdModeEdit className = "edit__icon ml-2" onClick = {editState}/>
                  </Link>

                  : null}

                  </Card.Title>

                  {!edit ?
                  
                  <div className = "info__state">

                      <InfoField title = "Legal Business Name" info = "Kevin L.L.C"/>
                      <InfoField title = "Business Telephone Number" info = "905-123-4567"/>
                      <InfoField title = "Business Email" info = "business@gmail.com"/>
                      <InfoField title = "Description of Industry" info = "Oil & Energy"/>

                  </div>

                  : 

                  <>

                  <div className = "info__state">

                      <InfoField title = "Legal Business Name" info = "Kevin L.L.C"/>
                      <InfoField title = "Business Telephone Number" info = "905-123-4567"/>
                      <InfoField title = "Business Email" info = "business@gmail.com"/>
                      <InfoField title = "Description of Industry"/>

                  </div>
                  
                  <form onSubmit={handleSubmit(onSubmit)}>

                    <Row>

                      <Col md = "4">
      
                      <Form.Group>
                      <Form.Control 
                                  as="select"
                                  className = {errors.descriptionOfIndustry ? "descriptionOfIndustry__drpdown is-invalid" : "descriptionOfIndustry__drpdown"} 
                                  name = "descriptionOfIndustry" 
                                  ref={register ( { required: true } ) }
                                  >
                                  <option value = "">Select Description of Industry</option>

                                  { Description.description.map((result) => (<option text = {result}>{result}</option>)) }

                              </Form.Control>
                                  <div className = "text-danger">
                                    {errors.descriptionOfIndustry && errors.descriptionOfIndustry.type === "required" && <span>This field is required</span>}
                                  </div>

                                  <br/>

                      </Form.Group>

                      <Button className = "save__btn" type="submit">
                          <p className = "save__btn__txt">Save</p>
                      </Button>

                      </Col>

                      </Row>

                  </form>

                  </>
                             
                  }

        </Card.Body>
    </Card>
  );
}

export default BasicInformation;
