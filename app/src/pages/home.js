import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = (props) => (
  <Container fluid>
    <Jumbotron>
      <Row>
        <Col xs={8}>
          <h1 class="display">Map of Businesses</h1>
          <p class="lead">This is a map that shows...</p>
          <div id="mapid"></div>
        </Col>
        <Col>
          <h1 class="display">News</h1>
          <p class="lead">Latest news relating to our businesses!</p>
          <div class="news"></div>
        </Col>
      </Row>
    </Jumbotron>
  </Container>
);


export default Home;