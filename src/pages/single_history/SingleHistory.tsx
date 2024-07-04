import { Box, Stack, Typography } from "@mui/material";
import { Component } from "react";
import { connect } from "react-redux";
import calendarImg from "../../assets/single_history/calendarImg.png";
import watchLaterImg from "../../assets/single_history/watchLater.png";
import TopNavbarArrow from "../../components/top_navbar_arrow_icon/TopNavbarArrow";
import withRouter from "../../hoc/withRouter";
import { AppDispatch, RootState } from "../../redux/Store";
import { CartProductInterface } from "../../typescript/data";
import singleHistoryStyles from "./SingleHistory.Styles";

interface SingleHistoryCardProps {
    navigate?: (path: string) => void;
    eachProduct: CartProductInterface;
}
class SingleHistoryOrderedProduct extends Component<SingleHistoryCardProps, {}> {
    render() {
        return (
            <Box sx={singleHistoryStyles.cardCont}>
                <Box
                    component={"img"}
                    src={"https://s3-alpha-sig.figma.com/img/665f/e93d/de4463e54d4d3c4cb537c2a97fb6e3ae?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=De62qOsRCpgfITJutzKXpx20RJyJz5tqmsOGapd~AMS83~Vh9ZpoHwOipNJCh610UTRSlFMioK0d06zMYVJ5NOxgGdq-m-wudKASJtKKGKBP3vRVm8z2m2--jOq1VLUp5W0xxSQ1ql~AnoDQssPhfVKLjW~b1R8ozHaLdLHQZ8fb8iAqbDozCpLeXJ21rBvWUCjCiTie1~LdehuDxyuE9Z22~Ig-sy4H6ungPImBc4Ay6Caauog05JFDfWdEDWl03DARw5OeW9bAo0a28ZLssJdwa8IvC~eO0EbSqejf3PW4JMM6I7VXRVqr4WZKFmyQcKihVrvJmNkMFsZh~RE9Xw__"}
                    sx={singleHistoryStyles.itemImg}
                />
                <Typography sx={singleHistoryStyles.itemName}>Country Eggs Pack</Typography>
                <Typography sx={singleHistoryStyles.price}>
                    ₹173.00
                    <Box component={"span"} sx={singleHistoryStyles.originalPrice}>
                        200.00
                    </Box>
                </Typography>
            </Box>
        )
    }
}


interface MyProps {
    navigate: (path: string) => void;
    cartProducts?: CartProductInterface[];
}

class SingleHistory extends Component<MyProps, {}> {

    singleHistoryCardHandler = (path: string) => {
        this.props.navigate(path)
    }

    render() {

        return (
            <Box sx={singleHistoryStyles.mainCont}>
                <TopNavbarArrow childrenContent={"Order"} pathName={"/orderHistory"} navigateHandler={this.singleHistoryCardHandler} />
                <Box sx={singleHistoryStyles.emptyBox}></Box>
                <Box sx={singleHistoryStyles.bodyCont}>
                    <Box sx={singleHistoryStyles.bodyTopCont}>
                        <Box sx={singleHistoryStyles.centerChildCont}>
                            <Typography component={"h2"}>Order# ORD00003</Typography>
                            <Typography sx={singleHistoryStyles.price}>₹389.00</Typography>
                            <Stack direction={"row"} alignItems={"center"} gap={3.5}>
                                <Stack direction={"row"} alignItems={"center"} gap={0}>
                                    <Box
                                        component={"img"}
                                        src={watchLaterImg}
                                        alt="watch-later-img"
                                        sx={singleHistoryStyles.calenWatchImg}
                                    />
                                    <Typography sx={{ ...singleHistoryStyles.originalPrice, ...singleHistoryStyles.time, }}>03:25 PM</Typography>
                                </Stack>
                                <Stack direction={"row"} alignItems={"center"} gap={0}>
                                    <Box
                                        component={"img"}
                                        src={calendarImg}
                                        alt="watch-later-img"
                                        sx={singleHistoryStyles.calenWatchImg}
                                    />
                                    <Typography sx={{ ...singleHistoryStyles.originalPrice, ...singleHistoryStyles.time, }}>3 April 2022</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>

                    <Box sx={singleHistoryStyles.bodyCenterCont}>
                        <Box sx={singleHistoryStyles.centerChildCont}>
                            <Typography component={"h2"}>Ordered Product</Typography>
                            <Box sx={singleHistoryStyles.orderedProductsCont}>
                                {this.props.cartProducts?.map(eachProduct => <SingleHistoryOrderedProduct key={eachProduct.productId} eachProduct={eachProduct}/>)}
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={singleHistoryStyles.bodyBottomCont}>
                        <Box sx={singleHistoryStyles.centerChildCont}>
                            <Box sx={singleHistoryStyles.bottomTotalPriceCont}>
                                <Box>
                                    <Typography>Subtotal</Typography>
                                    <Typography>₹389.00</Typography>
                                </Box>
                                <Box>
                                    <Typography>Delivery Charge</Typography>
                                    <Typography>₹0</Typography>
                                </Box>
                                <Box>
                                    <Typography>Subtotal</Typography>
                                    <Typography>₹389.00</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    // handleSendOtp: () => dispatch({ type: 'SEND_OTP' }),
});


const mapStateToProps = (state: RootState
) => ({
    cartProducts: state.cart.cartProducts
});


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SingleHistory)
);