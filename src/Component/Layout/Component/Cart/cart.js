import { BsCart4 } from "react-icons/bs";
import "./Cart.scss";

function Cart({}) {
  const isAccout = true;
  const handleActiveCart = () => {
    const WrapperCart = document.querySelector(".container__cart");
    WrapperCart.classList.toggle("active");
  };
  return (
    <>
      <div className="cart" onClick={handleActiveCart}>
        <BsCart4 className="cart-icon"></BsCart4>
      </div>
      {isAccout ? (
        <div className="container__cart">
          <div className="cart__wrapper">
            <h3 className="title">Your shopping cart is empty</h3>
            <span className="des">
              <a href="">Log in</a>
              to see more added products
            </span>
          </div>
        </div>
      ) : (
        <div className="container__cart">
          <div className="cart__wrapper">
            <h3 className="title">Your Products Added</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
