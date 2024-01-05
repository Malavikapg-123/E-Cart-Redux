import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function WishList() {
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  const dispatch=useDispatch();
  console.log("wishlist Array");
  console.log(wishlistArray);

  return (
    <>
      
      <Row className='ms-3 me-3' style={{marginTop:"150px"}}>
        <Link to={'/'} style={{textDecoration:"none",color:"blue"}} className='m-3'>
          <i class="fa-solid fa-arrow-left me-2"></i>Back to Home</Link>
        {
          wishlistArray?.length > 0 ?
            wishlistArray?.map((item) => (
              <Col className='mb-5'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.thumbnail} style={{height:"200px"}}/>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      <p>{item.description.slice(0,50)}...</p>
                      <p>Price:{item.price}</p>
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                    <Button variant="outline-danger" onClick={() => dispatch(removeFromWishlist(item.id))}>
                    <i class="fa-solid fa-trash"></i></Button>
                    <Button variant="outline-success" onClick={() => dispatch(addToCart(item))}>
                        <i class="fa-solid fa-cart-plus"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
            :
            <p>No item to display</p>
        }
      </Row>
     
    </>
  )
}

export default WishList;