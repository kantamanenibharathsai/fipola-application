import { Box, Typography } from "@mui/material";
import { Component, } from "react";
import homePageStyles from "./HomePage.Styles";
import searchLogo from "../../assets/home/search.png";
import pincodeLogo from "../../assets/home/location.png"
import DraggableImageSlider from "../../components/draggable_slider/DraggableSlider";
import Carousel from "../../components/draggable_slider_2/DraggableSlider";
import RecipesCarousel from "../../components/receipes/ReceipesCarousel";
import pressCorner from "../../assets/home/pressCorner.png";
import headsetImg from "../../assets/home/headset.png";
import TopNavbar from "../../components/top_navbar/TopNavbar";
import BottomNavbar from "../../components/bottom_navbar/BottomNavbar";



class HomePage extends Component<{}, {}> {


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

                        <Box sx={{ ...homePageStyles.textFieldCont, width: "32%" }}>
                            <Box component={"img"} src={pincodeLogo} alt="location-logo" />
                            <Box component={"input"} placeholder="500042" />
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
            </>
        );
    }
}

export default HomePage;
