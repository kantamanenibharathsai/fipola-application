import { Box } from "@mui/material";
import { Component } from "react";
import cartImg from "../../assets/bottom_navbar/cartImg.png";
import categoryImg from "../../assets/bottom_navbar/categoryImg.png";
import homeImg from "../../assets/bottom_navbar/homeImg.png";
import bottomNavbarStyles from "./BottomNavbar.Styles";

interface NavbarProps {
    isSpeedDialOpened?: boolean;
    navigateHandler?: (path: string) => void;
}
class BottomNavbar extends Component<NavbarProps, {}> {

    render() {
        return (
            <Box sx={{ ...bottomNavbarStyles.bottomNavContainer, zIndex: this.props.isSpeedDialOpened ? -1 : 1 }}>
                <Box sx={{ ...bottomNavbarStyles.navChildCont, display: "flex" }}>
                    <Box
                        component={"img"}
                        src={homeImg}
                        alt="home-img"
                        onClick={() => this.props.navigateHandler!("/")}
                    />
                    <Box component={"img"} src={categoryImg} onClick={() => this.props.navigateHandler!("/category")}
                        alt="category-img" />
                    <Box component={"img"} src={cartImg} onClick={() => this.props.navigateHandler!("/cart")}
                        alt="cart-img" />
                </Box>
            </Box>
        )
    }
}


export default BottomNavbar