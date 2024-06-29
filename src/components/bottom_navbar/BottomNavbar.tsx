import { Box } from "@mui/material";
import { Component } from "react";
import cartImg from "../../assets/bottom_navbar/cartImg.png";
import categoryImg from "../../assets/bottom_navbar/categoryImg.png";
import homeImg from "../../assets/bottom_navbar/homeImg.png";
import bottomNavbarStyles from "./BottomNavbar.Styles";

interface NavbarProps {
    isSpeedDialOpened?: boolean;
}
class BottomNavbar extends Component<NavbarProps, {}> {

    render() {
        return (
            <Box sx={{ ...bottomNavbarStyles.bottomNavContainer, background: this.props.isSpeedDialOpened ? "rgba(0, 0, 0, 0.3)" : "#f5bf45" }}>
                <Box sx={{ ...bottomNavbarStyles.navChildCont, display: "flex" }}>
                    <Box
                        component={"img"}
                        src={homeImg}
                        alt="home-img"
                    />
                    <Box component={"img"} src={categoryImg}
                        alt="category-img" />
                    <Box component={"img"} src={cartImg}
                        alt="cart-img" />
                </Box>
            </Box>
        )
    }
}


export default BottomNavbar