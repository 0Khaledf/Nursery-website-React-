import { useContext } from 'react';
import { AppContext } from '../App';
import { Container, Card, Button, ListGroup, Row, Col } from 'react-bootstrap';
import CardCs from './CardCs';
import './Checkout.css';

function Checkout() {

  const { total, objects, setObjects, setTotal } = useContext(AppContext);
  console.log(objects);
  const handleRemoveItem = (id) => {
    const updatedObjects = objects.filter(item => item.id !== id);
    const newTotal = updatedObjects.reduce((sum, item) => sum + (item.price * item.count), 0);
    
    setObjects(updatedObjects);
    setTotal(newTotal);
  };

  const handleCheckout = () => {
    alert(`Order placed! Total: ${total}`);
    setObjects([]);
    setTotal(0);
  };

  return (
    <div className='bb'>
    <Container className="py-5 ">
      <h2 className="text-center mb-4">Your Order</h2>
      
      {objects.length === 0 ? (
        <Card className="text-center p-5">
          <h4>Your cart is empty</h4>
          <p className="text-muted">Add some items from the menu</p>
        </Card>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
                {objects.map((object , index)=>(
                   <Col key={index}>
                    <CardCs plant ={object} />
                    </Col>
                ))}
            </Row>
      )}
      
                      <Card className="p-5 shadow-sm mb-4" style={{margin:"25px"}}>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className=" align-items-center">Total: ${total}</h4>
              </div>
            </Card>
             <div className="text-center">
            <Button 
              variant="primary b" 
              size="lg"
              onClick={handleCheckout}
            >
              Proceed to Payment
            </Button>
          </div>     
    </Container>
    </div>
  );
}

export default Checkout;