import { Box, Button, Stack } from "@mui/material";
import React, { Component, RefObject } from "react";
import mansLogo from "../../assets/navbar/Profile.png";
import hamburgerLogo from "../../assets/navbar/Segment.png";
import aboutLogo from "../../assets/navbar/about.png";
import certificatesLogo from "../../assets/navbar/certificates.png";
import contactLogo from "../../assets/navbar/contact.png";
import faqLogo from "../../assets/navbar/faq.png";
import fipolaOnWheelsLogo from "../../assets/navbar/fipolaOnWheels.png";
import franchiseLogo from "../../assets/navbar/franchise.png";
import homeLogo from "../../assets/navbar/homeLogo.png";
import orderHistLogo from "../../assets/navbar/orderHistory.png";
import termsAndConditLogo from "../../assets/navbar/termsAndCondit.png";
import fipolaLogo from "../../assets/splash_screen/fipolaLogo.png";
import topNavbarStyles from "./TopNavbar.Styles";

interface NavbarState {
    isDrawerDisplayed: boolean;

}

interface NavbarProps {
    isSpeedDialOpened?: boolean;
    navigateHandler?: (path: string) => void;
}

class TopNavbar extends Component<NavbarProps, NavbarState> {
    private drawerRef: RefObject<HTMLDivElement>;

    constructor(props: NavbarProps) {
        super(props);
        this.state = { isDrawerDisplayed: false };
        this.drawerRef = React.createRef();
    }

    handleClickOutside = (event: MouseEvent) => {
        if (this.drawerRef.current && !this.drawerRef.current.contains(event.target as Node)) {
            this.setState({ isDrawerDisplayed: false });
        }
    };

    handleScroll = () => {
        if (this.state.isDrawerDisplayed) {
            this.setState({ isDrawerDisplayed: false });
        }
    };

    componentDidMount() {
        document.addEventListener("click", this.handleClickOutside);
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleMobileDrawerHamburg = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        this.props.isSpeedDialOpened === false && this.setState({ isDrawerDisplayed: true });
    };

    handleListClick = (event: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
        const target = event.target as HTMLElement;
        const listItem = target.closest("li");
        if (!listItem) return;
        const textContent = listItem.textContent?.trim();
        switch (textContent) {
            case "Home":
                console.log("Home clicked");
                this.props.navigateHandler!("/");
                this.setState({ isDrawerDisplayed: false });
                break;
            case "About Us":
                console.log("About Us clicked");
                break;
            case "FAQ's":
                console.log("FAQ's clicked");
                break;
            case "Contact":
                console.log("Contact clicked");
                break;
            case "Fipola On Wheels":
                console.log("Fipola On Wheels clicked");
                break;
            case "Order History":
                console.log("Order History clicked");
                this.props.navigateHandler!("/orderHistory");
                this.setState({ isDrawerDisplayed: false });
                break;
            case "Terms & Conditions":
                console.log("Terms & Conditions clicked");
                break;
            case "Certificates":
                console.log("Certificates clicked");
                break;
            case "Franchise":
                console.log("Franchise clicked");
                break;
            default:
                break;
        }
    };

    renderMobileDrawer = () => (
        <Box sx={{ width: this.state.isDrawerDisplayed ? topNavbarStyles.backgroundContainerOpened : topNavbarStyles.backgroundContainerClosed }}>
            <Box
                ref={this.drawerRef}
                sx={{
                    width: this.state.isDrawerDisplayed ? topNavbarStyles.leftSideDrawerOpened : topNavbarStyles.leftSideDrawerClosed,
                }}
            >
                <Box sx={topNavbarStyles.logoCont}>
                    <Box component={"img"} src={fipolaLogo} alt="fipola-logo" sx={topNavbarStyles.fipolaLogo} />
                </Box>
                <Stack component="ul" direction={"column"} sx={topNavbarStyles.ulStackCont} onClick={this.handleListClick}>
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
                        <Box component={"span"} sx={{ ...topNavbarStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Terms & Conditions</Box>
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
                        onClick={() => this.props.navigateHandler!("/loginboarding")}
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
                <Box sx={{ ...topNavbarStyles.navContainer, zIndex: this.props.isSpeedDialOpened ? 0 : 1 }}>
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
                        <Stack onClick={this.handleListClick} direction={"row"} alignItems={"center"} gap={{ lg: 2.5, xl: 3 }} component="ul">
                            <Stack component="li" direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="home-logo" sx={topNavbarStyles.logo} src={homeLogo} />
                                <Box component={"span"} sx={{ ...topNavbarStyles.logoText, opacity: this.state.isDrawerDisplayed ? 1 : 0 }}>Home</Box>
                            </Stack>

                            <Stack component="li" direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="about-logo" sx={topNavbarStyles.logo} src={aboutLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>about</Box>
                            </Stack>

                            <Stack component="li" direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="faq-logo" sx={topNavbarStyles.logo} src={faqLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>FAQ's</Box>
                            </Stack>

                            <Stack component="li" direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="contact-logo" sx={topNavbarStyles.logo} src={contactLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>Contact</Box>
                            </Stack>

                            <Stack component="li" direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="fipola-on-wheels-logo" sx={topNavbarStyles.logo} src={fipolaOnWheelsLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>fipolaOnWheels</Box>
                            </Stack>

                            <Stack component="li" direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="order-history-logo" sx={topNavbarStyles.logo} src={orderHistLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>Order History</Box>
                            </Stack>

                            <Stack component="li" direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="home-logo" sx={topNavbarStyles.logo} src={termsAndConditLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>Terms & Conditions</Box>
                            </Stack>

                            <Stack component="li" direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="certificates-logo" sx={topNavbarStyles.logo} src={certificatesLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>Certificates</Box>
                            </Stack>

                            <Stack component="li" direction={"row"} alignItems={"center"} gap={"6px"} sx={topNavbarStyles.logoTextStack}>
                                <Box component="img" alt="certificates-logo" sx={topNavbarStyles.logo} src={franchiseLogo} />
                                <Box component={"span"} sx={topNavbarStyles.logoText}>Franchise</Box>
                            </Stack>
                            <Box component={"img"} src={mansLogo} alt="mans-logo" sx={topNavbarStyles.manLogo} />
                        </Stack>
                    </Box>
                </Box>
                {this.renderMobileDrawer()}
            </>
        )
    }
}

export default TopNavbar;
