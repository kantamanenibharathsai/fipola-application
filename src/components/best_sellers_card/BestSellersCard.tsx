import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Button, Divider, Typography } from "@mui/material";
import { Component } from "react";
import { connect } from "react-redux";
import withRouter from "../../hoc/withRouter";
import { AppDispatch, RootState } from "../../redux/Store";
import { addToCart, cartDecrement, cartIncrement, removeCartItem } from '../../redux/reducers/CartSliceReducer';
import { CartProductInterface, ProductInterface } from '../../typescript/data';
import bestSellersCardStyles from "./BestSellersCard.Styles";

interface MyProps {
    navigate?: (path: string) => void;
    addToCart?: (params: ProductInterface) => void;
    cartDecrement?: (params: number) => void;
    cartIncrement?: (params: number) => void;
    removeCartItem?: (params: number) => void;
    cartProducts?: CartProductInterface[];
    eachProduct?: ProductInterface;
}

// Type guard to check if a product is a CartProductInterface
const isCartProduct = (product: ProductInterface | undefined): product is CartProductInterface => {
    return (product as CartProductInterface)?.productId !== undefined;
}

class BestSellersCard extends Component<MyProps, {}> {
    bestSellerCardHandler = () => {
        this.props.navigate!("/singleProduct");
    }

    addToCartHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        console.log(this.props.eachProduct?.productId)
        if (this.props.eachProduct && isCartProduct(this.props.eachProduct)) {
            console.log("vhjgj", this.props.eachProduct?.productId)
            this.props.addToCart!(this.props.eachProduct);
        }
    }

    incrementQuantityHandler = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        event.stopPropagation();
        this.props.cartIncrement!(this.props.eachProduct!.productId);
    }

    decrementQuantityHandler = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        event.stopPropagation();
        this.props.cartDecrement!(this.props.eachProduct!.productId);
    }

    removeProductFromCartHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        this.props.removeCartItem!(this.props.eachProduct!.productId);
    }

    render() {
        const { eachProduct, cartProducts } = this.props;
        const cartProduct = cartProducts!.find(eachProd => eachProd?.productId === this.props.eachProduct?.productId)
        console.log("after state update", cartProduct)

        return (
            <Box sx={bestSellersCardStyles.cardCont} onClick={this.bestSellerCardHandler}>
                <Box
                    component={"img"}
                    src={eachProduct?.productImg}
                    sx={bestSellersCardStyles.itemImg}
                />
                <Typography sx={bestSellersCardStyles.itemName}>{eachProduct?.productName}</Typography>
                <Typography sx={bestSellersCardStyles.price}>
                    {eachProduct?.productPrice}
                    <Box component={"span"} sx={bestSellersCardStyles.originalPrice}>
                        {eachProduct?.productOriginalPrice}
                    </Box>
                </Typography>
                {cartProduct && cartProduct.productQuantity > 0 ? (
                    <Box sx={bestSellersCardStyles.addRemoveBox}>
                        <RemoveIcon id="icon" onClick={this.decrementQuantityHandler} />
                        <Divider orientation="vertical" flexItem />
                        <Typography sx={bestSellersCardStyles.quantity}>
                            {cartProduct?.productQuantity.toString()}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <AddIcon id="icon" onClick={this.incrementQuantityHandler} />
                    </Box>
                ) : (
                    <Button
                        sx={bestSellersCardStyles.addToCartBtn}
                        onClick={this.addToCartHandler}
                    >
                        Add To Cart
                    </Button>
                )}
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
    connect(mapStateToProps, mapDispatchToProps)(BestSellersCard)
);
