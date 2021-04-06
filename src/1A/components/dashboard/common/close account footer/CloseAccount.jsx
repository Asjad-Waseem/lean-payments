import React from 'react';
import { Link } from 'react-router-dom';

import './CloseAccount.css';

function CloseAccount() {
  return (
    <footer className = "close__account mt-5">
        <p className = "close__account__txt">If you would like to close your account, you can <Link className = "close__account__link" to = "/get-in-touch">get in touch</Link> or call us at <span className = "close__account__link">+1 855 747 LEAN (5326).</span></p>
    </footer> 
  );
}

export default CloseAccount;
