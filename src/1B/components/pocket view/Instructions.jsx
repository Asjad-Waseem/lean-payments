import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, Row, Col, OverlayTrigger, Tooltip, Button, Form, Table } from 'react-bootstrap';

import Sider from '../../../layout/Sider';
import LineChart from './line chart/LineChart';
import Opex from '../../assets/businesses.png';
import tooltip from '../../assets/tooltip.svg';
import Transfer from '../../assets/transfer.svg';

import { useSelector } from 'react-redux';

import { GoCalendar } from 'react-icons/go';
import { HiCurrencyDollar } from 'react-icons/hi';
import { BsArrowUpRight } from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import './Instructions.css';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

function Instructions() {

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

    <div className = "instructions__layout">

        <Sider/>

        <Container fluid className = "instructions__layout__container">

            <div className = {collapsed && width >= 768 ? "instructions__page__content":  
                              !collapsed && width >= 768 ? "instructions__page__content__open":
                               "instructions__page__content__1"}>
            
                <Row className = {width >= 768 ? "instructions__view__container" : "instructions__view__container__1"}>

                        <Col sm className = "instructions__layout__col">

                            <Row>

                                <div className = "row__flex">

                                    <h2 className = "opex">OPEX</h2>

                                    <img className = "ml-2" src = {Opex} style = {{height: "40px", width: "40px"}} alt = "opex-icon" />

                                </div>

                            </Row>

                            <Row>

                                <p className = "gray__font font__13 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            </Row>

                            <br/>

                            <Row className = "legal__expenses__row mr-2">

                                <Col>

                                    <Row>

                                        <Col className = "space__between__flex">
                                            <div className = {width > 600 ? "column__flex mt-4 ml-5" : "column__flex mt-4"}>
                                                <h3 className = "font__400">Legal Expenses</h3>
                                                <h4 className = "font__400 gray__font">Overview</h4>
                                            </div>
                                            <h2 className = {width >= 600 ? "font__400 mt-4 mr-5" : "font__400 mt-4"}>$200.00 CAD</h2>

                                        </Col>

                                    </Row>

                            <Row className = "line__chart__row">
                              
                                <LineChart />

                            </Row>

                                </Col>

                            </Row>

                            <br/>
                            
                            <Row className = "nav__link mt-3">

                                <u>
                                <NavLink to = "/pocket-view/instructions" activeClassName = "active__nav__link" style = {{fontSize: "13px", whiteSpace: "nowrap", color: "#b2bac1"}}>Transactions Overview</NavLink>
                                </u>

                                <u> 
                                <NavLink to = "/pocket-view/instructions" className =  {width >= 372 ? "ml-4" : "nav__link__1"}  activeClassName = "active__nav__link" style = {{display: "inline", fontSize: "13px", whiteSpace: "nowrap"}}>Instructions Overview</NavLink>
                                </u>

                            </Row>

                            <br/>

                            <Row className = "instructions__overview mr-2">
                              
                                <div className = "instructions__heading">

                                    <h3 className = "instructions">Instructions</h3>
                                    <h3 className = "overview">Overview</h3>
                           
                                        <OverlayTrigger
                                         className = "overlay"
                                         key="right"
                                         placement="right"
                                         overlay={
                                         <Tooltip id={`tooltip-right`}>
                                             <p className = "tool__tip__text">Text explaining what "Transaction" means</p>
                                         </Tooltip>
                                         }
                                        >

                                         <img className = {width >=620 ? "tool__tip ml-2" : "tool__tip"} src = {tooltip} alt = "tool-tip"/>
        
                                        </OverlayTrigger>

                                </div>

                                <Button className = "move__money" variant = "primary">  
                                    <img className = "move__money__icon mr-2" src = {Transfer} alt = "move-money"/>Move Money                    
                                </Button>                       

                            </Row>

                            <br/>

                            <Row className = "instructions__table__row mr-2"> 
                              
                                <Col>

                                    <Row className = "instructions__table__container">

                                        <Form>

                                            <Row className = "instructions__table__headings">

                                                <Col className = "instructions__table__headings__col">

                                                    <Form.Label>From</Form.Label>

                                                    <br/> 

                                                    <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                                         Preference
                                                    </Form.Label>
                                                    <Form.Control
                                                     as="select"
                                                     className="mr-sm-2"
                                                     id="inlineFormCustomSelect"
                                                     style = {{width: "130px"}}
                                                     custom
                                                     >
                                                     <option value="">Select</option>
                                                     <option value="Legal Expenses">Legal Expenses</option>
                                                     <option value="Bank Charges">Bank Charges</option>
                                                     <option value="Supplier #1">Supplier #1</option>
                                                    </Form.Control>

                                                </Col>

                                                <Col className = "instructions__table__headings__col">

                                                    <Form.Label>To</Form.Label>

                                                    <br/> 

                                                    <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                                        Preference
                                                    </Form.Label>
                                                    <Form.Control
                                                     as="select"
                                                     className="mr-sm-2"
                                                     id="inlineFormCustomSelect"
                                                     style = {{width: "130px"}}
                                                     custom
                                                    >
                                                    <option value="">Select</option>
                                                    <option value="Very Kool Company">Very Kool Company</option>
                                                    <option value="Supplier #1">Supplier #1</option>
                                                    <option value="3">Legal Expenses</option>
                                                    </Form.Control>

                                                </Col>

                                                <Col className = "instructions__table__headings__col">

                                                    <Form.Label>Date</Form.Label>

                                                    <br/> 

                                                    <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                                        Preference
                                                    </Form.Label>
                                                    <Form.Control
                                                     type="date"
                                                     className="mr-sm-2"
                                                     id="inlineFormCustomSelect"
                                                     style={{width: "130px"}}
                                                    >
                                                    </Form.Control>

                                                </Col>

                                                <Col className = "instructions__table__headings__col">

                                                    <Form.Label>Status</Form.Label>

                                                    <br/> 

                                                    <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                                        Preference
                                                    </Form.Label>
                                                    <Form.Control
                                                     as="select"
                                                     className="mr-sm-2"
                                                     id="inlineFormCustomSelect"
                                                     style = {{width: "130px"}}
                                                     custom
                                                    >
                                                    <option value="">Select</option>
                                                    <option value="Ready for Approval">Ready for Approval</option>
                                                    <option value="Scheduled">Scheduled</option>
                                                    </Form.Control>

                                                </Col>
 
                                                <Col className = "instructions__table__headings__col">

                                                    <Form.Label>Type</Form.Label>

                                                    <br/> 

                                                    <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                                        Preference
                                                    </Form.Label>
                                                    <Form.Control
                                                     as="select"
                                                     className="mr-sm-2"
                                                     id="inlineFormCustomSelect"
                                                     style = {{width: "130px"}}
                                                     custom
                                                    >
                                                    <option value="">Select</option>
                                                    <option value="Credit">Credit</option>
                                                    <option value="2">Debit</option>
                                                    </Form.Control>

                                                </Col>

                                            </Row>

                                        </Form>

                                    </Row>

                                    <br/>

                                    <Row className = "instructions__table__row__inner">

                                        <Col className = "instructions__table__col">
  
                                            <Table className = "text-center" responsive="md" style = {{marginBottom: "0px"}}>
                                                <thead className = "col">
                                                    <tr className = "gray__font white__space">
                                                        <th>#</th>
                                                        <th>From</th>
                                                        <th>To</th>
                                                        <th>Date <GoCalendar className = "date__icon ml-2"/> </th>
                                                        <th>Status</th>
                                                        <th>Amount <HiCurrencyDollar className = "amount__icon ml-2"/></th>
                                                    </tr>
                                                </thead>
                                                <tbody className = "font__500 white__space">
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Legal Expenses</td>
                                                        <td>Very Kool Company <BsArrowUpRight className = "very__kool__arrow"/> </td>
                                                        <td>Tommorow</td>
                                                        <td>
                                                            <Button style = {{backgroundColor: "#90bcb3", border: "none"}}>Ready for Approval</Button>
                                                       </td>
                                                       <td>$150 <IoIosArrowDown className = "arrow__down"/> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Legal Expensess</td>
                                                        <td>[Supplier #1]</td>
                                                        <td>25th December'20</td>
                                                        <td>
                                                            <Button style = {{backgroundColor: "#fbe192", border: "none"}}>Scheduled</Button>
                                                        </td>
                                                        <td>$210 <IoIosArrowDown className = "arrow__down"/></td>
                                                    </tr>
                                                </tbody>
  
                                            </Table>
                                        </Col>

                                    </Row>

                                    <br/>

                                    <Row>
                                        <Link to = "/pocket-view/instructions">
                                            <IoIosArrowBack className = "arrow__back"/>
                                        </Link>
                                        <div className = "counter text-light ml-2 mr-2">
                                            <p className  = "counter__number text-center">1</p>
                                        </div>
                                        <Link to = "/pocket-view/instructions">
                                            <IoIosArrowForward className = "arrow__forward"/>
                                        </Link>
                                    </Row>

                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
        
                                </Col>

                            </Row>

                            <br/>

                        </Col>

                    </Row>

            </div>

        </Container>
      
    </div>

  );
}

export default Instructions;
