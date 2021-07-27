import React, { useState } from 'react';
import { Container, Jumbotron, Row, Col, Carousel } from 'react-bootstrap';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//map import
import { Map, Marker } from "pigeon-maps"

//Carousel, appears in NewsContainer
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

function MyMap() {
    const [center, setCenter] = useState([-15.2350, -54.9253])
    const [zoom, setZoom] = useState(4.9)
    return (
        <Map
            height={800}
            width={1100}
            center={center}
            zoom={zoom}
            onBoundsChanged={({ center, zoom }) => {
                setCenter(center)
                setZoom(zoom)
            }}
            minZoom={4.5}        >
            <Marker 
                width={50}
                anchor={[-14.2350, -51.9253]} 
            />
        </Map>
    )
}

function NewsContainer() {
    return (
        <div class="newsContainer">
            <h1 class="display">News Container</h1>
            <p class="lead">Latest news relating to our businesses!</p>
            <div class="news-carousel">
                <ControlledCarousel />
            </div>
        </div>
    )
}

function MarkerInfo() {
    return (
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div class="fw-bold">Name</div>
                    An item
            </li>
            <li class="list-group-item">
                <div class="fw-bold">Location</div>
                    An item
            </li>
            <li class="list-group-item">
                <div class="fw-bold">About</div>
                    An item
            </li>
        </ul>
    )
}

//Page
//TODO (create box behind map, clean up right side of page)
export const Home = (props) => (

    <div>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Jumbotron</h1>
                <p class="lead">Soon to be an image</p>
            </div>
        </div>    

        <div class="container-fluid">
            <Row>
                <Col xs={9}>
                    <h1 class="display">Map of Businesses</h1>
                    <p class="lead">This is a map that shows...</p>
                    <MyMap />
                </Col>
                <Col>
                    <NewsContainer />
                    <MarkerInfo />
                    
                </Col>
            </Row>
        </div>
    </div>
);