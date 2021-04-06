import React from 'react';
import { Button } from 'react-bootstrap';

import './ProfileButton.css';

function ProfileButton(props) {
  return (

    <Button className = "profile__btn" onClick = {props.onClick}><p className = "profile__btn__txt">{props.text}</p></Button>

  );
}

export default ProfileButton;
