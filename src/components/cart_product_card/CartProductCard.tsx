import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Divider, Typography } from "@mui/material";
import { Component } from "react";
import eggsImg from "../../assets/best_sellers_card_images/eggs.png";
import deleteIconImg from "../../assets/cart_page/deleteIcon.png";
import cartProductCardStyles from "./CartProductCard.Styles";





class CartProductCard extends Component {


    render() {
        return (
            <Box sx={cartProductCardStyles.cardCont}>
                <Box>
                    <Box
                        component={"img"}
                        src={eggsImg}
                        sx={cartProductCardStyles.itemImg}
                        alt="eggs-img"
                    />
                    <Box>
                        <Typography sx={cartProductCardStyles.itemName}>Country Eggs Pack</Typography>
                        <Typography sx={cartProductCardStyles.price}>
                            ₹173.00
                            <Box component={"span"} sx={cartProductCardStyles.originalPrice}>
                                200.00
                            </Box>
                        </Typography>
                        <Box>
                            <Box sx={cartProductCardStyles.addRemoveBox}>
                                <RemoveIcon id="icon" />
                                <Divider orientation="vertical" flexItem />
                                <Typography sx={cartProductCardStyles.quantity}>
                                    03
                                </Typography>
                                <Divider orientation="vertical" flexItem />
                                <AddIcon id="icon" />
                            </Box>
                            <Box
                                component={"img"}
                                src={deleteIconImg}
                                alt="delete-icon-img"
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}


export default CartProductCard