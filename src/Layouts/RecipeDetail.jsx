import React from 'react';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';

const RecipeDetail = () => {
    return (
        <div>
             <NavigationBar></NavigationBar>

<Container>
    <Row>
    <Col lg={4}>
            <LeftNav><h2>Here is something</h2></LeftNav>
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