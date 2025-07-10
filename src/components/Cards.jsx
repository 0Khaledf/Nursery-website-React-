import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext } from '../App';
import { useContext } from 'react';
import { useState } from 'react';
import './cc.css';
function Cards(props) {
  const { total, setTotal, objects, setObjects,objectsp,setObjectsp } = useContext(AppContext);
  const plant=props.plant;
  const [disable,setDisable]=useState(plant.active)
  console.log(plant )
  return (
    
    <Card className="h-100 shadow-sm border-0 rounded-4">
      <Card.Img variant="top"
        src={plant.imageUrl}
        alt={plant.name}
        className="rounded-top-4"
        style={{ height: '200px', objectFit: 'cover' }} // Ensure consistent image sizing
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = `https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found`; }}
           />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold text-dark">{plant.name}</Card.Title>
        <Card.Text className="text-muted flex-grow-1">
          {plant.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-2 mb-3">
          
          <h5 className="mb-0 text-success fw-bold">${plant.price}</h5>
        </div>
        <Button variant="primary b"
          className="rounded-pill px-4 py-2 mt-auto " onClick={
            ()=>
            {
              setTotal(total + plant.price);
              setObjects([...objects, { ...plant, count: 1 ,active:false}]);
              setDisable(false)
              setObjectsp(objectsp.map(item=>
                item.id===plant.id?{...item,count:1, active:false} :item))
            }

          }
          disabled={!plant.active}>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
