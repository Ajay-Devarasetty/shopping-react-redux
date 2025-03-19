import { Box, Button } from "@mui/material";
import "./index.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart,addWishlist } from "../Redux/Reducers/shoppingReducer";

const Body = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products/");
            setProducts(response.data);
        } catch (err) {
            console.log(err, "error");
        }
    };

    const addWishlistItem = (item) => {
        let payload={
            id:item.id, 
            title : item.title,
            price : item.price,
            image : item.image
        }
        dispatch(addWishlist(payload));
    }

    const addCartItem = (item) => {
        let payload = {
            id : item.id,
            title : item.title,
            price : item.price,
            image : item.image,
            quantity : 1
        }
        dispatch(addCart(payload));

    }

    useEffect(() => {
        fetchProductDetail();
    }, []);

    return (
        <Box className="Body">
            <Box className="box">
                {products.map((item, index) => (
                    <Box key={item.id} className="product">
                        <Box>{item.title}</Box>
                        <img src={item.image} alt={item.title} width="100" />
                        <Box display="flex" justifyContent="center" gap={2} mt={2}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => addWishlistItem(item)}
                                >
                                    Wishlist
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => addCartItem(item)}
                                >
                                    Cart
                                </Button>
                            </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Body;
