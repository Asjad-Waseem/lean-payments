import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { FaUserTie } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { GrAdd } from 'react-icons/gr';
import { CgChevronRightO } from 'react-icons/cg';

import './ExecutiveView.css';

import Sider from '../../../layout/Sider';

import tooltip from '../../assets/tooltip.svg';
import Transfer from '../../assets/transfer.svg';

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

function ExecutiveView() {

    // Redux for graph was out of scope for this milestone, so I used random static data to show the working

    const collapsed = useSelector(state => state.collapsed.collapsed);

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [inflow, setInflow] = useState(false);
    const [outflow, setOutflow] = useState(false);
    const [durationState, setDurationState] = useState('3M');

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const width = windowDimensions.width;

    const onInflowState = () => {

        setInflow(inflow => !inflow);

    }

    const onOutflowState = () => {

        setOutflow(outflow => !outflow);

    }

    const onSet3MonthsDuration = () => {

        setDurationState('3M');

    }

    const onSet6MonthsDuration = () => {

        setDurationState('6M');
        
    }

    const onSet1YearDuration = () => {

        setDurationState('1Y');
        
    }

    const onSet2YearDuration = () => {

        setDurationState('2Y');
        
    }

    let data = {

        labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [

            {

                label: 'Revenue',
                data: [5, 4.5, 4, 4.25, 2, 2.5, 4.75, 4.6, 3.5, 4, 2.5, 5],                 
                backgroundColor: [
                    'transparent'
                ],
                borderColor: "#62a1e7",
                pointBorderColor: "#62a1e7",
                pointBackgroundColor: "#62a1e7",
                pointRadius: "4",

            },

            {

                label: 'Available Exp.',
                data: [4, 5, 2, 3.25, 1, 3.5, 2.75, 3.6, 4.5, 3, 1.5, 4],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: "#77d29d",
                pointBorderColor: "#77d29d",
                pointBackgroundColor: "#77d29d",
                pointRadius: "4"

            },

            {

                label: 'Actual Exp.',
                data: [1, 3, 4, 2.25, 3, 2.5, 3.75, 4.6, 3.5, 2, 3.5, 2],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: "#ec6161",
                pointBorderColor: "#ec6161",
                pointBackgroundColor: "#ec6161",
                pointRadius: "4"

            },

        ],

    }

    if(durationState === "3M") {

        data.datasets[0].data = [5, 4.5, 4, 4.25, 2, 2.5, 4.75, 4.6, 3.5, 4, 2.5, 5];
        data.datasets[1].data = [4, 5, 2, 3.25, 1, 3.5, 2.75, 3.6, 4.5, 3, 1.5, 4];
        data.datasets[2].data = [1, 3, 4, 2.25, 3, 2.5, 3.75, 4.6, 3.5, 2, 3.5, 2];

    }
        
    else if(durationState === "6M") {

        data.datasets[0].data = [2, 2.5, 5, 2.25, 1, 3.5, 2.75, 4.6, 2.5, 2, 3.5, 2];
        data.datasets[1].data = [3, 2, 1, 3.25, 2, 4.5, 3.75, 2.6, 1.5, 2, 4.5, 5];
        data.datasets[2].data = [5, 2, 2, 4.25, 5, 2.5, 3.75, 1.6, 4.5, 2, 1.5, 5];

    }

    else if(durationState === "1Y") {

        data.datasets[0].data = [4, 2, 2, 3.25, 4, 2.5, 3.75, 2.6, 4.5, 1, 4.5, 1];
        data.datasets[1].data = [2, 1, 4, 2.25, 3, 4.5, 1.75, 2.6, 3.5, 4, 2.5, 4];
        data.datasets[2].data = [1, 2, 4, 2.25, 3, 4.5, 2.75, 3.6, 4.5, 2, 3.5, 2];

    }

    else if(durationState === "2Y") {

        data.datasets[0].data = [3, 2.5, 5, 2.25, 2, 4.5, 2.75, 2.6, 1.5, 4, 2.5, 2];
        data.datasets[1].data = [2, 3, 1, 4.25, 2, 4.5, 4.75, 2.6, 4.5, 2, 4.5, 4];
        data.datasets[2].data = [2, 4, 2, 4.25, 4, 2.5, 3.75, 3.6, 2.5, 4, 2.5, 3];

    }

  return (

      <div className = "executive__view">

          <Sider/>

          <Container fluid className = "executive__layout__container">

              <div className = {collapsed && width >= 768 ? "executive__page__content":  
                               !collapsed && width >= 768 ? "executive__page__content__open":
                               "executive__page__content__1"}>            

                   <Row className = {width >= 768 ? "executive__view__container" : "executive__view__container__1"}>

                       <Col sm>

                                   <Row>

                                   <h4 className = "executive__view__dashboard">Dashboard</h4>

                                   <br/>

                                   </Row>

                                   <br/>

                               <Row>

                                   <Card as = {Col} md = "12" > 
                                       <Card.Body className = "space__between__flex">
                                           <div className = "column__flex mt-2">
                                               <Card.Title className = "greeting__name">Hi Nadir!</Card.Title>
                                               <Card.Subtitle className="greeting__statement mb-2">Welcome to your personal dashboard</Card.Subtitle>
                                           </div>
                                           <FaUserTie className = "user__avatar__icon"/>
                                       </Card.Body>
                                   </Card>

                                </Row>

                                <br/>

                                <Row className = "kool__company__overview">

                                    <Col>

                                        <Row>

                                            <Col className = "space__between__flex">
                                                <div className = {width > 600 ? "column__flex mt-4 ml-5" : "column__flex mt-4"}>
                                                    <h5 className = "executive__view__kool__company">Kool Company</h5>
                                                    <h6 className = "executive__view__overview">Overview</h6>
                                                </div>
                                                <div className = {width >= 600 ? "row__flex font__400 mt-4 mr-5" : "row__flex font__400 mt-4"}>
                                                    <Link to = "/dashboard/executive-view" onClick = {onSet3MonthsDuration}>

                                                    <p className = "graph__links ml-2">3M</p>
                                                        
                                                    </Link>
                                                    <Link to = "/dashboard/executive-view" className = "ml-3" onClick = {onSet6MonthsDuration}>

                                                    <p className = "graph__Links ml-2">6M</p>
                                                        
                                                    </Link>
                                                    <Link to = "/dashboard/executive-view" className = "ml-3" onClick = {onSet1YearDuration}>

                                                    <p className = "graph__links ml-2">1Y</p>
    
                                                    </Link>
                                                    <Link to = "/dashboard/executive-view" className = "ml-3" onClick = {onSet2YearDuration}>

                                                    <p className = "graph__links ml-2">2Y</p>
    
                                                    </Link>
                                                </div>
                                               
                                            </Col>

                                        </Row>

                                        <Row className = "graph__height">

                                            <Line data = {data} height = {50} width = {100} 
                                             options = 
                                                       {{ maintainAspectRatio: false, responsive: true, 
                                                          elements: {
                                                                      line: {
                                                                      tension: 0 // disables bezier curves
                                                                    }
                                                          },  

                                                          scales: {
                                                                    xAxes: [{
                                                                    ticks: { display: false },
                                                                    gridLines: {
                                                                    display: false,
                                                                    drawBorder: false
                                                                    },
                                                                    offset: true
                                                                    }],

                                                                    yAxes: [{
                                                                    ticks: { display: false },
                                                                    gridLines: {
                                                                    display: false,
                                                                    drawBorder: false
                                                                    },
                                                                    offset: true
                                                                    }]
                                                          }
 
                                                        }
  
                                                      }
   
                                            />

                                        </Row>

                                    </Col>

                                </Row>

                                <br/>

                                <Row>

                                    <Card as = {Col} md = "12" > 
                                        <Card.Body className = "space__between__flex">
                                            <div className = "column__flex mt-2">
                                                <div className = "row__flex">
                                                    <Card.Title className = "financial__standing">Financial Standing</Card.Title>
                                                  
                                                    <OverlayTrigger
                                                    className = "overlay"
                                                    key="top"
                                                    placement="top"
                                                    overlay={
                                                        <Tooltip id={`tooltip-top`}>
                                                            <p className = "tool__tip__message">Your financial standing is good when: Inflow > Outflow</p>
                                                        </Tooltip>
                                                      }
                                                    >

                                                    <img className = "tool__tip ml-2" src = {tooltip} alt = "tool-tip"/>
                             
                                                    </OverlayTrigger>

                                                </div>
                                                <Card.Subtitle className="standings__remarks mb-2">Good</Card.Subtitle>
                                            </div>

                                            <img className = "transfer__icon mt-2" src = {Transfer} alt = "move-money"/>
                                          
                                        </Card.Body>
                                    </Card>

                                </Row>

                                <br/>

                                <Row>

                                  <Col>

                                    <Card as = {Col} md = "12" className = {inflow ? "inflow__state" : "inflow"}> 
                                        <Card.Body className = "space__between__flex">
                                            <Link to = "/dashboard/executive-view" className = {inflow ? "row__flex text__light" : "row__flex text__dark"} onClick = {onInflowState}>    
                                                {!inflow ?
                                                <IoIosArrowForward className = "arrow__icons"/> 
                                                :
                                                <IoIosArrowDown className = "arrow__icons"/>
                                                } 
                                                <Card.Subtitle className = "inflow__outflow ml-2" style = {{marginTop: "-2px"}}>Inflow</Card.Subtitle>
                                            </Link>
                                            <Card.Subtitle className = "ml-2 text-muted" style = {{marginTop: "-2px"}}>$100</Card.Subtitle>                                          
                                        </Card.Body>
                                    </Card>

                                  </Col>

                                </Row>

                                {inflow ?

                                <Row className = "mt-3">

                                  <Col md = "12">

                                  <Card as = {Col} md = "12" className = "pocket__overview__card">
                                      <Card.Body>

                                          <div className = "pocket__heading space__between__flex">

                                              <p>Pocket Name</p>

                                              <p>Balance</p>

                                          </div>

                                          <hr className = "divider__styling" />

                                          <div className = "space__between__flex">

                                              <div className = "row__flex">

                                                  <CgChevronRightO className = "sub__pockets__icon" />

                                                  <Link to = "/kool-company/newly-created-pockets" className = "pocket__sub__heading text__dark ml-1 mb-3">Bank Service Charges</Link>

                                              </div>

                                              <p className = "pocket__sub__heading gray__font">$30</p>

                                          </div>

                                          <hr className = "divider__styling"/>

                                          <div className = "space__between__flex">

                                              <div className = "row__flex">

                                                  <CgChevronRightO className = "sub__pockets__icon" />

                                                  <Link to = "/kool-company/newly-created-pockets" className = "pocket__sub__heading text__dark ml-1 mb-3">Legal Expenses</Link>

                                              </div>

                                              <p className = "pocket__sub__heading gray__font">$50</p>
                                       
                                          </div>

                                          <hr className = "divider__styling"/>

                                          <div className = "space__between__flex last__sub__pocket">

                                              <div className = "row__flex">

                                              <CgChevronRightO className = "sub__pockets__icon" />

                                              <Link to = "/kool-company/newly-created-pockets" className = "pocket__sub__heading text__dark ml-1 mb-3">Supplier 1</Link>

                                          </div>

                                          <p className = "pocket__sub__heading gray__font">$20</p>
                                       
                                          </div>

                                      </Card.Body>
                                  </Card>

                                  </Col>

                                </Row>

                                : null}

                                <br/>

                                <Row>

                                  <Col>

                                  <Card as = {Col} md = "12" className = {outflow ? "outflow__state" : "outflow"}> 
                                        <Card.Body className = "space__between__flex">
                                            <Link to = "/dashboard/executive-view" className = {outflow ? "row__flex text__light" : "row__flex text__dark"} onClick = {onOutflowState}>    
                                                {!outflow ?
                                                <IoIosArrowForward className = "arrow__icons"/> 
                                                :
                                                <IoIosArrowDown className = "arrow__icons"/>
                                                } 
                                                <Card.Subtitle className = "inflow__outflow ml-2" style = {{marginTop: "-2px"}}>Outflow</Card.Subtitle>
                                            </Link>
                                            <Card.Subtitle className = "ml-2 text-muted" style = {{marginTop: "-2px"}}>$30</Card.Subtitle>                                          
                                        </Card.Body>
                                    </Card>

                                  </Col>

                                </Row>

                                {outflow ?

                                <Row className = "mt-3">

                                    <Col md = "12">

                                        <Card as = {Col} md = "12" className = "pocket__overview__card">
                                            <Card.Body>

                                                <div className = "pocket__heading space__between__flex">

                                                    <p>Pocket Name</p>

                                                    <p>Balance</p>

                                                </div>

                                                <hr className = "divider__styling"/>

                                                <div className = "space__between__flex">

                                                    <div className = "row__flex">

                                                        <CgChevronRightO className = "sub__pockets__icon"/>

                                                        <Link to = "/kool-company/newly-created-pockets" className = "pocket__sub__heading text__dark ml-1 mb-3">Bank Service Charges</Link>

                                                    </div>

                                                    <p className = "pocket__sub__heading gray__font">$10</p>

                                                </div>

                                                <hr className = "divider__styling"/>

                                                <div className = "space__between__flex">

                                                    <div className = "row__flex">

                                                        <CgChevronRightO className = "sub__pockets__icon"/>

                                                        <Link to = "/kool-company/newly-created-pockets" className = "pocket__sub__heading text__dark ml-1 mb-3">Legal Expenses</Link>

                                                    </div>

                                                    <p className = "pocket__sub__heading gray__font">$10</p>
       
                                                </div>

                                                <hr className = "divider__styling"/>

                                                <div className = "space__between__flex last__sub__pocket">

                                                    <div className = "row__flex">

                                                        <CgChevronRightO className = "sub__pockets__icon"/>

                                                         <Link to = "/kool-company/newly-created-pockets" className = "pocket__sub__heading text__dark ml-1 mb-3">Supplier 1</Link>

                                                    </div>

                                                    <p className = "pocket__sub__heading gray__font">$10</p>
       
                                                </div>

                                            </Card.Body>
                                        </Card>
     
                                    </Col>

                                </Row>

                                : null}

                                <br/>
 
                                <br/>

                                <Row>

                                    <Card as = {Col} md = "12" className = "businesses__card"> 
                                        <Card.Body className = "mt-3 mb-3" >
                                            <Card.Subtitle className = "executive__view__businesses">Businesses</Card.Subtitle>
                                            <Card.Subtitle className = "businesses__statement mt-1 text-muted">These are the list of businesses you have created thus far.</Card.Subtitle>
                                                <br/>
                                                <Row className = "businesses__card__row">
                                                <Card as = {Col} sm style = {{borderRadius: "0px 0px 0px 0px", border: "2px solid #c3cfd9"}}>
                                                    <Card.Body>
                                                        <div className = "edit">
                                                            <p className = "executive__business__name">Kool Company</p>
                                                            <Link to = "/dashboard/executive-view">
                                                                <p className = "executive__business__info blue__font">Edit</p>
                                                            </Link>
                                                        </div>
                                                        <div className = "executive__business__info date">
                                                            <p className = "date__created">Date Created:</p>
                                                            <p className = " text__dark ml-2">December 23, 2018</p>
                                                        </div>

                                                        <Link to = "/dashboard/executive-view">
                                                        <u to = "/dashboard/executive-view" className = "approved">Approved</u>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>    
                                                <Card as = {Col} className = {width >= 576 ? "ml-4" : "mt-3"} style = {{borderRadius: "0px 0px 0px 0px", border: "2px solid #c3cfd9"}}>
                                                    <Card.Body>
                                                        <div className = "create__business__account">
                                                            <Card.Subtitle className = "business__account">Create Business Account</Card.Subtitle>
                                                            <Link to = "/dashboard/executive-view">
                                                                <GrAdd className = "add__icon"/>
                                                            </Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card> 
                                                </Row>                                            
                                        </Card.Body>
                                    </Card>

                                </Row>
 
                                <br/>

                        </Col>

                    </Row>

              </div>

            </Container>

      </div>

  );
}

export default ExecutiveView;
