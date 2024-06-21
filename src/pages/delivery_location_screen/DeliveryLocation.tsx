import React, { Component, createRef } from "react";
import { Box, Typography } from "@mui/material";
import delivLocStyles from "./DeliveryLocation.Styles";
import RedButton from "../../components/red_button/RedButton";
import withRouter from "../../hoc/withRouter";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../redux/Store";
import { IState, loginWithMobileNumber, loginWithOTP } from "../../redux/reducers/LoginRegisterSlice";


interface MyProps {
    navigate: (path: string) => void;
    apiStatus: string;
    loginErrMsg: string;
    loginWithOTP: (params: { mobile_number: string, otp: string }) => void;
    token: string;
    otpData: IState["otpData"];
}

interface MyState {
    isSpinnerRotating: boolean;
    timeoutId: NodeJS.Timeout | null;
    redirectTimeoutId: NodeJS.Timeout | null;
    isBtnDisabled: boolean;
    phoneNum: string;
    verificationId: string;
    otpValues: string[];
}
class DelivLoc extends Component<MyProps, MyState> {
    state = {
        isBtnDisabled: true, phoneNum: "", verificationId: "",
        isSpinnerRotating: false,
        timeoutId: null,
        redirectTimeoutId: null,
        otpValues: Array(4).fill("")
    }

    inputRefs = Array.from({ length: 4 }, () => createRef<HTMLInputElement>());
    buttonRef = createRef<HTMLButtonElement>();

    updateButtonState = () => {
        const allFilled = this.inputRefs.every(ref => ref.current && ref.current.value !== "");
        this.setState({ isBtnDisabled: !allFilled });
    }

    handleKeyUp = (event: KeyboardEvent, input: HTMLInputElement, index: number) => {
        const inputs = this.inputRefs.map(ref => ref.current!) as HTMLInputElement[];
        const nextInput = inputs[index + 1];
        const prevInput = inputs[index - 1];
        if (input.value.length > 1) {
            input.value = input.value[0];
            return;
        }
        if (nextInput && nextInput.hasAttribute("disabled") && input.value !== "") {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }
        if (event.key === "Backspace") {
            inputs.forEach((input, idx) => {
                if (index <= idx && prevInput) {
                    input.setAttribute("disabled", "true");
                    input.value = "";
                    prevInput.focus();
                }
            });
        }
        this.updateButtonState();
    }

    componentDidMount() {
        const inputs = this.inputRefs.map(ref => ref.current!) as HTMLInputElement[];
        inputs.forEach((input, index) => {
            input.addEventListener("keyup", (event) => this.handleKeyUp(event as KeyboardEvent, input, index));
        });
        window.addEventListener("load", () => {
            inputs[0].focus();
            this.updateButtonState();
        });
    }

    componentWillUnmount() {
        const inputs = this.inputRefs.map(ref => ref.current!) as HTMLInputElement[];
        inputs.forEach((input, index) => {
            input.removeEventListener("keyup", (event) => this.handleKeyUp(event as KeyboardEvent, input, index));
        });
        window.removeEventListener("load", () => this.updateButtonState());
    }

    otpNoVerify = () => {
        if (this.props.otpData) {
            this.setState({ otpValues: [] });
            this.props.loginWithOTP({ mobile_number: this.props.otpData.data.mobile_number, otp: this.props.otpData.data.otp });
        }
    }

    onSubmitEventHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.otpNoVerify();
        this.setState({ isSpinnerRotating: true });

        const timeoutId = setTimeout(() => {
            this.setState({ isSpinnerRotating: false });
            if (this.props.apiStatus === "Success" && !this.props.loginErrMsg) {
                const redirectTimeoutId = setTimeout(() => {
                    this.props.navigate("/");
                }, 4000);
                this.setState({ redirectTimeoutId });
            }

        }, 3000);
        this.setState({ timeoutId });
    }

    render() {
        const otpValues: number[] = [];
        if (this.props.otpData) {
            const otpNumStr = this.props.otpData.data.otp;
            console.log(otpNumStr)
            otpValues.push(+otpNumStr[0], +otpNumStr[1], +otpNumStr[2], +otpNumStr[3]);
        }

        return (
            <Box sx={delivLocStyles.container}>
                <Box sx={delivLocStyles.childCont} component={"form"} action="#" onSubmit={this.onSubmitEventHandler}>
                    <Box sx={delivLocStyles.flexCont}>
                        <Box alt="email-img" component={"img"} src={"https://s3-alpha-sig.figma.com/img/6fde/674c/72e7abf1b9b772441e893727b6f8c4a8?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0a7TBvajJD3GZYNneVtYpo6no3dHysKILubgNE2Opja7txRtk-GSUfMrxvxY0kOlSP9wg5PwPGYio50UgYnsq0vSWG3MX9gFhKVEkwGbds57-aIIet0760xg4iMA35KCPJ~C-C7kADmiGz-V6KXZNfbz7X2Z-AhDhg19SRxTyHn4wVcC99PBFJpDTmwQqvxlbgWDSFERqcH0bSzaqStgMKCFTZQMWm7FEde439CFDugtM-IMJo0tjJ72AaMzXAkGCVM7yG1pw0SrGFyiMStloBLzT5zp6aUY2g3HYK3djHAeDeTBfLcmkCETnyPnlF-cNwsEFRijtE8WUgnQyGFQA__"} />
                        <Typography component={"h2"}>OTP Verification</Typography>
                        <Typography component={"p"}>Enter the OTP sent To</Typography>
                        <Typography component={"p"}>+91 8179041437</Typography>
                        <Box sx={delivLocStyles.otpCont}>
                            {this.inputRefs.map((ref, index) => {
                                return (<Box value={otpValues[index]} component={"input"} type="number" disabled={index !== 0} ref={ref} key={index} />)
                            }
                            )}
                        </Box>
                    </Box>
                    <Box sx={delivLocStyles.flexCont}>
                        <Typography component={"p"}>Don't receive OTP <Box id="resend" component={"span"}>Resend</Box></Typography>
                        <RedButton ref={this.buttonRef} isBtnDisabled={this.state.isBtnDisabled}>Submit</RedButton>
                    </Box>
                </Box>
            </Box>
        )
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    // handleSendOtp: () => dispatch({ type: 'SEND_OTP' }),
    loginWithOTP: (params: { mobile_number: string, otp: string }) => dispatch(loginWithOTP(params))
});


const mapStateToProps = (state: RootState
) => ({
    // loginErrMsg: state.loginRegister.mobileErrMsg,
    otpData: state.loginRegister.otpData,
    apiStatus: state.loginRegister.status,
    token: state.loginRegister.token
});


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(DelivLoc)
);
