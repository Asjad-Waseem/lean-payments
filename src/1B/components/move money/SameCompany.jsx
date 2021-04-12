import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from 'react-redux';

import Sider from '../../../layout/Sider';

import { IoMdArrowRoundBack } from 'react-icons/io';
import { MdRateReview } from 'react-icons/md';

import { submitMovingMoneyDetails } from '../../../actions/moveMoneyActions';

import './SameCompany.css';

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

function SameCompany() {

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

    const { register, errors, handleSubmit, reset } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (movingMoneyDetails) => {

          const finalData = {

              fromPocket: movingMoneyDetails.fromPocket,
              to: movingMoneyDetails.to,
              toPocket: movingMoneyDetails.toPocket,
              currency: movingMoneyDetails.currency,
              amount: movingMoneyDetails.amount
            
          }

    dispatch(submitMovingMoneyDetails(finalData));

    reset();

  }
    
  return (
    <div className = "same__company">

        <Sider />

            <Container fluid className = "same__company__layout__container">

                <div className = {collapsed && width >= 768 ? "same__company__page__content":  
                                 !collapsed && width >= 768 ? "same__company__page__content__open":
                                 "same__company__page__content__1"}>    
        
                    <Row className = {width >= 768 ? "ml-1" : "same__company__container__1"}>

                        <Col md = "12" className = "same__company__container__col">

                            <Row>

                                <Col>

                                  <Link className = "black__link" to = "/move-money/within-same-company">

                                    <IoMdArrowRoundBack className = "previous__arrow"/>

                                  </Link>

                                    <br/>
                                    <br/>

                                    <h4 className = "move__money__heading">Moving Money</h4>
                                    <p className = "sub__heading mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                    <Form onSubmit={handleSubmit(onSubmit)}>

                                    <Form.Label className = "input__label text__dark">From (Pocket Name)</Form.Label>

                                    <br/> 

                                        <Form.Control
                                        as="select"
                                        name = "fromPocket" 
                                        className = {errors.fromPocket ? "table__filters is-invalid mr-sm-2" : "table__filters mr-sm-2"} 
                                        ref={register ( { required: true } ) }
                                        custom
                                        >
                                        <option value="">Select</option>
                                        <option value="Legal Expenses">Legal Expenses</option>
                                        <option value="Bank Charges">Bank Charges</option>
                                        <option value="Supplier #1">Supplier #1</option>
                                        </Form.Control>

                                        <div className = "text-danger">
                                            {errors.fromPocket && errors.fromPocket.type === "required" && <span>This field is required</span>}
                                        </div>

                                        <br/>

                                        <Form.Row>

                                        <Col>

                                    <Form.Label className = "input__label text__dark">To</Form.Label>

                                        <br/>

                                        <Form.Control
                                        as="select"
                                        name = "to"
                                        className = {errors.to ? "font__14 mr-sm-2 is-invalid mr-sm-2" : "font__14 mr-sm-2"} 
                                        ref={register ( { required: true } ) }
                                        custom
                                        >
                                        <option value="">Select</option>
                                        <option value="Legal Expenses">Legal Expenses</option>
                                        <option value="Bank Charges">Bank Charges</option>
                                        <option value="Supplier #1">Supplier #1</option>
                                        </Form.Control>

                                        <div className = "text-danger">
                                            {errors.to && errors.to.type === "required" && <span>This field is required</span>}
                                        </div>

                                        </Col>

                                        <Col>

                                    <Form.Label className  = "input__label text__dark">To (Pocket)</Form.Label>

                                        <br/>

                                        <Form.Control
                                        as="select"
                                        name = "toPocket"
                                        className = {errors.toPocket ? "font__14 mr-sm-2 is-invalid mr-sm-2" : "font__14 mr-sm-2"} 
                                        ref={register ( { required: true } ) }
                                        custom
                                        >
                                        <option value="">Select</option>
                                        <option value="Legal Expenses">Legal Expenses</option>
                                        <option value="Bank Charges">Bank Charges</option>
                                        <option value="Supplier #1">Supplier #1</option>
                                        </Form.Control>

                                        <div className = "text-danger">
                                            {errors.toPocket && errors.toPocket.type === "required" && <span>This field is required</span>}
                                        </div>

                                        </Col>

                                        </Form.Row>

                                        <br/>

                                        <Form.Row>

                                        <Col>

                                    <Form.Label className = "input__label text__dark">Currency</Form.Label>

                                        <br/>

                                        <Form.Control
                                        as="select"
                                        name = "currency"
                                        className = {errors.currency? "font__14 mr-sm-2 is-invalid mr-sm-2" : "font__14 mr-sm-2"} 
                                        ref={register ( { required: true } ) }
                                        custom
                                        >
                                        <option value="">Select</option>
                                        <option value="CAD">CAD</option>
                                        <option value="USD">USD</option>
                                        </Form.Control>

                                        <div className = "text-danger">
                                            {errors.currency && errors.currency.type === "required" && <span>This field is required</span>}
                                        </div>

                                        </Col>

                                        <Col>

                                    <Form.Label className = "input__label text__dark">Amount</Form.Label>

                                        <br/>

                                        <Form.Control className = {errors.amount? "amount mr-sm-2 is-invalid" : "amount mr-sm-2"}
                                                      type="number"
                                                      name = "amount" 
                                                      placeholder="Amount"
                                                      ref={register ( { required: true } ) }
                                        >

                                        </Form.Control>

                                        <div className = "text-danger">
                                            {errors.amount && errors.amount.type === "required" && <span>This field is required</span>}
                                        </div>

                                        </Col>

                                        </Form.Row>

                                        <br/>

                                        <Button variant="primary text-light" type="submit" style = {{color: "#2c88d9", fontSize: "14px", fontFamily: "Poppins", fontWeight: "600"}}>
                                         <MdRateReview className = "review__confirm__icon mr-2"/>
                                         Review and Confirm
                                        </Button>

                                    </Form>

                                </Col>

                            </Row>

                        </Col>

                    </Row>

                </div>

             </Container>

    </div>
  );
}

export default SameCompany;
