import React, { act } from 'react'
import Cards from './Cards';
import { Col, Container ,Row} from 'react-bootstrap';

import './plants.css';
import { AppContext } from '../App';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';

export default function Plants() {
    const { total, setTotal, objects, setObjects,objectsp,setObjectsp } = useContext(AppContext);
  return (
    <>
    <div className="second py-5 bak" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <h2 className="text-center mb-5 fw-bold col">Available Halls</h2>
      <Container>
        
            <Row xs={1} md={2} lg={3} className="g-4">
                {objectsp.map((plant , index)=>(
                   <Col key={index}>
                    <Cards plant={plant} />
                    </Col>
                ))}
            </Row>
            <Row>
                <Card className="p-5 shadow-sm mb-4" style={{margin:"25px"}}>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className=" align-items-center">Total: ${total}</h4>
        </div>
      </Card>
            </Row>
       </Container>
       
    </div >
    </>
  )
}
