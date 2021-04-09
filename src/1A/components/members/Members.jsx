import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { useSelector } from 'react-redux';

import Sider from '../../../layout/Sider';
import MembersListing from './members listing/MembersListing';

import './Members.css';

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

function Members() {

    const collapsed = useSelector(state => state.collapsed.collapsed);

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const width = windowDimensions.width;

  return (
    <div className = "members">

        <Sider/>

            <Container fluid className = "members__layout__container">

                <div className = {collapsed && width >= 768 ? "members__page__content":  
                                 !collapsed && width >= 768 ? "members__page__content__open":
                                 "members__page__content__1"}>            

                    <Row className = {width >= 768 ? "members__container" : "members__container__1"}>

                        <Col sm>

                            <Row> 

                                <h2 className = "members__heading"><span className = "members__heading__underline members__heading__underline__padding"> Kevin L.L.C's Members </span></h2> 
                            
                            </Row> 

                            <br/>

                            <Row>

                                <p className = "members__sub__heading mb-4">Add members or change user permissions</p>

                            </Row>

                            <Row>

                                <MembersListing />

                            </Row>

                        </Col>

                    </Row>

                </div>

            </Container>

    </div>
  );
}

export default Members;
