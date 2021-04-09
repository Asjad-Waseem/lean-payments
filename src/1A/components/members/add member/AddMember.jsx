import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { Modal, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import { IoCloseSharp } from 'react-icons/io5';

import { addMember } from '../../../../actions/businessMemberActions';

import './AddMember.css';

function AddMember(props) {

    const { register, errors, watch, handleSubmit, reset } = useForm();

    const emailAddress = useRef();

    emailAddress.current = watch("emailAddress", "");

    let emailAddressError = "";

    if ((emailAddress.current) && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailAddress.current))) {

        emailAddressError = "Email should have @ and . at the correct places";
    
    }

    const dispatch = useDispatch();

    const onSubmit = (memberDetails) => {

        if(!emailAddressError) {

            const memberEmail = {

                emailAddress: memberDetails.emailAddress,

            }

        dispatch(addMember(memberEmail));

        reset();

       }

    }

  return (

      <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.modalShow}
      onHide={props.handleClose}
      >
          <Modal.Header>
              <IoCloseSharp className = "modal__close__icon" onClick = {props.handleClose}/>
          </Modal.Header>
          <Modal.Body className = "ml-4">
              <h5 className = "add__members__modal">Add Member To Kool Company</h5>
              <br/>
              <Form className = "modal__form" onSubmit={handleSubmit(onSubmit)}>
                  <Form.Label className = "input__label__1">Enter Member's Work Email</Form.Label>
                      <Form.Control 
                          className = {errors.emailAddress || emailAddressError ? "is-invalid" : null} 
                          type = "email" 
                          name = "emailAddress" 
                          placeholder="Email Address" 
                          ref={register( { required: true } ) }
                      />
                     <div className = "text-danger">
                         {errors.emailAddress && errors.emailAddress.type === "required" && <span>This field is required</span>}
                         {emailAddressError}
                     </div>
                     <br/>
                    <Button className = "text-light" type = "submit" style = {{backgroundColor: "#3E8CE2", fontSize: "13px", height: "35px", borderRadius: "4px", border: "#3E8CE2", marginRight: "auto"}}>Add Member</Button>
              </Form>
          </Modal.Body>
          <Modal.Footer/>
      </Modal>
  )
}

export default AddMember;
