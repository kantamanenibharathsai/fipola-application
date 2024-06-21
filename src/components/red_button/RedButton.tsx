import { Button } from "@mui/material";
import { Component, forwardRef, Ref } from "react";
import { connect } from "react-redux";
import redBtnStyles from "./RedButton.Styles";
import { AppDispatch, RootState } from "../../redux/Store";
import { loginWithMobileNumber } from "../../redux/reducers/LoginRegisterSlice";

interface MyProps {
    children: React.ReactNode;
    isBtnDisabled: boolean;
    handleSendOtp?: () => void;
    forwardedRef?: Ref<HTMLButtonElement>;
    loginWithMobileNumber: (mobileNo: string) => void;
}

class RedButton extends Component<MyProps> {

    render() {
        const { children, isBtnDisabled, forwardedRef } = this.props;

        return (
            <Button
                disableElevation
                disableFocusRipple
                disableRipple
                disableTouchRipple
                sx={redBtnStyles.redBtn}
                disabled={isBtnDisabled}
                type="submit"
                ref={forwardedRef} // Use the forwarded ref
            >
                {children}
            </Button>
        );
    }
}

// Define mapDispatchToProps
const mapDispatchToProps = (dispatch: AppDispatch) => ({
    handleSendOtp: () => dispatch({ type: 'SEND_OTP' }),
    loginWithMobileNumber: (mobileNo: string) => dispatch(loginWithMobileNumber(mobileNo))
});

// Define mapStateToProps
const mapStateToProps = (state: RootState) => ({
    // isBtnDisabled: state.isBtnDisabled
});

// Connect the component to the Redux store and export it
export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(
    forwardRef<HTMLButtonElement, MyProps>((props, ref) => <RedButton {...props} forwardedRef={ref} />)
);
