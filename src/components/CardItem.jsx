import React from 'react'
import { Card, Col } from 'react-bootstrap'

const CardItem = ({ data = [], activePage }) => {
    console.log(data, 'mapping')
    const start = (activePage - 1) * 10;
    const end = activePage * 10;
    return (
        <div className='cards-wrapper'>
            {data.length && data.slice(start, end).map(item => {
                return (
                    <div className='item-card' key={item.id} style={{ padding: '80px' }} onClick={() => window.open(item.link, "_blank")}>
                        <div style={{ border: 'none' }} className='text-center'>
                            <img variant="top" src={item.avatar} style={{ borderRadius: '0' }} className='mb-4 image-card' />
                            <div>
                                <h4>{item.lastName} {item.firstName}</h4>
                                <div className='card-content'>
                                    <ul className='list-unstyled row-items'>
                                        {Array.isArray(item.speciality) && item.speciality.length > 0 && item.speciality.map((i) => {
                                            return (
                                                <div className='d-flex justify-content-between'>
                                                    <li className='lightGrey margin-items'>{i}</li>
                                                    <strong className='lightGrey margin-items dot'>&#183;</strong>
                                                </div>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardItem