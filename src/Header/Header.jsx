import { Box,Badge } from "@mui/material";
import "./index.scss";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () =>{

    const cartCount = useSelector((state)=>state.shopping.cart.length)
    const wishlistCount = useSelector((state)=>state.shopping.Wishlist.length)

    return (
        <Box className="main">
            <h1>Fake Shop </h1>
            {console.log(cartCount,"cartcount")}
            <IconButton >
                <Badge badgeContent={cartCount} color="primary" showZero>  {/* ✅ Display count */}
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
            <IconButton >
                <Badge badgeContent={wishlistCount} color="secondary" showZero>  {/* ✅ Display count */}
                    <FavoriteIcon />
                </Badge>
            </IconButton>
        </Box>
    )
}

export default Header;