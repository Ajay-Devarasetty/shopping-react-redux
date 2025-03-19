import { Box, Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { addCart, removeFromWishlist } from "../Redux/Reducers/shoppingReducer";

const Wishlist = () =>{
    const wishlistItems = useSelector((state)=>state.shopping.Wishlist);
    const dispatch = useDispatch();

    const removeWishlist = (id)=>{
        let payload = {
            id : id
        }
        dispatch(removeFromWishlist(payload));
    }

    const moveToCart = (item) =>{
        let payload = {
            id : item.id,
            title : item.title,
            price : item.price,
            image : item.image,
            quantity : 1
        }
        dispatch(addCart(payload));
        dispatch(removeFromWishlist(payload));
    }

    return (
        <Box>
            <Box className="Body">
                <Box className="box">
                    {wishlistItems.map((item) => (
                        <Box key={item.id} className="product">
                               <CancelOutlinedIcon onClick={()=>removeWishlist(item.id)} className="close-icon" />
                            <Box>{item.title}</Box>
                            <img src={item.image} alt={item.title} width="100" />
                            <Box display="flex" justifyContent="center" gap={2} mt={2}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => moveToCart(item)}
                                    >
                                        Move to Cart
                                    </Button>
                                </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Wishlist;