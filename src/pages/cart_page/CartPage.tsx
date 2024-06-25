import { Box, Button, Typography } from "@mui/material";
import { Component } from "react";
import BottomNavbar from "../../components/bottom_navbar/BottomNavbar";
import CartProductCard from "../../components/cart_product_card/CartProductCard";
import cartStyles from "./CartPage.Styles";


class CartPage extends Component {
    render() {
        return (
            <Box sx={cartStyles.mainCont}>
                <Box sx={cartStyles.topNavbar}>
                    <Typography component="h2">Cart</Typography>
                </Box>

                <Box sx={cartStyles.bodyCont}>
                    <Box sx={cartStyles.cartProductsCont}>
                        {[1, 2, 3, 4, 5, 6].map(each => (
                            <CartProductCard key={each} />
                        ))}
                    </Box>

                    <Box sx={cartStyles.bottomTotalPriceCont}>
                        <Box>
                            <Typography>Subtotal</Typography>
                            <Typography>₹389.00</Typography>
                        </Box>
                        <Box>
                            <Typography>Delivery Charge</Typography>
                            <Typography>₹0</Typography>
                        </Box>
                        <Box>
                            <Typography>Subtotal</Typography>
                            <Typography>₹389.00</Typography>
                        </Box>
                        <Button sx={cartStyles.redBtn}>check out</Button>
                    </Box>
                </Box>
                <BottomNavbar />
            </Box>
        )
    }
}


export default CartPage