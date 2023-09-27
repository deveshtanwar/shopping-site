import { useDispatch, useSelector } from "react-redux";
import './cart.css';
import { Link } from "react-router-dom";
import { clearCart, removeItem } from "../../Store/Slices/CartSlice";

const Cart = () => {
    const data  = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const removeOneItem = (payload) => {
        dispatch(removeItem(payload))
    }

    const emptyCart = () =>{
        dispatch(clearCart())
    }

  return (
    <div className="container text-center mt-3">
        <h2>Your Shopping Cart</h2>
        <div className="parent-cart" >
            {data.items.length > 0 ? data.items.map((val)=>{
                return(
                    <div key={val.uid}>
                        <div className="inner-cart p-2" >
                            <div className="cart-items">
                                <Link to={`/details/${val.id}`}><img src={val.image} style={{width:"40px", height:"40px"}}/></Link>
                                <div>
                                    <p>{val.title}</p>
                                    <div className="d-flex">
                                        <small className="mx-2">{val.price}$</small>
                                        <small className="mx-2" style={{border:"0.5px dashed gray", padding:"2px"}}>{val.color}</small>
                                        <small className="mx-2" style={{border:"0.5px dashed gray", padding:"2px"}}>{val.storage}</small>
                                        <small className="mx-2">{val.quantity}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="remove-btn">
                                <i className="bi bi-archive-fill" style={{color:"red",cursor:"pointer"}} onClick={()=>{removeOneItem(val)}}></i>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            }):<p>Cart is Empty</p>}
        </div>
        {data.items.length > 0 ? 
            <button className="btn btn-danger mt-2" onClick={()=>{
                emptyCart();
            }}>Empty cart</button>:
            <p></p>
        }
        
    </div>
  )
}

export default Cart;