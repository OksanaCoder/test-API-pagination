import React from 'react'
import { Card, Col } from 'react-bootstrap'

const CardItem = ({ data = [], activePage }) => {
    console.log(data, 'mapping')

    return (
        <>
            {data.length && data.slice(activePage * 10, activePage * 10 + 10).map(item => {
                return (
                    <Col lg={4} md={6} sm={12} xs={12} key={item.id} style={{ padding: '80px' }} onClick={() => window.open(item.link, "_blank")}>
                        <Card style={{ border: 'none' }} className='text-center'>
                            <Card.Img variant="top" src={item.avatar} style={{ borderRadius: '0' }} className='mb-4' />
                            <Card.Body>
                                <Card.Title>{item.lastName} {item.firstName}</Card.Title>
                                <Card.Text>
                                    <ul>
                                        {Array.isArray(item.speciality) && item.speciality.length > 0 && item.speciality.map((i) => {
                                            return (
                                                <li className='lightGrey'>{i}</li>
                                            )
                                        })}
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </>
    )
}

export default CardItem