import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box } from "@mui/material";
import { Component } from "react";
import { connect } from 'react-redux';
import categoryImg from "../../assets/bottom_navbar/categoryImg.png";
import homeImg from "../../assets/bottom_navbar/homeImg.png";
import { RootState } from '../../redux/Store';
import { CartProductInterface } from '../../typescript/data';
import respSidebarLargeStyles from "./ResponsiveSidebarLarge.Styles";


interface NavbarProps {
    isSpeedDialOpened?: boolean;
    navigateHandler?: (path: string) => void;
    cartProducts?: CartProductInterface[];
}



class ResponsiveSidebarLarge extends Component<NavbarProps, {}> {
    state = { isRightArrowClicked: false };


    arrowIconHandler = () => {
        this.setState({ isRightArrowClicked: !this.state.isRightArrowClicked })
    }

    render() {
        const { isRightArrowClicked } = this.state;

        return (
            <Box sx={{ ...respSidebarLargeStyles.sidebarCont, ...(isRightArrowClicked && respSidebarLargeStyles.sidebarOpenCont) }}>
                <Box sx={respSidebarLargeStyles.arrowIconCont} onClick={this.arrowIconHandler}>
                    <KeyboardArrowRightOutlinedIcon />
                </Box>
                <Box component={"ul"} sx={{ ...respSidebarLargeStyles.ulCont, ...(isRightArrowClicked && respSidebarLargeStyles.ulOpenCont) }}>
                    <Box component={"li"} sx={respSidebarLargeStyles.liCont}>
                        <Box
                            component={"img"}
                            src={homeImg}
                            alt="home-img"
                        // onClick={() => this.props.navigateHandler!("/")}
                        />
                        Home
                    </Box>
                    <Box component={"li"} sx={respSidebarLargeStyles.liCont}>
                        <Box component={"img"} src={categoryImg} onClick={() => this.props.navigateHandler!("/category")}
                            alt="category-img" />
                        Category
                    </Box>

                    <Box component={"li"} sx={respSidebarLargeStyles.liCont}>
                        <Box sx={respSidebarLargeStyles.cartCont}>
                            <Box>{this.props.cartProducts?.length}</Box>
                            <ShoppingCartOutlinedIcon onClick={() => this.props.navigateHandler!("/cart")} />
                        </Box>
                        Cart
                    </Box>
                </Box>
            </Box>
        )
    }
}


const mapStateToProps = (state: RootState) => ({
    cartProducts: state.cart.cartProducts
});

export default connect(mapStateToProps, {})(ResponsiveSidebarLarge)