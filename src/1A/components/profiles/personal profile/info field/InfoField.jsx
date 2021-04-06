import React from 'react';

import './InfoField.css';

function InfoField(props) {

  return (

    <div className = "info__component">

        <p className = "info__title">{props.title}</p>
        <p className = "info__details">{props.info}</p>

   </div>

  );
}

export default InfoField;
