import { Box, Typography } from "@mui/material";
import { Component } from "react";
import addressIcon from "../../assets/addressIocn.png";
import arrowBackIcon from "../../assets/arrowBack.png";
import topNavbarStyles from "./TopNavbarArrow.Styles";

interface MyProps {
    childrenContent?: string;
    navigateHandler?: (path: string) => void;
    pathName?: string;
}

class TopNavbarArrow extends Component<MyProps, {}> {

    arrowBackIconHandler = () => {
        this.props.navigateHandler!(this.props.pathName ? this.props.pathName : "/")
    }

    render() {
        return (
            <Box sx={topNavbarStyles.topNavbar}>
                <Box sx={topNavbarStyles.topNavbarChild}>
                    <Box component={"img"} src={arrowBackIcon} alt="arrow-back-icon-img" onClick={this.arrowBackIconHandler} />
                    <Typography component="h2">{this.props.childrenContent}</Typography>
                    <Box component={"img"} src={addressIcon} alt="address-icon-img" onClick={() => this.props.navigateHandler!("/addNewAddress")} />
                </Box>
            </Box>
        )
    }
}

export default TopNavbarArrow