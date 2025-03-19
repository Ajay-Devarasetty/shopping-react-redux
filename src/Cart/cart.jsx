import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../Redux/Reducers/shoppingReducer";
import RemoveIcon from '@mui/icons-material/Remove';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Cart = () => {
    const cartItems = useSelector((state) => state.shopping.cart);
    const dispatch = useDispatch();


    const increaseCount = (id) =>{
        let payload = {
            id:id
        }
        dispatch(increaseQuantity(payload));
    }

    const decreaseCount = (id, quantity) => {
        let payload = {
            id : id
        }
        {quantity>1?  dispatch(decreaseQuantity(payload)) : dispatch(removeFromCart(payload)) } 
    }
    const removeItem = (id)=>{
        let payload = {
            id : id
        }
        dispatch(removeFromCart(payload))
    }

    return (
        <Box className="cart-container">
            {cartItems.map((item) => (
            <>
                <CancelOutlinedIcon className="close-icon" onClick={()=>removeItem(item.id)} />
                <Box className="item" key={item.id}>
                    <img className="image" src={item.image} alt={item.title} />
                    <Box className="item-details">
                        <h4>{item.title}</h4>
                        <span className="price">${item.price*item.quantity}</span>
                        <Box className="count">
                            <button className="icon-btn"
                                onClick={() => decreaseCount(item.id , item.quantity)}
                            >
                                {item.quantity===1 ? <DeleteOutlinedIcon /> :<RemoveIcon /> }
                            </button>
                            <button className="quantity-btn">{item.quantity}</button>
                            <button className="icon-btn" 
                                onClick={()=>increaseCount(item.id)}>
                                <AddOutlinedIcon />
                            </button>
                        </Box>
                    </Box>
                </Box>
            </>
            ))}
        </Box>
    );
};

export default Cart;
