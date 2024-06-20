import { Box, Button, Stack } from "@mui/material";
import React, { Component, RefObject } from "react";
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
import topNavbarStyles from "./TopNavbar.Styles";


interface NavbarState {
    isDrawerDisplayed: boolean;
}

class TopNavbar extends Component<{}, NavbarState> {
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
        <Box sx={{ ...topNavbarStyles.blackWhiteBackgroundCont, width: this.state.isDrawerDisplayed ? "100%" : "0px", background: this.state.isDrawerDisplayed ? "rgba(0, 0, 0, 0.4)" : "#fff" }}>
            <Box
                ref={this.drawerRef}
                sx={{
                    ...topNavbarStyles.sidebarCont,
                    width: this.state.isDrawerDisplayed ? "250px" : "0px",
                    overflow: this.state.isDrawerDisplayed ? "visible" : "hidden",
                }}
            >
                <Box sx={topNavbarStyles.logoCont}>
                    <Box component={"img"} src={fipolaLogo} alt="fipola-logo" sx={topNavbarStyles.fipolaLogo} />
                </Box>
                <Stack component="ul" direction={"column"} sx={topNavbarStyles.ulStackCont}>
                    <Stack component="li" direction={"row"} alignItems={"center"} sx={topNavbarStyles.logoTextStack}>
                        <Box component="img" alt="home-logo" sx={topNavbarStyles.logo} src={homeLogo} />
                        <Box component={"span"} sx={{ ...topNavbarStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Home</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={topNavbarStyles.logoTextStack}>
                        <Box component="img" alt="about-logo" sx={topNavbarStyles.logo} src={aboutLogo} />
                        <Box component={"span"} sx={{ ...topNavbarStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>About Us</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={topNavbarStyles.logoTextStack}>
                        <Box component="img" alt="faq-logo" sx={topNavbarStyles.logo} src={faqLogo} />
                        <Box component={"span"} sx={{ ...topNavbarStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>FAQ's</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={topNavbarStyles.logoTextStack}>
                        <Box component="img" alt="contact-logo" sx={topNavbarStyles.logo} src={contactLogo} />
                        <Box component={"span"} sx={{ ...topNavbarStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Contact</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={topNavbarStyles.logoTextStack}>
                        <Box component="img" alt="fipola-on-wheels-logo" sx={topNavbarStyles.logo} src={fipolaOnWheelsLogo} />
                        <Box component={"span"} sx={{ ...topNavbarStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Fipola On Wheels</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={topNavbarStyles.logoTextStack}>
                        <Box component="img" alt="order-history-logo" sx={topNavbarStyles.logo} src={orderHistLogo} />
                        <Box component={"span"} sx={{ ...topNavbarStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Order History</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={topNavbarStyles.logoTextStack}>
                        <Box component="img" alt="home-logo" sx={topNavbarStyles.logo} src={termsAndConditLogo} />
                        <Box component={"span"} sx={{ ...topNavbarStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Term & Conditions</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={topNavbarStyles.logoTextStack}>
                        <Box component="img" alt="certificates-logo" sx={topNavbarStyles.logo} src={certificatesLogo} />
                        <Box component={"span"} sx={{ ...topNavbarStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Certificates</Box>
                    </Stack>

                    <Stack component="li" direction={"row"} alignItems={"center"} sx={topNavbarStyles.logoTextStack}>
                        <Box component="img" alt="certificates-logo" sx={topNavbarStyles.logo} src={franchiseLogo} />
                        <Box component={"span"} sx={{ ...topNavbarStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Franchise</Box>
                    </Stack>
                </Stack>
                <Box sx={topNavbarStyles.signOutBtnCont}>
                    <Button
                        disableElevation
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        sx={topNavbarStyles.signOutBtn}
                    >
                        Sign out
                    </Button>
                </Box>
            </Box>
        </Box>
    );


    render() {
        return (
            <>
                <Box sx={topNavbarStyles.navContainer}>
                    <Box sx={topNavbarStyles.navChildCont}>
                        <Box
                            onClick={this.handleMobileDrawerHamburg}
                            component={"img"}
                            src={hamburgerLogo}
                            alt="hamburger-logo"
                            sx={topNavbarStyles.hamburgerLogo}
                        />
                        <Box component={"img"} src={fipolaLogo} alt="fipola-logo" sx={topNavbarStyles.fipolaLogo} />
                        <Box component={"img"} src={mansLogo} alt="mans-logo" sx={topNavbarStyles.manLogo} />
                    </Box>

                    <Box sx={topNavbarStyles.navChildContDesk}>
                        <Box component={"img"} src={fipolaLogo} alt="fipola-logo" sx={topNavbarStyles.fipolaLogo} />
                        <Stack direction={"row"} alignItems={"center"} gap={{ lg: 2.5, xl: 3 }}>
                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="home-logo" sx={topNavbarStyles.logo} src={homeLogo} />
                                <Box component={"span"} sx={{ ...topNavbarStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Home</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="about-logo" sx={topNavbarStyles.logo} src={aboutLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>about</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="faq-logo" sx={topNavbarStyles.logo} src={faqLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>FAQ's</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="contact-logo" sx={topNavbarStyles.logo} src={contactLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>Contact</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="fipola-on-wheels-logo" sx={topNavbarStyles.logo} src={fipolaOnWheelsLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>fipolaOnWheels</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="order-history-logo" sx={topNavbarStyles.logo} src={orderHistLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>Order History</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="home-logo" sx={topNavbarStyles.logo} src={termsAndConditLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>Terms & Conditions</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="certificates-logo" sx={topNavbarStyles.logo} src={certificatesLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>Certificates</Box>
                            </Stack>

                            <Stack direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="certificates-logo" sx={topNavbarStyles.logo} src={franchiseLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>Franchise</Box>
                            </Stack>
                            <Box component={"img"} src={mansLogo} alt="mans-logo" sx={topNavbarStyles.manLogo} />
                        </Stack>
                    </Box>
                </Box>
                {this.state.isDrawerDisplayed && this.renderMobileDrawer()}
            </>
        )
    }
}


export default TopNavbar