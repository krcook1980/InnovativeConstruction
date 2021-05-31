import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import ImageZoom from 'react-medium-image-zoom';
import Img1 from '../../assets/img1.jpg';
import Img2 from '../../assets/img2.jpg';
import Img3 from '../../assets/img3.jpg';
import Img4 from '../../assets/img4.jpg';
import Img5 from '../../assets/img5.jpg';
import Img6 from '../../assets/img6.jpg';
import Img7 from '../../assets/img7.jpg';
import Footer from "../../components/footer"
import './style.css'



export default function Gallery() {

const imgClick = () => {
    console.log("click")
}

    return (
        <Container>
            <div className="mt-4 d-none d-xs-none d-sm-block" >
                <Carousel fade>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Img1}
                            alt="First slide"
                        />
                        <Carousel.Caption >
                            <h3>Excavation</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Img2}
                            alt="First slide"
                        />
                        <Carousel.Caption >
                            <h3>Rock Walls | Rockscaping</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Img6}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Hauling</h3>

                        </Carousel.Caption>
                    </Carousel.Item >
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className="caption">
                            <h3>Snow Management</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Img4}
                            alt="Third slide"
                        />

                        <Carousel.Caption >
                            <h3>Footings | Slabs</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Img5}
                            alt="Third slide"
                        />

                        <Carousel.Caption >
                            <h3>Retaining Walls</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Footer />
            </div>
            <div class="d-block d-sm-none phoneImg">
                <ImageZoom
                image={{src: Img7, alt: "excavation", className: "imgOne rounded"}}
                zoomImage={{src: Img7, style: {width: '100%'}}} />
                <ImageZoom
                image={{src: Img2, alt: "excavation", className: "imgTwo rounded"}}
                zoomImage={{src: Img2, style: {width: '100%'}}} />
                <ImageZoom
                image={{src: Img3, alt: "excavation", className: "imgThree rounded"}}
                zoomImage={{src: Img3, style: {width: '100%'}}} />
                <ImageZoom
                image={{src: Img5, alt: "excavation", className: "imgFour rounded"}}
                zoomImage={{src: Img5, style: {width: '100%'}}} />
                <Footer />
                </div>
        </Container>
    )
}
