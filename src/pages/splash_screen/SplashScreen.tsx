import { Box, Stack } from "@mui/material";
import { Component } from "react";
import fipolaLogoImg from "../../assets/splash_screen/fipolaLogo.png";
import rawPorkImg from "../../assets/splash_screen/rawpork.png";
import startersImg from "../../assets/splash_screen/starters.png";
import withRouter from "../../hoc/withRouter";
import splashScreenStyles from "./SplashScreen.Styles";



interface MyProps {
    navigate: (path: string) => void;
}
class SplashScreen extends Component<MyProps, {}> {


    fipolaLogoHandler = () => {
        this.props.navigate("/loginboarding")
    }


    render() {
        return (
            <Box sx={splashScreenStyles.container}>
                <Stack direction={"column"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box component={"img"} src={startersImg} alt="starters-img" />
                    <Box component={"img"} src={fipolaLogoImg} alt="fipola-img" onClick={this.fipolaLogoHandler} />
                    <Box component={"img"} src={rawPorkImg} alt="rawpork-img" />
                </Stack>
            </Box>
        )
    }
}


export default withRouter(SplashScreen);