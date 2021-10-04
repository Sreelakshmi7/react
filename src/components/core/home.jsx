
import React from "react";
import { connect } from "react-redux";
import Carousel from 'react-bootstrap/Carousel'
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
class home extends React.Component{
    render(){
        return(
        
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      height='650px'
    />
    <Carousel.Caption>
      <h3>WELCOME TO BOOK MY MOVIE</h3>
      <p>Enjoy your favourite movies with Book My Movie</p>
    </Carousel.Caption>
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
      height='650px'
    />

    
</Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
      height='650px'
    />

    
  </Carousel.Item>
</Carousel>
        )
    }
}
export default home