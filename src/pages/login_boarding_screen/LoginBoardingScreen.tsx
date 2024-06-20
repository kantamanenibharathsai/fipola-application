import { Box, Stack, Typography } from "@mui/material";
import { Component, createRef } from "react";
import Slider from "../../components/slider/Slider";
import loginBoardingScreenStyles from "./LoginBoardingScreen.Styles";
import PhoneIcon from '@mui/icons-material/Phone';
import RedButton from "../../components/red_button/RedButton";
import firebase from "../../firebase/firebase";
import withRouter from "../../hoc/withRouter";

interface MyProps {
    navigate: (path: string) => void
}

interface MyState { }
class LoginBoardingScreen extends Component<MyProps, MyState> {
    state = { isBtnDisabled: true, phoneNum: "8179041437", verificationId: "" };
    recaptchaRef = createRef<HTMLDivElement>();


    mobileNumHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ phoneNum: event.target.value.trim(), isBtnDisabled: event.target.value.trim().length === 10 ? false : true });
    }

    handleSendOtp = () => {
        if (this.recaptchaRef.current) {
            this.recaptchaRef.current.innerHTML = '<div id="recaptcha-container"></div>'
        }
        const verifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", { size: "invisible" });
        firebase.auth().signInWithPhoneNumber(this.state.phoneNum, verifier)
            .then((confirmationResult) => {
                this.setState({ verificationId: confirmationResult.verificationId });
            }).catch((error) => {

            })

    }

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
                            <div ref={this.recaptchaRef}></div>
                            <Box sx={loginBoardingScreenStyles.textFieldCont}>
                                <PhoneIcon />
                                <Box component={"input"} placeholder="Mobile No" type="number" value={this.state.phoneNum} onChange={this.mobileNumHandler} />
                            </Box>
                            <RedButton handleSendOtp={this.handleSendOtp} isBtnDisabled={this.state.isBtnDisabled}>Continue</RedButton>
                            <Typography sx={loginBoardingScreenStyles.dontHaveAccount}>Don't have an account? <Box component="span" onClick={() => this.props.navigate("/register")}>Register here</Box></Typography>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default withRouter(LoginBoardingScreen)