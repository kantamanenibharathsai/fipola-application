import { Box, Button, Divider, Typography } from "@mui/material";
import { Component } from "react";
import bestSellersCardStyles from "./BestSellersCard.Styles";
import eggsImg from "../../assets/best_sellers_card_images/eggs.png"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';





class BestSellersCard extends Component {



    render() {
        return (
            <Box sx={bestSellersCardStyles.cardCont}>
                <Box
                    component={"img"}
                    src={eggsImg}
                    sx={bestSellersCardStyles.itemImg}
                // onClick={() => this.handleItemClick(item.id)}
                />
                <Typography sx={bestSellersCardStyles.itemName}>Country Eggs Pack</Typography>
                <Typography sx={bestSellersCardStyles.price}>
                    ₹173.00
                    <Box component={"span"} sx={bestSellersCardStyles.originalPrice}>
                        200.00
                    </Box>
                </Typography>
                {7 > 0 ? (
                    <Box sx={bestSellersCardStyles.addRemoveBox}>
                        <RemoveIcon id="icon"/>
                        <Divider orientation="vertical" flexItem />
                        <Typography sx={bestSellersCardStyles.quantity}>
                            03
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <AddIcon id="icon"/>
                    </Box>
                ) : (
                    <Button
                        sx={bestSellersCardStyles.addToCartBtn}
                    // onClick={() => this.handleAddToCart(item.id)}
                    >
                        Add To Cart
                    </Button>
                )}
            </Box>
        )
    }
}



export default BestSellersCard