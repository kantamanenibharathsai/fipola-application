import { Box, Stack, Typography } from "@mui/material";
import { Component } from "react";
import Slider from "../../components/slider/Slider";
import loginBoardingScreenStyles from "./LoginBoardingScreen.Styles";
import PhoneIcon from '@mui/icons-material/Phone';
import RedButton from "../../components/red_button/RedButton";



class LoginBoardingScreen extends Component {
    state = { isBtnDisabled: true }

    render() {

        return (
            <Box height={"100vh"} width={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                <Box sx={loginBoardingScreenStyles.container}>
                    <Box alignItems={"center"} justifyContent={"center"} display={{ xs: "flex", lg: "block" }} margin={{ lg: "auto" }} height={{ xs: "60vh", lg: "100%" }} width={{ xs: "100%", lg: "50%", xl: "50%" }}>
                        <Slider />
                    </Box>
                    <Box sx={loginBoardingScreenStyles.bottomCont} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={{ xs: "40vh", lg: "100%" }} width={{ xs: "100%", lg: "50%", xl: "50%" }}>
                        <Stack width={{ xs: "95%", sm: "77%", md: "70%", lg: "75%" }} component="form" height={"95%"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={{ xs: "30px", lg: "35px" }}>
                            <Typography component={"h2"}>Login & Register</Typography>
                            <Box sx={loginBoardingScreenStyles.textFieldCont}>
                                <PhoneIcon />
                                <Box component={"input"} placeholder="Mobile No" type="number" />
                            </Box>
                            <RedButton isBtnDisabled={this.state.isBtnDisabled}>Continue</RedButton>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default LoginBoardingScreen