import React from 'react';
import { Link } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';
import { RiSettings5Fill } from 'react-icons/ri';

import './MemberName.css';

function MemberName(props) {
  return (
    <td className = "name__col">

        <FaUserCircle className = "business__member__icon mr-2" />
            <span className = 'business__member'>{props.name}</span>
            <Link to = "/member-information">
                <RiSettings5Fill className = "business__member__settings__icon ml-2" />
            </Link>
      
    </td>
  )
}

export default MemberName;
