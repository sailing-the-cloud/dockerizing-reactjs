import React from "react";
import { Card, Row, Col } from "antd";
import Slider from "react-slick";
import { Container, CardStyle, Carousel, Title } from "./assets/style/_home";

const settings = {
    dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

const Home = (props) => {
    return(
        <Container>
            <Title>Hello Homepage</Title>
            <CardStyle>
                <Row 
                align="center"
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col>
                        <Card size="small" title="Small size card" extra={<a href="#/">More</a>} style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card size="small" title="Small size card" extra={<a href="#/">More</a>} style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card size="small" title="Small size card" extra={<a href="#/">More</a>} style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                </Row>
                <Row 
                align="center"
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col>
                        <Card size="small" title="Small size card" extra={<a href="#/">More</a>} style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card size="small" title="Small size card" extra={<a href="#/">More</a>} style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card size="small" title="Small size card" extra={<a href="#/">More</a>} style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                </Row>
            </CardStyle>

            {/* Carousel With React Slick */}
            <Carousel>
                <h2> Responsive </h2>
                <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
                </Slider>
            </Carousel>
        </Container>
    )
}

export default Home;
