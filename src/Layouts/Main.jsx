import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import Home from '../Pages/Home/Home/Home';

const Main = () => {
    return (
        <div>
            <Header></Header>

<Container>
    <Row> 

        <Col lg={9}>
             <Home></Home>
        </Col>

        <Col lg={3}>
             <RightNav></RightNav>
        </Col>
    </Row>
</Container>

<Footer></Footer>
            
        </div>
    );
};

export default Main;