import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button, Modal, Nav } from 'react-bootstrap';

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosBusiness } from 'react-icons/io';
import { HiHome, HiUserGroup } from 'react-icons/hi';
import { RiSendPlaneFill } from 'react-icons/ri';
import { AiOutlineContainer, AiOutlineGlobal } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';

import './Sider.css';

import { collapsedState, 
         selectDashboard,
         selectFinancialPosition,
         selectMembers,
         selectPayees,
         selectPockets,
         selectGlobalPayees } from '../actions/siderbarActions';

import logo from '../1B/assets/Logo w.text Wht.svg';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

function Sider() {

    const history = useHistory();
    const url = history.location.pathname;

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const width = windowDimensions.width;

    const dispatch = useDispatch();

    const onCollapse = () => dispatch(collapsedState());

    const collapsed = useSelector(state => state.collapsed.collapsed);
    const siderLinkStates = useSelector(state => state.siderLinks);

    const dashboardColor = siderLinkStates.dashboard;
    const financialPositionColor = siderLinkStates.financial_position;
    const membersColor = siderLinkStates.members;
    const payeesColor = siderLinkStates.payees;
    const pocketsColor = siderLinkStates.pockets;
    const globalPayeesColor = siderLinkStates.global_payees;

    const onSelectDashboard = () => dispatch(selectDashboard());
    const onSelectFinancialPosition = () => dispatch(selectFinancialPosition());
    const onSelectMembers = () => dispatch(selectMembers());
    const onSelectPayees = () => dispatch(selectPayees());
    const onSelectPockets = () => dispatch(selectPockets());
    const onSelectGlobalPayees = () => dispatch(selectGlobalPayees());
   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (

    <>

    {width <= 767 ?  

    <>

       <Button className = "hamburger__btn__1A" variant = "link" onClick = {handleShow} style = {{display: "flex", flexDirection: "row"}}>

        <Nav.Link>

          <GiHamburgerMenu className = "hamburger__icon__1A__1" />

        </Nav.Link>

       </Button>

       <Modal className = "modal left" show={show} onHide={handleClose} animation = {false}>
        <Modal.Header>
          <Modal.Title>

          <Button className = "hamburger__btn__1A" variant = "link" onClick = {handleClose} style = {{display: "flex", flexDirection: "row"}}>

              <Nav.Link>

                <GiHamburgerMenu className = "hamburger__icon__1A__2" />

              </Nav.Link>

                <img className = "lp__logo__1A__1" src = {logo} alt = "lean-payments"/>

          </Button>

          </Modal.Title>
        </Modal.Header>
         <Modal.Body>

          <div className = "user__avatar__1A__1">

            <Link className = "user__link__1A" to = "/profile">

              <FaUserCircle className = "avatar__icon__open__1A__1" />

              <div className = "user__info__1A__1">
              <p className = "name__1A">Vishal Bhatia</p> 
              <p className = "email__1A">koolguy@gmail.com</p>
              </div>
    
            </Link>

          </div>

           <br/>

            <Link to = "/dashboard" style = {{color: dashboardColor}} onClick = {onSelectDashboard}>

              <HiHome className = "dashboard__icon__open__1A__1"/>

              <p className = "dashboard__link__1A__1">Dashboard</p> 

            </Link>

           <br/>

            <Link to = "/dashboard/executive-view" style = {{color: financialPositionColor}} onClick = { onSelectFinancialPosition }>

              <IoIosBusiness className = "businesses__icon__open__1A__1"/>

              <p className = "financial__position__link__1">Financial Position</p> 

            </Link>

            <br/>

            <Link to = "/member-information" style = {{color: membersColor}} onClick = {onSelectMembers}>

             <HiUserGroup className = "members__icon__1A__1"/> 

              <p className = "members__link__1A__1">Members</p> 

            </Link>

            <br/> 

            <Link to = {url} style = {{color: payeesColor}} onClick = {onSelectPayees}>

             <RiSendPlaneFill className = "payees__icon__1A__1"/>  

              <p className = "payees__link__1A__1">Payees</p> 

            </Link>

            <br/>

            <Link to = {url} style = {{color: pocketsColor}} onClick = {onSelectPockets}>

             <AiOutlineContainer className = "pockets__icon__1A__1"/>  

              <p className = "pockets__link__1A__1">Pockets</p> 

            </Link>

           <hr className = "divider__open__1A__1" />

           <br/>

            <Link to = {url} style = {{color: globalPayeesColor}} onClick = {onSelectGlobalPayees}>

             <AiOutlineGlobal className = "global__payees__icon__1"/> 

              <p className = "global__payees__link__1">Global Payees</p>

            </Link>

            <br/>

            <Link to = "/login" style = {{color: "#b7bec4"}}>

              <BiLogOut className = "log__out__icon__open__1A__1"/>

              <p className = "log__out__link__1A__1">Logout</p>
        
            </Link>  

        </Modal.Body> 
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>  

      </>

      : null}

      {width >= 768 ? 

      <div className = {collapsed ? "sidebar__1A" : "open__sidebar__1A"}>

        <ul className = {collapsed ? "sidebar__nav__1A" : "open__sidebar__nav__1A"}>

          <Button className = "hamburger__btn__1A" variant = "link" onClick = {onCollapse} style = {{display: "flex", flexDirection: "row"}}>

            <Nav.Link>

                <GiHamburgerMenu className = {collapsed ? "hamburger__icon__1A" : "hamburger__icon__open__1A"} style = {{height: "20px", width: "20px", marginLeft: "-5px", marginTop: "20px"}} />

            </Nav.Link>

            {!collapsed ?
    
              <img className = "lp__logo__1A" src = {logo} alt = "lean-payments"/>
    
            : null}

          </Button>

          <br/>

          <div className = "user__avatar">

            <Link className = "user__link" to = "/profile">

              <FaUserCircle className = {collapsed ? "avatar__icon__1A" : "avatar__icon__open__1A"} />

            {!collapsed ?

              <div className = "user__info__1A">
              <p className = "name__1A">Vishal Bhatia</p> 
              <p className = "email__1A">koolguy@gmail.com</p>
              </div>
    
            : null}

            </Link>

          </div>

          <br/>

            <Link to = "/dashboard" style = {{color: dashboardColor}} onClick = {onSelectDashboard}>

              {collapsed ? <HiHome className = "dashboard__icon__1A"/> : <HiHome className = "dashboard__icon__open__1A"/>}

            {!collapsed ? 

              <p className = "dashboard__link__1A">Dashboard</p> 

            : null}

            </Link>

            <br/>

            <Link to = "/dashboard/executive-view" style = {{color: financialPositionColor}} onClick = {() => { onSelectFinancialPosition(); }}>

             {collapsed ? <IoIosBusiness className = "businesses__icon__1A"/> : <IoIosBusiness className = "businesses__icon__open__1A"/>}
         
            {!collapsed ? 

              <p className = "financial__position__link">Financial Position</p> 

            : null}

            </Link>

            <br/>

            <Link to = "/member-information" style = {{color: membersColor}} onClick = {onSelectMembers}>

             {collapsed ? <HiUserGroup className = "members__icon__1A"/> : <HiUserGroup className = "members__icon__1A__open"/>}

            {!collapsed ? 

              <p className = "members__link__1A">Members</p> 

            : null}

            </Link>

            <br/> 

            <Link to = {url} style = {{color: payeesColor}} onClick = {onSelectPayees}>

             {collapsed ? <RiSendPlaneFill className = "payees__icon__1A"/> : <RiSendPlaneFill className = "payees__icon__open__1A"/>}

            {!collapsed ? 

              <p className = "payees__link__1A">Payees</p> 

            : null}

            </Link>

            <br/>

            <Link to = {url} style = {{color: pocketsColor}} onClick = {onSelectPockets}>

             {collapsed ? <AiOutlineContainer className = "pockets__icon__1A"/> : <AiOutlineContainer className = "pockets__icon__open__1A"/>}

            {!collapsed ? 

             <p className = "pockets__link__1A">Pockets</p> 

            : null}

            </Link>

          <hr className = {collapsed ? "divider__1A" : "divider__open__1A"} />

          <br/>

            <Link to = {url} style = {{color: globalPayeesColor}} onClick = {onSelectGlobalPayees}>

              {collapsed ? <AiOutlineGlobal className = "global__payees__icon"/> : <AiOutlineGlobal className = "global__payees__icon__open" />}

            {!collapsed ?

              <p className = "global__payees__link">Global Payees</p>

            : null}

            </Link>

           <br/>    

            <Link to = "/login" style = {{color: "#b7bec4"}}>

              {collapsed ? <BiLogOut className = "log__out__icon__1A"/> : <BiLogOut className = "log__out__icon__open__1A" />}

            {!collapsed ?

              <p className = "log__out__link__1A">Logout</p>

            : null}

            </Link>

          <br/>

        </ul>
 
      </div> 

      : null}

      </>

  );
}

export default Sider;
