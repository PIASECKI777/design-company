import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';
import  MEETING from './images/img-5.jpg'
import  WORKING from './images/img-6.jpg'
import  EDUCATION from './images/img-7.jpg'
import  LUNCHTIME from './images/img-8.jpg'

function CarouselBox() {
    return (
      <>
         <Carousel>

            <Carousel.Item>
                <img
                   className='d-block w-100'
                   src= {MEETING}
                   alt= 'MEETING'
                />
                <Carousel.Caption>
                    <h3>MEETING</h3>
                    <p>You can use Bootstrap's position utilities to place navbars in non-static positions</p>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
                <img
                   className='d-block w-100'
                   src= {WORKING}
                   alt= 'WORKING'
                />
                <Carousel.Caption>
                    <h3>WORKING</h3>
                    <p>React is a JavaScript library for building user interfaces.</p>
                </Carousel.Caption>
            </Carousel.Item>

            
            <Carousel.Item>
                <img
                   className='d-block w-100'
                   src= {EDUCATION}
                   alt= 'EDUCATION'
                />
                <Carousel.Caption>
                    <h3>EDUCATION</h3>
                    <p>Learning by Examples
                    Our "Show React" tool makes it easy to demonstrate React. It shows both the code and the result.</p>
                </Carousel.Caption>
            </Carousel.Item>

            
            <Carousel.Item>
                <img
                   className='d-block w-100'
                   src= {LUNCHTIME}
                   alt= 'LUNCHTIME'
                />
                <Carousel.Caption>
                    <h3>LUNCHTIME</h3>
                    <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory,
                         where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
                </Carousel.Caption>
            </Carousel.Item>

         </Carousel>
      </>
    );
}

export default CarouselBox;
