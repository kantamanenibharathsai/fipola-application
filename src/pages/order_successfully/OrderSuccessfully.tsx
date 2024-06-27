import { Box, Typography } from "@mui/material";
import { Component } from "react";
import homeIcon from "../../assets/order_successfully/homeIcon.png";
import tickIcon from "../../assets/order_successfully/tickIcon.png";
import orderSuccessStyles from "./OrderSuccessfully.Styles";





class OrderSuccess extends Component {


    render() {
        return (
            <Box sx={orderSuccessStyles.mainCont}>
                <Box sx={orderSuccessStyles.cardCont}>
                    <Box component="img" alt="tick-image" src={tickIcon} />
                    <Typography>Congratulations</Typography>
                    <Typography>Your Order Successfully</Typography>
                    <Box component="img" alt="tick-image" src={homeIcon} />
                </Box>
            </Box>
        )
    }
}


export default OrderSuccess