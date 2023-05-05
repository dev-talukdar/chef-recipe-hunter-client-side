import React from 'react'; 
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav'; 
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import Banner from '../Pages/Banner/Banner';

const Main = () => {
    return (
        <div>
             
            <NavigationBar></NavigationBar>
            <Banner></Banner>

            <Container>
                <Row>
                <Col lg={2}>
                        <LeftNav></LeftNav>
                    </Col>

                    <Col lg={8}>
                         <Outlet></Outlet>
                    </Col>

                    <Col lg={2}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>

        </div>
    );
};

export default Main;