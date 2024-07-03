import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box } from "@mui/material";
import { Component } from "react";
import { connect } from "react-redux";
import categoryImg from "../../assets/bottom_navbar/categoryImg.png";
import homeImg from "../../assets/bottom_navbar/homeImg.png";
import { RootState } from '../../redux/Store';
import { CartProductInterface } from '../../typescript/data';
import bottomNavbarStyles from "./BottomNavbar.Styles";
interface NavbarProps {
    isSpeedDialOpened?: boolean;
    navigateHandler?: (path: string) => void;
    cartProducts?: CartProductInterface[];
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
                    <Box sx={bottomNavbarStyles.cartCont}>
                        <Box>{this.props.cartProducts?.length}</Box>
                        <ShoppingCartOutlinedIcon onClick={() => this.props.navigateHandler!("/cart")} />
                    </Box>

                </Box>
            </Box>
        )
    }
}


const mapStateToProps = (state: RootState) => ({
    cartProducts: state.cart.cartProducts
});

export default connect(mapStateToProps, {})(BottomNavbar)
