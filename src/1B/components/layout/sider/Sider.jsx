import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button, Modal, Nav } from 'react-bootstrap';

import { IoIosBusiness } from 'react-icons/io';
import { HiHome, HiUserGroup } from 'react-icons/hi';
import { MdAddBox } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri';
import { AiOutlineContainer } from 'react-icons/ai';
import { CgChevronRightO } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

import './Sider.css';

import { collapsedState, 
         selectDashboard,
         selectBusinesses,
         createABusiness,
         selectKoolCompany,
         selectPayees,
         selectMembers,
         selectPockets,
         selectOpex,
         selectTax,
         selectOwnersComp } from '../../../../actions/siderbarActions';

import hamburger from '../../../assets/hamburger.png';
import avatar from '../../../assets/avatar.svg';
import logo from '../../../assets/Logo Text.svg';

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
    const businessesColor = siderLinkStates.businesses;
    const createABusinessColor = siderLinkStates.create_business;
    const koolCompanyColor = siderLinkStates.kool_company;
    const payeesColor = siderLinkStates.payees;
    const membersColor = siderLinkStates.members;
    const pocketsColor = siderLinkStates.pockets;
    const opexColor = siderLinkStates.opex;
    const taxColor = siderLinkStates.tax;
    const ownersCompColor = siderLinkStates.owners_comp;

    const [ businessLinks, setBusinessLinks ] = useState(false);
    const [ koolCompanyLinks, setKoolCompanyLinks ] = useState(false);
    const [ pocketLinks, setPocketLinks ] = useState(false);

    const openBusinessLinks = () => { setBusinessLinks(businessLinks => !businessLinks); } 
    const openKoolCompanyLinks = () => { setKoolCompanyLinks(koolCompanyLinks => !koolCompanyLinks); } 
    const openPocketLinks = () => { setPocketLinks(pocketLinks => !pocketLinks); } 

    const onSelectDashboard = () => dispatch(selectDashboard());
    const onSelectBusinesses = () => dispatch(selectBusinesses());
    const onCreateABusiness = () => dispatch(createABusiness());
    const onSelectKoolCompany = () => dispatch(selectKoolCompany());
    const onSelectPayees = () => dispatch(selectPayees());
    const onSelectMembers = () => dispatch(selectMembers());
    const onSelectPockets = () => dispatch(selectPockets());
    const onSelectOpex = () => dispatch(selectOpex());
    const onSelectTax = () => dispatch(selectTax());
    const onSelectOwnersComp = () => dispatch(selectOwnersComp());

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (

    <>

    {width <= 767 ?  

    <>

      <Button className = "hamburger__btn" variant = "link" onClick = {handleShow} style = {{display: "flex", flexDirection: "row"}}>

        <Nav.Link>

          <img className = "hamburger__icon" src = {hamburger} alt = "hamburger__img"/>

        </Nav.Link>

       </Button>

      <Modal className = "modal left" show={show} onHide={handleClose} animation = {false}>
        <Modal.Header>
          <Modal.Title>

          <Button className = "hamburger__btn" variant = "link" onClick = {handleClose} style = {{display: "flex", flexDirection: "row"}}>

              <Nav.Link>

                <img className = "hamburger__icon__1" src = {hamburger} alt = "hamburger__img"/>

              </Nav.Link>

                <img className = "lp__logo__1" src = {logo} alt = "lean-payments"/>

          </Button>

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className = "user__avatar__1">

            <Link className = "user__link" to = "/profile">

              <img className = "avatar__icon__open__1" src = {avatar} alt = "avatar__img"/>

              <div className = "user__info__1">
              <p className = "name">Vishal Bhatia</p> 
              <p className = "email">koolguy@gmail.com</p>
              </div>
    
            </Link>

          </div>

          <br/>

            <Link to = {url} style = {{color: dashboardColor}} onClick = {onSelectDashboard}>

              <HiHome className = "dashboard__icon__open__1"/>

              <p className = "generic__link011">Dashboard</p> 

            </Link>

          <br/>

            <Link to = {url} style = {{color: businessesColor}} onClick = {() => { openBusinessLinks(); onSelectBusinesses(); }}>

              <IoIosBusiness className = "businesses__icon__open__1"/>

              <p className = "businesses__link__1">Businesses</p> 

            </Link>

          <div>

          {businessLinks ?

            <Link to = {url} style = {{color: createABusinessColor}} onClick = {onCreateABusiness}> 

              <MdAddBox className = "create__a__business__icon__1"/>

              <p className = "generic__link022">Create a Business</p>

            </Link>

          : null}

          </div>

          <div>

          {businessLinks ?

            <Link to = {url} style = {{color: koolCompanyColor}} onClick = {() => { openKoolCompanyLinks(); onSelectKoolCompany(); }}> 

              <IoIosBusiness className = "create__a__business__icon__1"/>

              <p className = "generic__link022">Kool Company</p>

            </Link>

          : null}

          </div>

          <div>

          {koolCompanyLinks ?

            <Link to = {url} style = {{color: payeesColor}} onClick = {onSelectPayees}> 

              <RiSendPlaneFill className = "payees__icon__1"/>

              <p className = "generic__link033">Payees</p>

            </Link>

          : null}

          </div>

          <div>

          {koolCompanyLinks ?

            <Link to = {url} style = {{color: membersColor}} onClick = {onSelectMembers}> 

              <HiUserGroup className = "members__icon__1"/>

              <p className = "generic__link033">Members</p>

            </Link>

          : null}

          </div>

          <div>

          {koolCompanyLinks ?

            <Link to = {url} style = {{color: pocketsColor}} onClick = {() => { openPocketLinks(); onSelectPockets();}}> 

              <AiOutlineContainer className = "pockets__icon__1"/>

              <p className = "generic__link033">Pockets</p>

            </Link>

          : null}

          </div>

          {url === "/pocket-view/instructions" || url === "/move-money/within-same-company" || url === "/dashboard/executive-view" ?

          <>

          <div>

          {pocketLinks ?

            <Link to = {url} style = {{color: opexColor}} onClick = {onSelectOpex}> 

              <CgChevronRightO className = "opex__icon__1"/>

              <p className = "generic__link044">OPEX</p>

            </Link>

          : null}

          </div>

          <div>

          {pocketLinks ?

            <Link to = {url} style = {{color: taxColor}} onClick = {onSelectTax}> 

              <CgChevronRightO className = "tax__icon__1"/>

              <p className = "generic__link044">Tax</p>

            </Link>

          : null}

          </div>

          <div>

          {pocketLinks ?

            <Link to = {url} style = {{color: ownersCompColor}} onClick = {onSelectOwnersComp}> 

              <CgChevronRightO className = "owners__comp__icon__1"/>

              <p className = "generic__link044">Owners Comp</p>

            </Link>

          : null}

          </div>

          </>

          : url === "/kool-company/newly-created-pockets" ?

          <>

          <div>

          {pocketLinks ?

            <Link to = {url} style = {{color: opexColor}} onClick = {onSelectOpex}> 

              <CgChevronRightO className = "opex__icon__1"/>

              <p className = "generic__link044">Legal Expenses</p>

            </Link>

          : null}

          </div>

          <div>

          {pocketLinks ?

            <Link to = {url} style = {{color: taxColor}} onClick = {onSelectTax}> 

              <CgChevronRightO className = "tax__icon__1"/>

              <p className = "generic__link044">Bank Charges</p>

            </Link>

          : null}

          </div>
 
          <div>

          {pocketLinks ?

            <Link to = {url} style = {{color: ownersCompColor}} onClick = {onSelectOwnersComp}> 

              <CgChevronRightO className = "owners__comp__icon__1"/>

              <p className = "generic__link044">Supplier #1</p>

            </Link>

          : null}

          </div>

          </>

          : null}

          <hr className = "divider__open__1" />

          <br/>

            <Link to = "/login" style = {{color: "#b7bec4"}}>

              <BiLogOut className = "log__out__icon__open__1"/>

              <p className = "log__out__link__1">Logout</p>
        
            </Link>

        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>

      </>

      : null}

      {width >= 768 ? 

      <div className = {collapsed ? "sidebar" : "open__sidebar"} style = {url === "/move-money/within-same-company" ? {borderRight: "2px solid #9eadba"} : null}>

        <ul className = {collapsed ? "sidebar__nav" : "open__sidebar__nav"}>

          <Button className = "hamburger__btn" variant = "link" onClick = {onCollapse} style = {{display: "flex", flexDirection: "row"}}>

            <Nav.Link>

              <img className = {collapsed ? "hamburger__icon" : "hamburger__icon__open"} src = {hamburger} alt = "hamburger__img"/>

            </Nav.Link>

            {!collapsed ?
    
              <img className = "lp__logo" src = {logo} alt = "lean-payments"/>
    
            : null}

          </Button>

          <br/>

          <div className = "user__avatar">

            <Link className = "user__link" to = "/profile">

              <img className = {collapsed ? "avatar__icon" : "avatar__icon__open"} src = {avatar} alt = "avatar__img"/>

            {!collapsed ?

              <div className = "user__info">
              <p className = "name1">Vishal Bhatia</p> 
              <p className = "email1">koolguy@gmail.com</p>
              </div>
    
            : null}

            </Link>

          </div>

          <br/>

            <Link to = {url} style = {{color: dashboardColor}} onClick = {onSelectDashboard}>

              {collapsed ? <HiHome className = "dashboard__icon"/> : <HiHome className = "dashboard__icon__open"/>}

            {!collapsed ? 

              <p className = "generic__link01">Dashboard</p> 

            : null}

            </Link>

            <br/>

            <Link to = {url} style = {{color: businessesColor}} onClick = {() => { openBusinessLinks(); onSelectBusinesses(); }}>

             {collapsed ? <IoIosBusiness className = "businesses__icon"/> : <IoIosBusiness className = "businesses__icon__open"/>}
         
            {!collapsed ? 

              <p className = "businesses__link">Businesses</p> 

            : null}

            </Link>

          <div>

          {businessLinks && !collapsed ?

            <Link to = "/" style = {{color: createABusinessColor}} onClick = {onCreateABusiness}> 

              <MdAddBox className = "create__a__business__icon"/>

              <p className = "generic__link02">Create a Business</p>

            </Link>

          : null}

          </div>

          <div>

          {businessLinks && !collapsed ?

            <Link to = {url} style = {{color: koolCompanyColor}} onClick = {() => { openKoolCompanyLinks(); onSelectKoolCompany(); }}> 

              <IoIosBusiness className = "create__a__business__icon"/>

              <p className = "generic__link02">Kool Company</p>

            </Link>

          : null}

          </div>

          <div>

            {koolCompanyLinks && !collapsed ?

            <Link to = "/" style = {{color: payeesColor}} onClick = {onSelectPayees}> 

              <RiSendPlaneFill className = "payees__icon"/>

              <p className = "generic__link03">Payees</p>

            </Link>

            : null}

          </div>

          <div>

          {koolCompanyLinks && !collapsed ?

            <Link to = "/" style = {{color: membersColor}} onClick = {onSelectMembers}> 

              <HiUserGroup className = "members__icon"/>

              <p className = "generic__link03">Members</p>

            </Link>

          : null}

          </div>

          <div>

          {koolCompanyLinks && !collapsed ?

            <Link to = {url} style = {{color: pocketsColor}} onClick = {() => { openPocketLinks(); onSelectPockets();}}> 

              <AiOutlineContainer className = "pockets__icon"/>

              <p className = "generic__link03">Pockets</p>

            </Link>

          : null}

          </div>

          {url === "/pocket-view/instructions" || url === "/move-money/within-same-company" || url === "/dashboard/executive-view" ?

          <>

          <div>
 
          {pocketLinks && !collapsed ?

            <Link to = {url} style = {{color: opexColor}} onClick = {onSelectOpex}> 

              <CgChevronRightO className = "opex__icon"/>

              <p className = "generic__link04">OPEX</p>

            </Link>

          : null}

          </div>

          <div>

          {pocketLinks && !collapsed ?

            <Link to = {url} style = {{color: taxColor}} onClick = {onSelectTax}> 

              <CgChevronRightO className = "tax__icon"/>

              <p className = "generic__link04">Tax</p>

            </Link>

          : null}

          </div>

          <div>

          {pocketLinks && !collapsed ?

            <Link to = {url} style = {{color: ownersCompColor}} onClick = {onSelectOwnersComp}> 

              <CgChevronRightO className = "owners__comp__icon"/>

              <p className = "generic__link04">Owners Comp</p>

            </Link>

          : null}

          </div>

          </>

          : 

          url === "/kool-company/newly-created-pockets" ?

          <>

          <div>
 
          {pocketLinks && !collapsed ?

            <Link to = "/" style = {{color: opexColor}} onClick = {onSelectOpex}> 

              <CgChevronRightO className = "opex__icon"/>

              <p className = "generic__link04">Legal Expenses</p>

            </Link>

          : null}

          </div>

          <div>

          {pocketLinks && !collapsed ?

            <Link to = "/" style = {{color: taxColor}} onClick = {onSelectTax}> 

              <CgChevronRightO className = "tax__icon"/>

              <p className = "generic__link04">Bank Charges</p>

            </Link>

          : null}

          </div>

          <div>

          {pocketLinks && !collapsed ?

            <Link to = "/" style = {{color: ownersCompColor}} onClick = {onSelectOwnersComp}> 

              <CgChevronRightO className = "owners__comp__icon"/>

              <p className = "generic__link04">Supplier #1</p>

            </Link>

          : null}

          </div>

          </>

          : null}

          <hr className = {collapsed ? "divider" : "divider__open"} />

          <br/>

            <Link to = "/login" style = {{color: "#b7bec4"}}>

              {collapsed ? <BiLogOut className = "log__out__icon"/> : <BiLogOut className = "log__out__icon__open" />}

            {!collapsed ?

              <p className = "log__out__link">logout</p>
        
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
