import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Divider, Typography } from "@mui/material";
import { Component } from "react";
import { connect } from "react-redux";
import eggsImg from "../../assets/best_sellers_card_images/eggs.png";
import deleteIconImg from "../../assets/cart_page/deleteIcon.png";
import withRouter from "../../hoc/withRouter";
import { AppDispatch, RootState } from "../../redux/Store";
import { addToCart, cartDecrement, cartIncrement, removeCartItem } from '../../redux/reducers/CartSliceReducer';
import { CartProductInterface, ProductInterface } from '../../typescript/data';
import cartProductCardStyles from "./CartProductCard.Styles";


interface MyProps {
    navigate?: (path: string) => void;
    addToCart?: (params: ProductInterface) => void;
    cartDecrement?: (params: number) => void;
    cartIncrement?: (params: number) => void;
    removeCartItem?: (params: number) => void;
    cartProducts?: CartProductInterface[];
    eachProduct?: ProductInterface;
}


const isCartProduct = (product: ProductInterface | undefined): product is CartProductInterface => {
    return (product as CartProductInterface)?.productId !== undefined;
}

class CartProductCard extends Component<MyProps, {}> {


    addToCartHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        console.log(this.props.eachProduct?.productId)
        if (this.props.eachProduct && isCartProduct(this.props.eachProduct)) {
            console.log("vhjgj", this.props.eachProduct?.productId);
            this.props.addToCart!(this.props.eachProduct);
        }
    }

    incrementQuantityHandler = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        event.stopPropagation();
        this.props.cartIncrement!(this.props.eachProduct!.productId);
    }

    decrementQuantityHandler = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        event.stopPropagation();
        if (this.props.cartProducts!.find(eachProd => eachProd?.productId === this.props.eachProduct?.productId)?.productQuantity === 1) this.props.removeCartItem!(this.props.eachProduct!.productId);
        else this.props.cartDecrement!(this.props.eachProduct!.productId);
    }

    removeCartItemHandler = () => {
        const cartProduct = this.props.cartProducts!.find(eachProd => eachProd?.productId === this.props.eachProduct?.productId);
        if (cartProduct) {
            console.log("cartProduct", cartProduct);
            this.props.removeCartItem!(cartProduct.productId);
        }
    }

    render() {
        const { eachProduct, cartProducts } = this.props;
        const cartProduct = cartProducts!.find(eachProd => eachProd?.productId === this.props.eachProduct?.productId);
        console.log("after state update", cartProduct)

        return (
            <Box sx={cartProductCardStyles.cardCont}>
                <Box>
                    <Box
                        component={"img"}
                        src={eggsImg}
                        sx={cartProductCardStyles.itemImg}
                        alt="eggs-img"
                    />
                    <Box>
                        <Typography sx={cartProductCardStyles.itemName}>Country Eggs Pack</Typography>
                        <Typography sx={cartProductCardStyles.price}>
                            ₹173.00
                            <Box component={"span"} sx={cartProductCardStyles.originalPrice}>
                                200.00
                            </Box>
                        </Typography>
                        <Box>
                            <Box sx={cartProductCardStyles.addRemoveBox}>
                                <RemoveIcon id="icon" onClick={this.decrementQuantityHandler} />
                                <Divider orientation="vertical" flexItem />
                                <Typography sx={cartProductCardStyles.quantity}>
                                    {eachProduct?.productQuantity}
                                </Typography>
                                <Divider orientation="vertical" flexItem />
                                <AddIcon id="icon" onClick={this.incrementQuantityHandler} />
                            </Box>
                            <Box
                                component={"img"}
                                src={deleteIconImg}
                                alt="delete-icon-img"
                                onClick={() => this.removeCartItemHandler()}
                            />
                        </Box>
                    </Box>
                </Box>
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
    connect(mapStateToProps, mapDispatchToProps)(CartProductCard)
);