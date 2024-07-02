import { Box, Typography } from "@mui/material";
import React, { Component, RefObject } from "react";
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
import withRouter from "../../hoc/withRouter";

interface HomePageState {
    isPincodePopupOpened: boolean;
    isSpeedDialOpened: boolean;
    pincodeValue: number | string;
}


interface MyProps {
    navigate: (path: string) => void;
}

class HomePage extends Component<MyProps, HomePageState> {
    private pincodePopupRef: RefObject<HTMLDivElement>;

    constructor(props: MyProps) {
        super(props);
        this.state = { isPincodePopupOpened: true, isSpeedDialOpened: false, pincodeValue: "" };
        this.pincodePopupRef = React.createRef();
    }

    openPincodePopupHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
        this.setState({ isPincodePopupOpened: true });
    }

    closePincodePopupHandler = () => {
        if (this.state.pincodeValue !== "") this.setState({ isPincodePopupOpened: false });
    }

    handleClickOutside = (event: MouseEvent) => {
        console.log("outside", this.state.isPincodePopupOpened);
        if (this.state.isPincodePopupOpened && this.pincodePopupRef.current && !this.pincodePopupRef.current.contains(event.target as Node)) {
            this.closePincodePopupHandler()
            // this.setState({ isSpeedDialOpened: false });
        }
    };

    handleScroll = () => {
        // if (this.state.isPincodePopupOpened) {
        //     this.closePincodePopupHandler();
        // }
    };

    componentDidMount() {
        document.addEventListener("click", this.handleClickOutside);
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
        window.removeEventListener("scroll", this.handleScroll);
    }

    pincodeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ pincodeValue: +event.target.value });
    }

    pincodeArrowRightBtnHandler = () => {
        this.closePincodePopupHandler();
    }

    listItemsClickHandler = (path : string) => {
        this.props.navigate(path)
    }

    renderPincodePopUpJSX = () => {
        // console.log(this.state.isPincodePopupOpened);
        return (
            <Box sx={{ height: this.state.isPincodePopupOpened ? homePageStyles.shadowContOpened : homePageStyles.shadowContClosed }}>
                <Box ref={this.pincodePopupRef} sx={{ height: this.state.isPincodePopupOpened ? homePageStyles.pincodeContOpened : homePageStyles.pincodeContClosed }}>
                    <Box onClick={this.closePincodePopupHandler} component="img" alt="close-icon" src={closeImg} />
                    <Typography>Delivery Location</Typography>
                    <Typography>Serviceable Locations : Bengaluru |</Typography>
                    <Typography>Chennai | Coimbatore | Hyderabad</Typography>
                    <Typography>Puducherry | Turpur | Vellore</Typography>
                    <Box sx={homePageStyles.pinCodeInputCont}>
                        <Box component={"img"} src={locationRed} alt="location-icon" />
                        <Box onChange={this.pincodeInputHandler} component={"input"} placeholder="Enter PIN Code" type="number" value={this.state.pincodeValue} />
                        <Box onClick={this.pincodeArrowRightBtnHandler}>
                            <Box component={"img"} src={arrowRightImg} alt="arrow-right-icon" />
                        </Box>
                    </Box>
                    {this.state.pincodeValue === "" && <Typography sx={homePageStyles.pincodeErrMsg}>*Please Enter Valid Pincode</Typography>}
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
                <TopNavbar isSpeedDialOpened={this.state.isSpeedDialOpened} navigateHandler={this.listItemsClickHandler}/>
                <Box sx={{
                    ...homePageStyles.container, overflow: this.state.isSpeedDialOpened ? "hidden" : "auto",
                    position: this.state.isSpeedDialOpened || this.state.isPincodePopupOpened ? "fixed" : "relative",
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
                            <Box component={"input"} placeholder="500042" readOnly value={this.state.pincodeValue} />
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
                                <Box sx={{ width: this.state.isSpeedDialOpened ? homePageStyles.backgroundContOpen : homePageStyles.backgroundContClose }}>
                                    <Box sx={{ display: this.state.isSpeedDialOpened ? homePageStyles.iconsImgsContOpened : homePageStyles.iconsImgsContClose }}>
                                        <Box component="img" src={messageIconImg} alt="message-icon-img" />
                                        <Box component="img" src={phoneIconImg} alt="phone-icon-img" />
                                        <Box component="img" src={closeIconImg} alt="close-icon-img" onClick={this.handleCloseSpeedDial} />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <BottomNavbar isSpeedDialOpened={this.state.isSpeedDialOpened} navigateHandler={this.listItemsClickHandler}/>
                {this.renderPincodePopUpJSX()}
                {/* {this.state.isPincodePopupOpened === false && this.renderPincodePopUpJSX()} */}
            </Box>
        );
    }
}

export default withRouter(HomePage);
