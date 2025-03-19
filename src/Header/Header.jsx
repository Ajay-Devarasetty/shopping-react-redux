import { Box,Badge } from "@mui/material";
import "./index.scss";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";

const Header = () =>{

    const cartCount = useSelector((state)=>state.shopping.cart.length)
    const wishlistCount = useSelector((state)=>state.shopping.Wishlist.length)
    const navigate = useNavigate();

    const handleCart = () =>{
        navigate("/cart");
    }

    const handleWishlist = () =>{
        navigate("/wishlist");
    }

    return (
        <Box className="main">
            <h1>Fake Shop </h1>
            <IconButton onClick={handleCart}>
                <Badge badgeContent={cartCount} color="primary" showZero>  {/* ✅ Display count */}
                    <ShoppingCartIcon  />
                </Badge>
            </IconButton>
            <IconButton onClick={handleWishlist} >
                <Badge badgeContent={wishlistCount} color="secondary" showZero>  {/* ✅ Display count */}
                    <FavoriteIcon />
                </Badge>
            </IconButton>
        </Box>
    )
}

export default Header;