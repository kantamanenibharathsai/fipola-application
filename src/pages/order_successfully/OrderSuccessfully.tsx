import { Box, Typography } from "@mui/material";
import { Component } from "react";
import homeIcon from "../../assets/order_successfully/homeIcon.png";
import tickIcon from "../../assets/order_successfully/tickIcon.png";
import withRouter from "../../hoc/withRouter";
import orderSuccessStyles from "./OrderSuccessfully.Styles";



interface MyProps {
    navigate: (path: string) => void;
}

class OrderSuccess extends Component<MyProps, {}> {


    render() {
        return (
            <Box sx={orderSuccessStyles.mainCont}>
                <Box sx={orderSuccessStyles.cardCont}>
                    <Box component="img" alt="tick-image" src={tickIcon} />
                    <Typography>Congratulations</Typography>
                    <Typography>Your Order Successfully</Typography>
                    <Box component="img" alt="tick-image" src={homeIcon} onClick={() => this.props.navigate("/")} />
                </Box>
            </Box>
        )
    }
}


export default withRouter(OrderSuccess)