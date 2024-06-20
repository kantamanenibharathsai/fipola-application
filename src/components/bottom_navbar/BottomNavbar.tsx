import { Box } from "@mui/material";
import { Component } from "react";
import bottomNavbarStyles from "./BottomNavbar.Styles";
import homeImg from "../../assets/bottom_navbar/homeImg.png";
import cartImg from "../../assets/bottom_navbar/cartImg.png";
import categoryImg from "../../assets/bottom_navbar/categoryImg.png";


class BottomNavbar extends Component {

    render() {
        return (
            <Box sx={bottomNavbarStyles.bottomNavContainer}>
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