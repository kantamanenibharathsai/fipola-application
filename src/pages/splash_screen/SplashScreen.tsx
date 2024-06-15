import { Box, Stack } from "@mui/material";
import { Component } from "react";
import splashScreenStyles from "./SplashScreen.Styles";
import startersImg from "../../assets/splash_screen/starters.png";
import fipolaLogoImg from "../../assets/splash_screen/fipolaLogo.png";
import rawPorkImg from "../../assets/splash_screen/rawpork.png";




class SplashScreen extends Component {



    render() {
        return (
            <Box sx={splashScreenStyles.container}>
                <Stack direction={"column"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box component={"img"} src={startersImg} alt="starters-img" />
                    <Box component={"img"} src={fipolaLogoImg} alt="fipola-img" />
                    <Box component={"img"} src={rawPorkImg} alt="rawpork-img" />
                </Stack>
            </Box>
        )
    }
}



export default SplashScreen