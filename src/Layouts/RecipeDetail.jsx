import React from 'react';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import { Container, Row, Col } from 'react-bootstrap';

const RecipeDetail = () => {
    return (
        <div>
            <Header></Header>

<Container>
    <Row>
    <Col lg={4}>
            <LeftNav></LeftNav>
        </Col>

        <Col lg={8}>
        <Outlet></Outlet>
        </Col> 

    </Row>
</Container>

<Footer></Footer>
            
        </div>
    );
};

export default RecipeDetail;