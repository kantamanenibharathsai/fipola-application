import { Box, Button, Stack, Typography } from "@mui/material";
import React, { Component, RefObject } from "react";
import homePageStyles from "./HomePage.Styles";
import hamburgerLogo from "../../assets/navbar/Segment.png";
import fipolaLogo from "../../assets/splash_screen/fipolaLogo.png";
import mansLogo from "../../assets/navbar/Profile.png";
import homeLogo from "../../assets/navbar/homeLogo.png";
import aboutLogo from "../../assets/navbar/about.png";
import faqLogo from "../../assets/navbar/faq.png";
import contactLogo from "../../assets/navbar/contact.png";
import fipolaOnWheelsLogo from "../../assets/navbar/fipolaOnWheels.png";
import orderHistLogo from "../../assets/navbar/orderHistory.png";
import termsAndConditLogo from "../../assets/navbar/termsAndCondit.png";
import certificatesLogo from "../../assets/navbar/certificates.png";
import franchiseLogo from "../../assets/navbar/franchise.png";
import searchLogo from "../../assets/home/search.png";
import pincodeLogo from "../../assets/home/location.png"
import DraggableImageSlider from "../../components/draggable_slider/DraggableSlider";
import Carousel from "../../components/draggable_slider_2/DraggableSlider";
import RecipesCarousel from "../../components/receipes/ReceipesCarousel";





interface HomePageState {
    isDrawerDisplayed: boolean;
}

class HomePage extends Component<{}, HomePageState> {
    private drawerRef: RefObject<HTMLDivElement>;

    constructor(props: {}) {
        super(props);
        this.state = { isDrawerDisplayed: false };
        this.drawerRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener("click", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    }

    handleClickOutside = (event: MouseEvent) => {
        if (this.drawerRef.current && !this.drawerRef.current.contains(event.target as Node)) {
            this.setState({ isDrawerDisplayed: false });
        }
    };

    handleMobileDrawerHamburg = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        this.setState({ isDrawerDisplayed: true });
    };

    renderMobileDrawer = () => (
        <Box sx={{ ...homePageStyles.blackWhiteBackgroundCont, width: this.state.isDrawerDisplayed ? "100%" : "0px", background: this.state.isDrawerDisplayed ? "rgba(0, 0, 0, 0.4)" : "#fff" }}>
            <Box
                ref={this.drawerRef}
                sx={{
                    ...homePageStyles.sidebarCont,
                    width: this.state.isDrawerDisplayed ? "250px" : "0px",
                    overflow: this.state.isDrawerDisplayed ? "visible" : "hidden",
                }}
            >
                <Box sx={homePageStyles.logoCont}>
                    <Box component={"img"} src={fipolaLogo} alt="fipola-logo" sx={homePageStyles.fipolaLogo} />
                </Box>
                <Stack component="ul" direction={"column"} sx={homePageStyles.ulStackCont}>
                    <Stack component="li" direction={"row"} alignItems={"center"} sx={homePageStyles.logoTextStack}>
                        <Box component="img" alt="home-logo" sx={homePageStyles.logo} src={homeLogo} />
                        <Box component={"span"} sx={{ ...homePageStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Home</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={homePageStyles.logoTextStack}>
                        <Box component="img" alt="about-logo" sx={homePageStyles.logo} src={aboutLogo} />
                        <Box component={"span"} sx={{ ...homePageStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>About Us</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={homePageStyles.logoTextStack}>
                        <Box component="img" alt="faq-logo" sx={homePageStyles.logo} src={faqLogo} />
                        <Box component={"span"} sx={{ ...homePageStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>FAQ's</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={homePageStyles.logoTextStack}>
                        <Box component="img" alt="contact-logo" sx={homePageStyles.logo} src={contactLogo} />
                        <Box component={"span"} sx={{ ...homePageStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Contact</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={homePageStyles.logoTextStack}>
                        <Box component="img" alt="fipola-on-wheels-logo" sx={homePageStyles.logo} src={fipolaOnWheelsLogo} />
                        <Box component={"span"} sx={{ ...homePageStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Fipola On Wheels</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={homePageStyles.logoTextStack}>
                        <Box component="img" alt="order-history-logo" sx={homePageStyles.logo} src={orderHistLogo} />
                        <Box component={"span"} sx={{ ...homePageStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Order History</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={homePageStyles.logoTextStack}>
                        <Box component="img" alt="home-logo" sx={homePageStyles.logo} src={termsAndConditLogo} />
                        <Box component={"span"} sx={{ ...homePageStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Term & Conditions</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={homePageStyles.logoTextStack}>
                        <Box component="img" alt="certificates-logo" sx={homePageStyles.logo} src={certificatesLogo} />
                        <Box component={"span"} sx={{ ...homePageStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Certificates</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={homePageStyles.logoTextStack}>
                        <Box component="img" alt="certificates-logo" sx={homePageStyles.logo} src={franchiseLogo} />
                        <Box component={"span"} sx={{ ...homePageStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Franchise</Box>
                    </Stack>
                </Stack>
                <Box sx={homePageStyles.signOutBtnCont}>
                    <Button
                        disableElevation
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        sx={homePageStyles.signOutBtn}
                    >
                        Sign out
                    </Button>
                </Box>
            </Box>
        </Box>
    );

    render() {
        return (
            <Box sx={{ ...homePageStyles.container }}>
                <Box sx={homePageStyles.navContainer}>
                    <Box sx={homePageStyles.navChildCont}>
                        <Box
                            onClick={this.handleMobileDrawerHamburg}
                            component={"img"}
                            src={hamburgerLogo}
                            alt="hamburger-logo"
                            sx={homePageStyles.hamburgerLogo}
                        />
                        <Box component={"img"} src={fipolaLogo} alt="fipola-logo" sx={homePageStyles.fipolaLogo} />
                        <Box component={"img"} src={mansLogo} alt="mans-logo" sx={homePageStyles.manLogo} />
                    </Box>

                    <Box sx={homePageStyles.navChildContDesk}>
                        <Box component={"img"} src={fipolaLogo} alt="fipola-logo" sx={homePageStyles.fipolaLogo} />
                        <Stack direction={"row"} alignItems={"center"} gap={{ lg: 2.5, xl: 3 }}>
                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={homePageStyles.logoTextStack}>
                                <Box component="img" alt="home-logo" sx={homePageStyles.logo} src={homeLogo} />
                                <Box component={"span"} sx={{ ...homePageStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Home</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={homePageStyles.logoTextStack}>
                                <Box component="img" alt="about-logo" sx={homePageStyles.logo} src={aboutLogo} />
                                <Box component={"span"} sx={homePageStyles.logoText}>about</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={homePageStyles.logoTextStack}>
                                <Box component="img" alt="faq-logo" sx={homePageStyles.logo} src={faqLogo} />
                                <Box component={"span"} sx={homePageStyles.logoText}>FAQ's</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={homePageStyles.logoTextStack}>
                                <Box component="img" alt="contact-logo" sx={homePageStyles.logo} src={contactLogo} />
                                <Box component={"span"} sx={homePageStyles.logoText}>Contact</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={homePageStyles.logoTextStack}>
                                <Box component="img" alt="fipola-on-wheels-logo" sx={homePageStyles.logo} src={fipolaOnWheelsLogo} />
                                <Box component={"span"} sx={homePageStyles.logoText}>fipolaOnWheels</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={homePageStyles.logoTextStack}>
                                <Box component="img" alt="order-history-logo" sx={homePageStyles.logo} src={orderHistLogo} />
                                <Box component={"span"} sx={homePageStyles.logoText}>Order History</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={homePageStyles.logoTextStack}>
                                <Box component="img" alt="home-logo" sx={homePageStyles.logo} src={termsAndConditLogo} />
                                <Box component={"span"} sx={homePageStyles.logoText}>Terms & Conditions</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={homePageStyles.logoTextStack}>
                                <Box component="img" alt="certificates-logo" sx={homePageStyles.logo} src={certificatesLogo} />
                                <Box component={"span"} sx={homePageStyles.logoText}>Certificates</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={homePageStyles.logoTextStack}>
                                <Box component="img" alt="certificates-logo" sx={homePageStyles.logo} src={franchiseLogo} />
                                <Box component={"span"} sx={homePageStyles.logoText}>Franchise</Box>
                            </Stack>
                            <Box component={"img"} src={mansLogo} alt="mans-logo" sx={homePageStyles.manLogo} />
                        </Stack>
                    </Box>
                </Box>
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
                {this.renderMobileDrawer()}
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
            </Box>
        );
    }
}

export default HomePage;
