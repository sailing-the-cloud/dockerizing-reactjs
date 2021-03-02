import React from "react";
import { Container, CardStyle, Title } from "./assets/style/_home";
import { Card, Row, Col } from "antd";

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
        </Container>
    )
}

export default Home;
