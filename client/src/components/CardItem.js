import React from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody, Button} from 'reactstrap';

const CardItem = ({data}) => {
    console.log("data lifiting", data)
    return (
        <Container>
            <Row style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Col md={6} >
                    <Card>
                        <CardHeader>
                            <h3>{data.name}</h3>
                        </CardHeader>
                        <CardBody>
                            <img src={data.image} alt="Hawaiana" style={{width: "100%", marginBottom: "0.3rem"}}/>
                            <h4>Descripcion</h4>
                            <p style={{marginBottom: "0.3rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque perferendis commodi, quasi eos culpa?</p>
                            <h4>Precio: S/. {data.price}</h4>
                            <Button type="submit">Comprar</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>            
        </Container>
    );
}

export default CardItem;
