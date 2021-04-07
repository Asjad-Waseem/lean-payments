import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Modal, Form, Button } from 'react-bootstrap';
import { MdCreateNewFolder } from 'react-icons/md';
import { CgChevronRightO } from 'react-icons/cg';
import { RiSettings5Fill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

import './NewPockets.css';
import './NewPocketsModal.css';

import { IoCloseSharp } from 'react-icons/io5';

import Sider from '../../../layout/Sider';

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

function NewPockets() {

    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);

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
    <div className = "new__pockets">

        <Sider/>

        <Container fluid className = "new__pockets__layout__container">

            <div className = {collapsed && width >= 768 ? "new__pockets__page__content":  
                              !collapsed && width >= 768 ? "new__pockets__page__content__open":
                              "new__pockets__page__content__1"}>            

                <Row className = {width >= 768 ? "new__pockets__container" : "new__pockets__container__1"}>

                    <Col md = "10" className = "new__pockets__column">

                        <Row>

                            <h4 className = "bold__font">Pockets - What are they?</h4>
                            <p className = "pockets__text mt-1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <br/>

                        </Row>

                        <Row className = "mt-2">
                    
                            <p className = "gray__font font__13 font__500">Pocket's Overview</p>

                        </Row>

                        <Row>

                            <Card as = {Col} md = "12" className = "pocket__overview__card">
                                <Card.Body>

                                    <div className = "space__between__flex gray__font font__13 font__bold">

                                        <p>Pocket Name</p>

                                        <p>Allocation %</p>

                                    </div>

                                    <hr className = "divider__styling"/>

                                    <div className = "space__between__flex">

                                        <div className = "create__pocket">

                                            <MdCreateNewFolder className = "create__pocket__icon"/>

                                            <u className = "link__style">

                                            <Link to = "/kool-company/newly-created-pockets" className = "font__13 font__500 ml-1" onClick={() => setModalShow(true)}>Create Pocket</Link>

                                            <>
                                               
                                                <Modal
                                                 size="md"
                                                 aria-labelledby="contained-modal-title-vcenter"
                                                 centered
                                                 show={modalShow}
                                                 onHide={handleClose}
                                                >
                                                    <Modal.Header>
                                                        <IoCloseSharp className = "modal__close__icon" onClick = {handleClose}/>
                                                    <Modal.Title id="contained-modal-title-vcenter"/>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <h5 className = "modal__heading text-center">Create Pocket</h5>
                                                        <h6 className = "modal__gray__color text-center">
                                                            Lorem Ipsum Dolar
                                                        </h6>

                                                        <Form className = "ml-4">

                                                            <input type="radio" id="male" name="gender" value="male"/>
                                                            <label className = "font__14 font__500 text__dark ml-2">Automatically</label>
                                                            <br/>
                                                            <p className = "accounting__quickbooks">We connect to your accounting system using Quickbooks, and</p>
                                                            <input type="radio" id="female" name="gender" value="female"/>
                                                            <label className = "font__14 text__dark font__500 ml-2">Manual</label>
                                                            <br/>
                                                            <p className = "manual__text">Lorem Ipsum Dolar</p>
                                                        </Form>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button className = "continue text-light">Continue</Button>
                                                    </Modal.Footer>
                                                    </Modal>

                                            </>

                                            </u>

                                        </div>

                                    </div>

                                    <hr className = "divider__styling"/>

                                    <div className = "space__between__flex">

                                    <div className = "row__flex white__space">

                                        <CgChevronRightO className = "sub__pockets__icon"/>

                                        <Link to = "/kool-company/newly-created-pockets" className = "text__dark font__13 font__500 ml-1 mb-3">Bank Service Charges</Link>

                                        <RiSettings5Fill className = "settings__icon ml-2"/>

                                    </div>

                                        <p className = "gray__font font__13 font__500">10%</p>

                                    </div>

                                    <hr className = "divider__styling"/>

                                    <div className = "space__between__flex">

                                    <div className = "row__flex">

                                        <CgChevronRightO className = "sub__pockets__icon"/>

                                        <Link to = "/kool-company/newly-created-pockets" className = "text__dark font__13 font__500 ml-1 mb-3">Legal Expenses</Link>

                                        <RiSettings5Fill className = "settings__icon ml-2"/>

                                    </div>

                                        <p className = "gray__font font__13 font__500">10%</p>
                                       
                                    </div>

                                        <hr className = "divider__styling"/>

                                    <div className = "space__between__flex">

                                    <div className = "row__flex">

                                        <CgChevronRightO className = "sub__pockets__icon" />

                                        <Link to = "/kool-company/newly-created-pockets" className = "text__dark font__13 font__500 ml-1 mb-3">Supplier 1</Link>

                                        <RiSettings5Fill className = "settings__icon ml-2"/>

                                    </div>

                                        <p className = "gray__font font__13 font__500">15%</p>
                                       
                                    </div>

                                        <hr className = "divider__styling"/>

                                    <div className = "last__subpocket__row">

                                    <div className = "row__flex">

                                        <CgChevronRightO className = "sub__pockets__icon"/>

                                        <Link to = "/kool-company/newly-created-pockets" className = "text__dark font__13 font__500 ml-1 mb-3">[New Pocket]</Link>

                                        <RiSettings5Fill className = "settings__icon ml-2"/>

                                    </div>
 
                                        <p className = "gray__font font__13 font__500">15%</p>
                                      
                                    </div>

                                </Card.Body>
                            </Card>
  
                        </Row>

                    </Col>

                </Row>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>

        </Container>

    </div>

  );
}

export default NewPockets;
