import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Divider, Typography } from "@mui/material";
import { Component } from "react";
import singleProductScreenStyles from "./SingleProductScreen.Styles";





class SingleProductScreen extends Component {


    render() {
        return (
            <Box sx={singleProductScreenStyles.mainCont}>
                <Box sx={singleProductScreenStyles.bodyCont}>
                    <Box sx={singleProductScreenStyles.cont}>

                    </Box>
                    <Box sx={singleProductScreenStyles.cont}>
                        <Box sx={singleProductScreenStyles.cardCont}>
                            <Typography component="h2">Country Eggs Pack</Typography>
                            <Typography component="p" sx={singleProductScreenStyles.price}>₹173.00  <Box component="span" sx={singleProductScreenStyles.originalPrice}>200.00</Box></Typography>
                            <Typography component="p">High in quality protein and Vitamins nutritious pack to improve your health
                            </Typography>
                            <Box sx={singleProductScreenStyles.countsCont}>
                                <Box sx={singleProductScreenStyles.countCont}>
                                    <Box component="span">Pieces</Box>
                                    <Box component="span">12</Box>
                                </Box>
                                <Box sx={singleProductScreenStyles.countCont}>
                                    <Box component="span">Packs</Box>
                                    <Box component="span">2 Pack</Box>
                                </Box>
                            </Box>
                            <Box sx={singleProductScreenStyles.addRemoveBox}>
                                <RemoveIcon id="icon" />
                                <Divider orientation="vertical" flexItem />
                                <Typography sx={singleProductScreenStyles.quantity}>
                                    03
                                </Typography>
                                <Divider orientation="vertical" flexItem />
                                <AddIcon id="icon" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default SingleProductScreen