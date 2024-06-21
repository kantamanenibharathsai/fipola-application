import { Box, Stack, Typography } from "@mui/material";
import { Component } from "react";
import Slider from "../../components/slider/Slider";
import loginBoardingScreenStyles from "./LoginBoardingScreen.Styles";
import PhoneIcon from '@mui/icons-material/Phone';
import RedButton from "../../components/red_button/RedButton";
import withRouter from "../../hoc/withRouter";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../redux/Store";
import { IState, loginWithMobileNumber } from "../../redux/reducers/LoginRegisterSlice";


interface MyProps {
    navigate: (path: string) => void;
    // registerUserDetails: (userDetails: RegisterUserDetails) => void;
    // registeredData: IState["registeredData"] | null;
    apiStatus: string;
    loginErrMsg: string;
    loginWithMobileNumber: (mobileNo: string) => void;
    otpData: IState["otpData"]
}

interface MyState {
    isSpinnerRotating: boolean;
    timeoutId: NodeJS.Timeout | null;
    redirectTimeoutId: NodeJS.Timeout | null;
    isBtnDisabled: boolean;
    phoneNum: string;
    verificationId: string;
}

interface MyState { }
class LoginBoardingScreen extends Component<MyProps, MyState> {
    state = {
        isBtnDisabled: true, phoneNum: "", verificationId: "",
        isSpinnerRotating: false,
        timeoutId: null,
        redirectTimeoutId: null
    };


    mobileNumHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ phoneNum: event.target.value.trim(), isBtnDisabled: event.target.value.trim().length === 10 ? false : true });
    }

    mobileNoVerify = () => {
        this.props.loginWithMobileNumber(this.state.phoneNum.toString());
    }

    onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.mobileNoVerify();
        this.setState({ isSpinnerRotating: true });
        const timeoutId = setTimeout(() => {
            this.setState({ isSpinnerRotating: false });
            if (this.props.apiStatus === "Success" && !this.props.loginErrMsg) {
                const redirectTimeoutId = setTimeout(() => {
                    this.props.navigate("/deliveryloc");
                }, 4000);
                this.setState({ redirectTimeoutId });
            }

        }, 3000);
        this.setState({ timeoutId });
    }


    componentWillUnmount() {
        if (this.state.timeoutId) {
            clearTimeout(this.state.timeoutId);
        }
        if (this.state.redirectTimeoutId) {
            clearTimeout(this.state.redirectTimeoutId);
        }
    }

    render() {
        const { isSpinnerRotating } = this.state;
        const { loginErrMsg, apiStatus, otpData } = this.props;
        console.log("otpdata", otpData)

        return (
            <Box height={"100vh"} width={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                <Box sx={loginBoardingScreenStyles.container}>
                    <Box alignItems={"center"} justifyContent={"center"} display={{ xs: "flex", lg: "block" }} margin={{ lg: "auto" }} height={{ xs: "60vh", lg: "100%" }} width={{ xs: "100%", lg: "50%", xl: "50%" }}>
                        <Slider />
                    </Box>
                    <Box sx={loginBoardingScreenStyles.bottomCont} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={{ xs: "40vh", lg: "100%" }} width={{ xs: "100%", lg: "50%", xl: "50%" }}>
                        <Stack width={{ xs: "95%", sm: "77%", md: "70%", lg: "75%" }} component="form" onSubmit={this.onSubmitHandler} height={"95%"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={{ xs: "30px", lg: "35px" }}>
                            <Typography component={"h2"}>Login & Register</Typography>
                            <Box sx={loginBoardingScreenStyles.textFieldCont}>
                                <PhoneIcon />
                                <Box component={"input"} placeholder="Mobile No" type="number" value={this.state.phoneNum} onChange={this.mobileNumHandler} />
                            </Box>
                            {!isSpinnerRotating && <RedButton isBtnDisabled={this.state.isBtnDisabled}>Continue</RedButton>}
                            {isSpinnerRotating && (<Box sx={loginBoardingScreenStyles.spinnerContainerStyle}>
                                <Box sx={loginBoardingScreenStyles.spinner}></Box>
                            </Box>)}
                            {(!isSpinnerRotating && apiStatus === "Success" && otpData) && (
                                <Typography component="p" sx={loginBoardingScreenStyles.positiveResponse}>
                                    {`${otpData.message.slice(0, 3)}:`}
                                    <Box component="span">{otpData.data.otp}</Box>
                                    {`${otpData.message.slice(3)}`}
                                </Typography>
                            )}
                            {((!isSpinnerRotating) && apiStatus === "Success" && loginErrMsg) && (
                                <Typography sx={loginBoardingScreenStyles.negativeResponse}>*{loginErrMsg}</Typography>
                            )}
                            <Typography sx={loginBoardingScreenStyles.dontHaveAccount}>Don't have an account? <Box component="span" onClick={() => this.props.navigate("/register")}>Register here</Box></Typography>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        )
    }
}


const mapDispatchToProps = (dispatch: AppDispatch) => ({
    // handleSendOtp: () => dispatch({ type: 'SEND_OTP' }),
    loginWithMobileNumber: (mobileNo: string) => dispatch(loginWithMobileNumber(mobileNo))
});


const mapStateToProps = (state: RootState
) => ({
    loginErrMsg: state.loginRegister.mobileErrMsg,
    otpData: state.loginRegister.otpData,
    apiStatus: state.loginRegister.status
});


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(LoginBoardingScreen)
);