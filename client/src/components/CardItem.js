import React, { useState } from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody, Button, Form, Input} from 'reactstrap';
import axios from 'axios';

const CardItem = ({data}) => {
    console.log("data lifiting", data)
    const [input, setInput] = useState({
        name: data.name,
        price: data.price
    });

    const {name, price} = input;
    //console.log({name, price})

    /* const onChange = (event) => {
        const {name, value} = event.target;
        setInput({
            ...input,
            [name] : value
        })
    } */

    const onSubmit = (event) =>{
        event.preventDefault();
        axios.post(`/api/checkout`, input)
            .then(response => console.log(response))
            .catch(err => console.log(err));        
    } 
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
                            <Form onSubmit={onSubmit}>
                                <Input type="hidden" name="name" value={"Pizza Hawaiana de tamaño familiar"} /* onChange={onChange} *//>
                                <Input type="hidden" name="price" value={"49.90"} /* onChange={onChange} *//>
                                <Button type="submit">Comprar</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>            
        </Container>
    );
}

export default CardItem;
