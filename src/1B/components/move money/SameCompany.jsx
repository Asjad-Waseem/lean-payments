import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Sider from '../../../layout/Sider';

import { IoMdArrowRoundBack } from 'react-icons/io';
import { MdRateReview } from 'react-icons/md';

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
    
  return (
    <div className = "same__company">

        <Sider />

            <Container fluid className = "same__company__layout__container">

                <div className = {collapsed && width >= 768 ? "same__company__page__content":  
                                 !collapsed && width >= 768 ? "same__company__page__content__open":
                                 "same__company__page__content__1"}>    
        
                    <Row className = {width >= 768 ? "ml-1" : "same__company__container__1"}>

                        <Col md = "10" className = "same__company__container__col">

                            <Row>

                                <Col>

                                  <Link className = "black__link" to = "/move-money/within-same-company">

                                    <IoMdArrowRoundBack className = "previous__arrow"/>

                                  </Link>

                                    <br/>
                                    <br/>

                                    <h4 className = "font__bold">Moving Money</h4>
                                    <p className = "sub__heading mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                    <Form>

                                    <Form.Label className = "font__13">From (Pocket Name)</Form.Label>

                                    <br/> 

                                        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                        Preference
                                        </Form.Label>

                                        <Form.Control
                                        as="select"
                                        className="table__filters mr-sm-2"
                                        id="inlineFormCustomSelect"
                                        custom
                                        >
                                        <option value="0">Select</option>
                                        <option value="1">Legal Expenses</option>
                                        <option value="2">Bank Charges</option>
                                        <option value="3">Supplier #1</option>
                                        </Form.Control>

                                        <br/>
                                        <br/>

                                        <Form.Row>

                                        <Col>

                                    <Form.Label className = "font__13">To</Form.Label>

                                        <br/>

                                        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                        Preference
                                        </Form.Label>

                                        <Form.Control
                                        as="select"
                                        className="font__14 mr-sm-2"
                                        id="inlineFormCustomSelect"
                                        custom
                                        >
                                        <option value="0">Select</option>
                                        <option value="1">Legal Expenses</option>
                                        <option value="2">Bank Charges</option>
                                        <option value="3">Supplier #1</option>
                                        </Form.Control>

                                        </Col>

                                        <Col>

                                    <Form.Label className  = "font__13">To (Pocket)</Form.Label>

                                        <br/>

                                        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                        Preference
                                        </Form.Label>

                                        <Form.Control
                                        as="select"
                                        className="font__14 mr-sm-2"
                                        id="inlineFormCustomSelect"
                                        custom
                                        >
                                        <option value="0">Select</option>
                                        <option value="1">Legal Expenses</option>
                                        <option value="2">Bank Charges</option>
                                        <option value="3">Supplier #1</option>
                                        </Form.Control>

                                        </Col>

                                        </Form.Row>

                                        <br/>

                                        <Form.Row>

                                        <Col>

                                    <Form.Label className = "font__13">Currency</Form.Label>

                                        <br/>

                                        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                        Preference
                                        </Form.Label>

                                        <Form.Control
                                        as="select"
                                        className="font__14 mr-sm-2"
                                        id="inlineFormCustomSelect"
                                        custom
                                        >
                                        <option value="0">Select</option>
                                        <option value="CAD">CAD</option>
                                        <option value="USD">USD</option>
                                        </Form.Control>

                                        </Col>

                                        <Col>

                                    <Form.Label className = "font__13">Amount</Form.Label>

                                        <br/>

                                        <Form.Control className = "amount mr-sm-2" type="text" placeholder="Amount"/>

                                        </Col>

                                        </Form.Row>

                                        <br/>

                                        <Button variant="primary text-light" type="submit" style = {{color: "#2c88d9", fontSize: "14px", fontWeight: "500"}}>
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
