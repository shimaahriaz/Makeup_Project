import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiSquareRemove } from 'react-icons/ci';
import { decrementQuantity, incrementQuantity, removeItem } from '../../Redux/Slice/Cart';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems)
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);


  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };


const getTotal = () => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItems.forEach(item => {
    totalQuantity += item.counter
    totalPrice += item.price * item.counter;
  })
  return {totalPrice, totalQuantity}
};

const incrementButton = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item.counter === 5) {
      return true;
    } else {
      return false;
    }
  };

  const decrementButton = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item.counter === 1) {
      return true;
    } else {
      return false;
    }
  };

  const navigate= useNavigate();
  function goToDetails(id){
    navigate(`/details?id=${id}`)

  }



  return (
    <div className="cartApp">
      <div className="cart__bg">
        <h2>My Shopping Cart</h2>
      </div>
      <div className= 'cart_bgColor'>
      <div className="container">
        {cartItems.map((item) => (
            <>
          <div
            className="row justify-content-center align-items-center"
            key={item.id}
          >
            
            <div className="col-3 img-cart">
              <img onClick={()=> goToDetails(item.id)}
                src={item.image_link}
                alt={item.name}
                className="img-fluid"
              />
            </div>
            <div className="col-3 title-cart">
              <h2>{item.name}</h2>
              <p className='mb-2'>Price: {item.price + "$"}</p>
              <p>Quantity: {item.counter}</p>
            </div>

            <div className="cart-incredec col-2">
              <button
                className="btn mienus btn-decrement_cart" disabled= {decrementButton(item.id)}
                onClick={() => handleDecrementQuantity(item.id)}
              >
                -
              </button>
              <span className="number number_cart">{item.counter}</span>
              <button
                className="btn plus btn-increment_cart" disabled= {incrementButton(item.id)}
                onClick={() => handleIncrementQuantity(item.id)}
              >
                +
              </button>
            </div>
            <div className="col-2 price-cart text-center">
              <p className="total__p mb-0">
               {"$"+item.price * item.counter}
              </p>
            </div>
            <div
              className="col-1 price-cart text-center"
              onClick={() => handleRemoveItem(item.id)}            >
              <CiSquareRemove className="remove-icon" />
            </div>
          </div>
          <p className='line_cart mt-3'></p>
         </>
        ))}
        <div className="col-4 price-cart price_cart float-end text-center mt-3">
           <p className="total__p">
             total ({getTotal().totalQuantity} Quantity) :
             <strong>${getTotal().totalPrice}</strong>
           </p>
         </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;