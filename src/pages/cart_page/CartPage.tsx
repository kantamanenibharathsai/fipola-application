import { Box, Button, Typography } from "@mui/material";
import { Component } from "react";
import { connect } from "react-redux";
import cartEmptyImg from "../../assets/cartEmptyImg.png";
import BottomNavbar from "../../components/bottom_navbar/BottomNavbar";
import CartProductCard from "../../components/cart_product_card/CartProductCard";
import ResponsiveSidebarLarge from "../../components/responsive_sidebar_large/ResponsiveSidebarLarge";
import withRouter from "../../hoc/withRouter";
import { AppDispatch, RootState } from "../../redux/Store";
import { addToCart, cartDecrement, cartIncrement, removeCartItem } from '../../redux/reducers/CartSliceReducer';
import { CartProductInterface, ProductInterface } from '../../typescript/data';
import cartStyles from "./CartPage.Styles";

interface MyProps {
    navigate: (path: string) => void;
    addToCart?: (params: ProductInterface) => void;
    cartDecrement?: (params: number) => void;
    cartIncrement?: (params: number) => void;
    removeCartItem?: (params: number) => void;
    cartProducts?: CartProductInterface[];
    eachProduct?: ProductInterface;
}

class CartPage extends Component<MyProps, {}> {

    listItemsClickHandler = (path: string) => {
        this.props.navigate(path)
    }

    render() {
        const totalPrice = this.props.cartProducts?.reduce((accumulator: number, eachProduct: CartProductInterface) => {
            return accumulator + (eachProduct.productQuantity * eachProduct.productPrice)
        }, 0)

        return (
            <Box sx={cartStyles.mainCont}>
                <Box sx={cartStyles.topNavbar}>
                    <Typography component="h2">Cart</Typography>
                </Box>

                {this.props.cartProducts!.length > 0 && (
                    <>
                        <ResponsiveSidebarLarge navigateHandler={this.listItemsClickHandler} />
                        <Box sx={cartStyles.bodyCont}>
                            <Box sx={cartStyles.cartProductsCont}>
                                {this.props.cartProducts?.map(eachProduct => (
                                    <CartProductCard key={eachProduct.productId} {...{eachProduct }} />
                                ))}
                            </Box>

                            <Box sx={cartStyles.bottomTotalPriceCont}>
                                <Box>
                                    <Typography>Subtotal</Typography>
                                    <Typography>{totalPrice}</Typography>
                                </Box>
                                <Box>
                                    <Typography>Delivery Charge</Typography>
                                    <Typography>₹0</Typography>
                                </Box>
                                <Box>
                                    <Typography>Subtotal</Typography>
                                    <Typography>{totalPrice}</Typography>
                                </Box>
                                <Button onClick={() => this.listItemsClickHandler("/selectAddress")} sx={cartStyles.redBtn}>check out</Button>
                            </Box>
                        </Box>
                    </>)}
                {this.props.cartProducts!.length === 0 && (
                    <>
                        <ResponsiveSidebarLarge navigateHandler={this.listItemsClickHandler} />
                        <Box sx={cartStyles.notFoundBodyCont}>
                            <Box sx={cartStyles.cartEmptyContainer}>
                                <Box component={"img"} src={cartEmptyImg} alt="cart-empty-img" sx={cartStyles.cartEmptyImage} />
                                <Button onClick={() => this.listItemsClickHandler("/category")} sx={cartStyles.redBtn}>BACK TO CATEGORIES</Button>
                            </Box>
                        </Box>
                    </>
                )}
                <BottomNavbar navigateHandler={this.listItemsClickHandler} />
            </Box>
        )
    }
}


const mapDispatchToProps = (dispatch: AppDispatch) => ({
    addToCart: (params: ProductInterface) => dispatch(addToCart(params)),
    cartDecrement: (params: number) => dispatch(cartDecrement(params)),
    cartIncrement: (params: number) => dispatch(cartIncrement(params)),
    removeCartItem: (params: number) => dispatch(removeCartItem(params)),
});

const mapStateToProps = (state: RootState) => ({
    cartProducts: state.cart.cartProducts
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CartPage)
);