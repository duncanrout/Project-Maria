import React, { useState } from 'react';
import { Container, Jumbotron, Row, Col, Carousel } from 'react-bootstrap';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="Example News 1"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Example News 2"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Example news 3"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

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
          <div class="news-carousel">
            <ControlledCarousel />
          </div>
        </Col>
      </Row>
    </Jumbotron>
  </Container>
);
