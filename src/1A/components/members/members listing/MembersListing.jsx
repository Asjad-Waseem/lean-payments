import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Col, Table } from 'react-bootstrap';

import { HiUserAdd } from 'react-icons/hi';

import MembersName from './member name/MemberName';
import MemberStatus from './member status/MemberStatus';
import AddMember from '../add member/AddMember';

import './MembersListing.css';

function MembersListing() {

    const [showModal, setShowModal] = useState(false);

    const onHandleClose = () => setShowModal(false);

    const onModalShow = () => setShowModal(true);

  return (
    
                            <Col className = "members__listing">
                                <Table className = "text-center" responsive="lg" style = {{marginBottom: "0px"}}>
                                    <thead className = "col">
                                        <tr className = "members__listing__header white__space">
                                            <th className = "name__column">Name</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Role</th>
                                            <th style = {{textAlign: "right"}}>Approver?</th>
                                        </tr>
                                    </thead>
                                    <tbody className = "members__listing__record white__space">
                                        <tr className = "approver__col" style = {{borderBottom: "1px solid rgba(0,0,0,.125)"}}>
                                            <td className = "name__column" style = {{width: "270px"}}>
                                                <Link className = "add__member" to = "/add-members" onClick={onModalShow}>
                                                    <HiUserAdd className = "add__member__icon mr-2"/>
                                                    Add Member
                                                </Link>
                                            </td>  
                                            <td/><td/><td/><td/>                                           
                                        </tr>
                                        <AddMember modalShow = {showModal} handleClose = {onHandleClose} />
                                        <tr>
                                            <MembersName name = "Kevin Lee" />
                                            <td className = "member__details">kevin@gmail.com</td>
                                            <MemberStatus />
                                            <td className = "member__details">Admin</td>
                                            <td className = "member__details approver__col">No</td>
                                        </tr>
                                        <tr>
                                            <MembersName name = "Nadir Ibrahim" />
                                            <td className = "member__details">nadir@gmail.com</td>
                                            <MemberStatus />
                                            <td className = "member__details">Viewer</td>
                                            <td className = "member__details approver__col">No</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
    
  );
}

export default MembersListing;
