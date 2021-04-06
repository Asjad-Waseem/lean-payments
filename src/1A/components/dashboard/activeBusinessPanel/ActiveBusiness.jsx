import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Card, Form, Table } from 'react-bootstrap';

import './ActiveBusiness.css';

function ActiveBusiness() {

  return (
    
    <Card as = {Col} md = "12"> 
        <Card.Body className = "mt-2">
            <Card.Title className = "active__business">Active Business Panel</Card.Title>
                <Row className = "active__business__table__row mr-2"> 
                    <Col>
                        <Row className = "active__business__table__row__inner">
                            <Col className = "active__business__table__col">
                                <Table className = "text-center" responsive="md" style = {{marginBottom: "0px"}}>
                                    <thead className = "col">
                                        <tr className = "active__business__header white__space">
                                            <th>Business Name</th>
                                            <th>Description of Business</th>
                                            <th>Date Created</th>
                                            <th>Access</th>
                                            <th>Profile Progress</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className = "active__business__record white__space">
                                        <tr>
                                            <td><Link className = "edit__active__business" to = "/business-profile">Kevin L.L.C</Link></td>
                                            <td>Oil & Energy</td>
                                            <td>11/21/2020</td>
                                            <td>Admin</td>
                                            <td>10%</td>                                                    
                                            <td>Pending</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                    <div className = "switch__active__business__row">
                                        <Form>
                                            <Col>
                                                <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                                    Preference
                                                </Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    className="switch__active__business__drpdwn mr-sm-2"
                                                    id="inlineFormCustomSelect"
                                                    custom
                                                >
                                                    <option value="">Switch Active Business</option>
                                                    <option value="Kevin L.L.C">Kevin L.L.C</option>
                                                    <option value="Kevin L.L.C">Kevin L.L.C</option>
                                                    <option value="Kevin L.L.C">Kevin L.L.C</option>
                                                </Form.Control>
                                            </Col>
                                        </Form>
                                    </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>     
            </Card.Body>
    </Card>
    
  );
}

export default ActiveBusiness;
