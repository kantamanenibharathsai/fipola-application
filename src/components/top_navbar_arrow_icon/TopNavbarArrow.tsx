import { Box, Typography } from "@mui/material";
import { Component } from "react";
import addressIocn from "../../assets/addressIocn.png";
import arrowBackIcon from "../../assets/arrowBack.png";
import topNavbarStyles from "./TopNavbarArrow.Styles";

interface MyProps {
    children: string;
}

class TopNavbarArrow extends Component<MyProps, {}> {

    render() {
        return (
            <Box sx={topNavbarStyles.topNavbar}>
                <Box sx={topNavbarStyles.topNavbarChild}>
                    <Box component={"img"} src={arrowBackIcon} alt="arrow-back-icon-img" />
                    <Typography component="h2">{this.props.children}</Typography>
                    <Box component={"img"} src={addressIocn} alt="address-icon-img" />  
                </Box>
            </Box>
        )
    }
}

export default TopNavbarArrow