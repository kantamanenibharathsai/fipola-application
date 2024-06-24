import { Box, Typography } from "@mui/material";
import { Component } from "react";
import arrowRightImg from "../../assets/home/arrowback.png";
import closeImg from "../../assets/home/closeImg.png";
import headsetImg from "../../assets/home/headset.png";
import pincodeLogo from "../../assets/home/location.png";
import locationRed from "../../assets/home/locationRed.png";
import pressCorner from "../../assets/home/pressCorner.png";
import searchLogo from "../../assets/home/search.png";
import BottomNavbar from "../../components/bottom_navbar/BottomNavbar";
import DraggableImageSlider from "../../components/draggable_slider/DraggableSlider";
import Carousel from "../../components/draggable_slider_2/DraggableSlider";
import RecipesCarousel from "../../components/receipes/ReceipesCarousel";
import TopNavbar from "../../components/top_navbar/TopNavbar";
import homePageStyles from "./HomePage.Styles";


interface HomePageState {
    isPincodePopupOpened: boolean | null;
}

class HomePage extends Component<{}, HomePageState> {
    state: HomePageState = { isPincodePopupOpened: null }

    openPincodePopupHandler = () => {
        this.setState({ isPincodePopupOpened: true });
    }

    closePincodePopupHandler = () => {
        this.setState({ isPincodePopupOpened: false });
    }

    renderPincodePopUpJSX = () => {
        console.log(this.state.isPincodePopupOpened);
        return (
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
        )
    }


    render() {
        return (
            <>
                <TopNavbar />
                <Box sx={{ ...homePageStyles.container }}>
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
                        <Typography sx={homePageStyles.bestSellersText}>Best Sellers</Typography>
                        <Carousel />
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
                                <Box sx={homePageStyles.headsetImgCont}>
                                    <Box component="img" src={headsetImg} alt="headset" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <BottomNavbar />
                {this.state.isPincodePopupOpened === true && this.renderPincodePopUpJSX()}
                {this.state.isPincodePopupOpened === false && this.renderPincodePopUpJSX()}
            </>
        );
    }
}

export default HomePage;
