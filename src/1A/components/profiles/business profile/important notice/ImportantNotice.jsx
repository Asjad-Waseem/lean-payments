import React from 'react';
import { Link } from 'react-router-dom';

import './ImportantNotice.css';

function ImportantNotice() {
  return (

    <p className = "important__notice">Important: In order to manage payments, please add all Board of directors and stakeholders with more than 25% ownnership <Link className = "here" to = "/here">here.</Link></p>
    
  )
}

export default ImportantNotice;
