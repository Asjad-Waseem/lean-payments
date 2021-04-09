import React from 'react';

import { Button } from 'react-bootstrap';

import './MemberStatus.css';

function MemberStatus() {
  return (
    <td>
        <Button className = "pending__btn" style= {{backgroundColor: "#FFB946", fontSize: "11px", fontFamily: "Poppins", fontWeight: "500", letterSpacing: "0.02em", border: "#FFB946", borderRadius: "5px", width: "84px"}}>Pending</Button>
    </td>
  )
}

export default MemberStatus;

