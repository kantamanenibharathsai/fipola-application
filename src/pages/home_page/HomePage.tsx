import { Box, Typography } from "@mui/material";
import { Component } from "react";
import arrowRightImg from "../../assets/home/arrowback.png";
import closeIconImg from "../../assets/home/closeIcon.png";
import closeImg from "../../assets/home/closeImg.png";
import headsetImg from "../../assets/home/headset.png";
import pincodeLogo from "../../assets/home/location.png";
import locationRed from "../../assets/home/locationRed.png";
import messageIconImg from "../../assets/home/message.png";
import phoneIconImg from "../../assets/home/phone.png";
import pressCorner from "../../assets/home/pressCorner.png";
import searchLogo from "../../assets/home/search.png";
import BestSellerCarousel from "../../components/best_seller_carousel/BestSellerCarousel";
import BottomNavbar from "../../components/bottom_navbar/BottomNavbar";
import DraggableImageSlider from "../../components/draggable_slider/DraggableSlider";
import RecipesCarousel from "../../components/receipes/ReceipesCarousel";
import TopNavbar from "../../components/top_navbar/TopNavbar";
import homePageStyles from "./HomePage.Styles";

interface HomePageState {
    isPincodePopupOpened: boolean | null;
    isSpeedDialOpened: boolean;
}

class HomePage extends Component<{}, HomePageState> {
    state: HomePageState = { isPincodePopupOpened: null, isSpeedDialOpened: false }

    openPincodePopupHandler = () => {
        this.setState({ isPincodePopupOpened: true });
    }

    closePincodePopupHandler = () => {
        this.setState({ isPincodePopupOpened: false });
    }

    renderPincodePopUpJSX = () => {
        console.log(this.state.isPincodePopupOpened);
        return (
            <Box sx={{ ...homePageStyles.shadowCont, ...(this.state.isPincodePopupOpened === true && homePageStyles.displayBottomPopup), ...(this.state.isPincodePopupOpened === false && homePageStyles.closeBottomPopup), opacity: this.state.isPincodePopupOpened ? 1 : 0 }}>
                <Box sx={{ ...homePageStyles.pincodeCont, ...(this.state.isPincodePopupOpened === true && homePageStyles.displayBottomPopup), ...(this.state.isPincodePopupOpened === false && homePageStyles.closeBottomPopup) }}>
                    <Box onClick={this.closePincodePopupHandler} component="img" alt="close-icon" src={closeImg} />
                    <Typography>Delivery Location</Typography>
                    <Typography>Serviceable Locations : Bengaluru |</Typography>
                    <Typography>Chennai | Coimbatore | Hysrabad</Typography>
                    <Typography>Puducherry | Turpur | Vellore</Typography>
                    <Box sx={homePageStyles.pinCodeInputCont}>
                        <Box component={"img"} src={locationRed} alt="location-icon" />
                        <Box component={"input"} placeholder="Enter PIN Code" type="number" />
                        <Box>
                            <Box component={"img"} src={arrowRightImg} alt="arrow-right-icon" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }

    handleOpenSpeedDial = () => {
        this.setState({ isSpeedDialOpened: true })
    }

    handleCloseSpeedDial = () => {
        this.setState({ isSpeedDialOpened: false })
    }


    render() {
        return (
            <Box>
                <TopNavbar isSpeedDialOpened={this.state.isSpeedDialOpened} />
                <Box sx={{
                    ...homePageStyles.container, overflow: this.state.isSpeedDialOpened ? "hidden" : "auto",
                    position: this.state.isSpeedDialOpened ? "fixed" : "relative",
                    ...(this.state.isSpeedDialOpened && homePageStyles.opaqueCont)
                    // width: "100%",
                    // height: "100%"
                }}>
                    <Box sx={homePageStyles.searchPincodeCont}>
                        <Box sx={homePageStyles.textFieldCont}>
                            <Box component={"img"} src={searchLogo} alt="search-logo" />
                            <Box component={"input"} placeholder="Search..." />
                        </Box>

                        <Box sx={{ ...homePageStyles.textFieldCont, width: "32%", cursor: "pointer" }} onClick={this.openPincodePopupHandler}>
                            <Box component={"img"} src={pincodeLogo} alt="location-logo" />
                            <Box component={"input"} placeholder="500042" readOnly />
                        </Box>
                    </Box>
                    <DraggableImageSlider />
                    <Box sx={homePageStyles.bestSellerCont}>
                        <Box id="bestSellerChildCont">
                            <Typography sx={homePageStyles.bestSellersText}>Best Sellers</Typography>
                            <BestSellerCarousel />
                        </Box>
                    </Box>
                    <Box sx={homePageStyles.receipesCont}>
                        <Box id="receipeChildCont">
                            <Typography component={"h2"}>Receipes</Typography>
                            <RecipesCarousel />
                        </Box>
                    </Box>
                    <Box sx={homePageStyles.pressCornerCont}>
                        <Box sx={homePageStyles.pressCornerChildCont}>
                            <Typography component={"h2"}>Press Corner</Typography>
                            <Box sx={homePageStyles.cardCont}>
                                <Box component="img" src={pressCorner} alt="press-corner" />
                                <Box>
                                    <Box>
                                        <Typography component={"p"}>Fipola on expansion mode, enters Hyderabad with 14 stores</Typography>
                                        <Typography component={"p"}>September 09, 2021 | The Hindu</Typography>
                                    </Box>
                                </Box>
                                <Box onClick={this.handleOpenSpeedDial} sx={{ ...homePageStyles.headsetImgCont, display: this.state.isSpeedDialOpened ? "none" : "flex" }}>
                                    <Box component="img" src={headsetImg} alt="headset" />
                                </Box>

                                <Box sx={{ ...homePageStyles.iconsImgsCont, display: this.state.isSpeedDialOpened ? "flex" : "none" }}>
                                    <Box component="img" src={messageIconImg} alt="message-icon-img" />
                                    <Box component="img" src={phoneIconImg} alt="phone-icon-img" />
                                    <Box component="img" src={closeIconImg} alt="close-icon-img" onClick={this.handleCloseSpeedDial} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <BottomNavbar isSpeedDialOpened={this.state.isSpeedDialOpened} />
                {this.state.isPincodePopupOpened === true && this.renderPincodePopUpJSX()}
                {this.state.isPincodePopupOpened === false && this.renderPincodePopUpJSX()}
            </Box>
        );
    }
}

export default HomePage;
