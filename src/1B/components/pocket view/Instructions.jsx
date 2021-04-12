import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Container, Row, Col, OverlayTrigger, Tooltip, Button, Form, Table } from 'react-bootstrap';

import Sider from '../../../layout/Sider';
import LineChart from './line chart/LineChart';
import Opex from '../../assets/businesses.png';
import tooltip from '../../assets/tooltip.svg';
import Transfer from '../../assets/transfer.svg';

import { useSelector, useDispatch } from 'react-redux';

import { GoCalendar } from 'react-icons/go';
import { HiCurrencyDollar } from 'react-icons/hi';
import { BsArrowUpRight } from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { selectInstructionsOverview, selectTransactionsOverview } from '../../../actions/instructionsActions';
import { submitMovingMoneyDetails } from '../../../actions/moveMoneyActions';

import './Instructions.css';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

function Instructions() {

    const collapsed = useSelector(state => state.collapsed.collapsed);

    const transactionsOverview = useSelector(state => state.instructions.transactions_overview);
    const instructionsOverview = useSelector(state => state.instructions.instructions_overview);

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

    const onSelectTransactions = () => dispatch(selectTransactionsOverview());
    const onSelectInstructions = () => dispatch(selectInstructionsOverview());

    const onSubmit = (moveMoneyDetails) => {

          const finalData = {

              from: moveMoneyDetails.from,
              to: moveMoneyDetails.to,
              date: moveMoneyDetails.date,
              status: moveMoneyDetails.status,
              type: moveMoneyDetails.type
            
          }

    dispatch(submitMovingMoneyDetails(finalData));

    reset();

  }

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

                                <p className = "opex__text mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            </Row>

                            <br/>

                            <Row className = "legal__expenses__row">

                                <Col>

                                    <Row>

                                        <Col className = "space__between__flex">
                                            <div className = {width > 600 ? "column__flex mt-4 ml-5" : "column__flex mt-4"}>
                                                <h3 className = "legal__expenses">Legal Expenses</h3>
                                                <h4 className = "overview__1">Overview</h4>
                                            </div>
                                            <h2 className = {width >= 600 ? "transactions__amount mt-4 mr-5" : "transactions__amount mt-4"}>$200.00 CAD</h2>

                                        </Col>

                                    </Row>

                            <Row className = "line__chart__row">
                              
                                <LineChart />

                            </Row>

                                </Col>

                            </Row>

                            <br/>
                            
                            <Row className = "instructions__nav__link mt-3">

                                <u>
                                <Link className = "instructions__links" to = "/pocket-view/instructions" onClick = {onSelectTransactions} style = {{color: transactionsOverview}}>Transactions Overview</Link>
                                </u>

                                <u> 
                                <Link className = "instructions__link" to = "/pocket-view/instructions" className =  {width >= 450 ? "ml-4" : "nav__link__1"}  onClick = {onSelectInstructions} style = {{display: "inline", color: instructionsOverview}}>Instructions Overview</Link>
                                </u>

                            </Row>

                            <br/>

                            <Row className = "instructions__overview">
                              
                                <div className = "instructions__heading__1">

                                    <p className = "instructions instructions__heading__2">Instructions</p>
                                    <p className = "overview instructions__heading__2">Overview</p>
                           
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

                                         <img className = {width >=620 ? "tool__tip__1 ml-2" : "tool__tip__1"} src = {tooltip} alt = "tool-tip"/>
        
                                        </OverlayTrigger>

                                </div>

                                <Button className = "move__money" variant = "primary" onClick = {handleSubmit(onSubmit)}>  
                                    <img className = "move__money__icon mr-2" src = {Transfer} alt = "move-money"/>Move Money                    
                                </Button>                       

                            </Row>

                            <br/>

                            <Row className = "instructions__table__row"> 
                              
                                <Col>

                                    <Row className = "instructions__table__container"> 

                                        <Form onSubmit={handleSubmit(onSubmit)}>

                                            <Row className = "instructions__table__headings">

                                                <Col lg className = "instructions__table__headings__col">

                                                    <Form.Label className = "input__label text__dark">From</Form.Label>

                                                    <br/> 

                                                    <Form.Control
                                                     as="select"
                                                     className = {errors.from ? "is-invalid mr-sm-2" : "mr-sm-2"} 
                                                     name = "from"
                                                     style = {width < 992 ? {width: "100%"} : {width: "130px"}}
                                                     ref={register ( { required: true } ) }
                                                     custom
                                                     >
                                                     <option value="">Select</option>
                                                     <option value="Legal Expenses">Legal Expenses</option>
                                                     <option value="Bank Charges">Bank Charges</option>
                                                     <option value="Supplier #1">Supplier #1</option>
                                                    </Form.Control>

                                                    <div className = "text-danger">
                                                        {errors.from && errors.from.type === "required" && <span>This field is required</span>}
                                                    </div>

                                                </Col>

                                                <Col lg className = "instructions__table__headings__col">

                                                    <Form.Label className = "input__label text__dark">To</Form.Label>

                                                    <br/>

                                                    <Form.Control
                                                     as="select"
                                                     className = {errors.to ? "is-invalid mr-sm-2" : "mr-sm-2"} 
                                                     name = "to"
                                                     style = {width < 992 ? {width: "100%"} : {width: "130px"}}
                                                     ref={register ( { required: true } ) }
                                                     custom
                                                    >
                                                    <option value="">Select</option>
                                                    <option value="Very Kool Company">Very Kool Company</option>
                                                    <option value="Supplier #1">Supplier #1</option>
                                                    <option value="3">Legal Expenses</option>
                                                    </Form.Control>
                                                    
                                                    <div className = "text-danger">
                                                        {errors.to && errors.to.type === "required" && <span>This field is required</span>}
                                                    </div>

                                                </Col>

                                                <Col lg className = "instructions__table__headings__col date__col">

                                                    <Form.Label className = "input__label text__dark">Date</Form.Label>

                                                    <br/> 

                                                    <Form.Control
                                                     type="date"
                                                     className = {errors.date ? "is-invalid mr-sm-2" : "mr-sm-2"} 
                                                     name = "date"
                                                     style = {width < 992 ? {width: "100%"} : {width: "200px"}}
                                                     ref={register ( { required: true } ) }
                                                    >
                                                    </Form.Control>

                                                    <div className = "text-danger">
                                                        {errors.date && errors.date.type === "required" && <span>This field is required</span>}
                                                    </div>

                                                </Col>

                                                <Col lg className = "instructions__table__headings__col">

                                                    <Form.Label className = "input__label text__dark">Status</Form.Label>

                                                    <br/> 

                                                    <Form.Control
                                                     as="select"
                                                     className = {errors.status ? "is-invalid mr-sm-2" : "mr-sm-2"} 
                                                     name = "status"
                                                     style = {width < 992 ? {width: "100%"} : {width: "130px"}}
                                                     ref={register ( { required: true } ) }
                                                     custom
                                                    >
                                                    <option value="">Select</option>
                                                    <option value="Ready for Approval">Ready for Approval</option>
                                                    <option value="Scheduled">Scheduled</option>
                                                    </Form.Control>

                                                    <div className = "text-danger">
                                                        {errors.status && errors.status.type === "required" && <span>This field is required</span>}
                                                    </div>

                                                </Col>
 
                                                <Col lg className = "instructions__table__headings__col">

                                                    <Form.Label className = "input__label text__dark">Type</Form.Label>

                                                    <br/> 

                                                    <Form.Control
                                                     as="select"
                                                     className = {errors.type ? "is-invalid" : null} 
                                                     name = "type"
                                                     style = {width < 992 ? {width: "100%"} : {width: "130px"}}
                                                     ref={register ( { required: true } ) }
                                                     custom
                                                    >
                                                    <option value="">Select</option>
                                                    <option value="Credit">Credit</option>
                                                    <option value="2">Debit</option>
                                                    </Form.Control>

                                                    <div className = "text-danger">
                                                        {errors.type && errors.type.type === "required" && <span>This field is required</span>}
                                                    </div>

                                                </Col>

                                            </Row>

                                        </Form>

                                    </Row>

                                    <br/>

                                    <Row className = "instructions__table__row__inner">

                                        <Col className = "instructions__table__col">
  
                                            <Table className = "text-center" responsive="md" style = {{marginBottom: "0px"}}>
                                                <thead className = "col">
                                                    <tr className = "instructions__overview__header">
                                                        <th>#</th>
                                                        <th>From</th>
                                                        <th>To</th>
                                                        <th>Date <GoCalendar className = "date__icon ml-2"/> </th>
                                                        <th>Status</th>
                                                        <th>Amount <HiCurrencyDollar className = "amount__icon ml-2"/></th>
                                                    </tr>
                                                </thead>
                                                <tbody className = "instructions__overview__record">
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
