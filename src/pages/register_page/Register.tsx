import React from "react";
import styles from "./Register.Styles";
import {
    AppBar,
    Box,
    Button,
    Container,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import withRouter from "../../hoc/withRouter";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import {
    IState,
    registerUserDetails,
} from "../../redux/reducers/LoginRegisterSlice";
import { AppDispatch, RootState } from "../../redux/Store";
import { connect } from "react-redux";

interface RegisterUserDetails {
    fname: string;
    lname: string;
    email: string;
    password: string;
    mobileNumber: string;
}

interface RegisterProps {
    navigate: (path: string) => void;
    registerUserDetails: (userDetails: RegisterUserDetails) => void;
    registeredData: IState["registeredData"] | null;
    apiStatus: string;
    registerErrMsg: string;
}

interface RegisterState {
    isSpinnerRotating: boolean;
    timeoutId: NodeJS.Timeout | null;
    redirectTimeoutId: NodeJS.Timeout | null;
}

class RegisterPage extends React.Component<RegisterProps, RegisterState> {
    state: RegisterState = {
        isSpinnerRotating: false,
        timeoutId: null,
        redirectTimeoutId: null
    };

    validationSchema = Yup.object().shape({
        fname: Yup.string().required("*First Name is required"),
        lname: Yup.string().required("*Last Name is required"),
        email: Yup.string()
            .matches(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "*Invalid email format"
            )
            .required("*Email is required"),
        password: Yup.string()
            .min(6, "*Password must be at least 6 characters")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                "*Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
            )
            .required("*Password is required"),
        mobileNumber: Yup.string()
            .matches(/^\d{10}$/, "*Mobile Number must be exactly 10 digits")
            .required("*Mobile Number is required"),
    });

    handleRegister = async (
        values: RegisterUserDetails,
        actions: FormikHelpers<RegisterUserDetails>
    ) => {
        this.setState({ isSpinnerRotating: true });
        this.props.registerUserDetails(values);
        const timeoutId = setTimeout(() => {
            this.setState({ isSpinnerRotating: false });
            actions.setSubmitting(false);
            if (this.props.apiStatus === "Success" && !this.props.registerErrMsg) {
                const redirectTimeoutId = setTimeout(() => {
                    this.props.navigate("/loginboarding");
                }, 2000);
                this.setState({ redirectTimeoutId });
            }

        }, 3000);
        this.setState({ timeoutId });
    };

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
        const { registerErrMsg, apiStatus, registeredData } = this.props;

        return (
            <Box>
                <Box sx={styles.headerBox}>
                    <AppBar position="static" sx={styles.appbar}>
                        <Toolbar>
                            <Typography
                                variant="h6"
                                sx={styles.registerText}
                                data-testid="register-text"
                            >
                                Register
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Formik
                    initialValues={{
                        fname: "",
                        lname: "",
                        email: "",
                        password: "",
                        mobileNumber: "",
                    }}
                    validationSchema={this.validationSchema}
                    onSubmit={(values, actions) => this.handleRegister(values, actions)}
                >
                    {(props) => (
                        <Box component={"form"} onSubmit={props.handleSubmit}>
                            <Container maxWidth="xs">
                                <Box>
                                    <TextField
                                        InputLabelProps={{
                                            style: { ...styles.textfieldLabel },
                                        }}
                                        label="First Name"
                                        type="text"
                                        name="fname"
                                        sx={styles.textfield}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        onFocus={props.handleBlur}
                                        value={props.values.fname}
                                        error={props.touched.fname && Boolean(props.errors.fname)}
                                        helperText={props.touched.fname && props.errors.fname}
                                    />
                                </Box>
                                <Box>
                                    <TextField
                                        InputLabelProps={{
                                            style: { ...styles.textfieldLabel },
                                        }}
                                        label="Last Name"
                                        type="text"
                                        name="lname"
                                        sx={styles.textfield}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        onFocus={props.handleBlur}
                                        value={props.values.lname}
                                        error={props.touched.lname && Boolean(props.errors.lname)}
                                        helperText={props.touched.lname && props.errors.lname}
                                    />
                                </Box>
                                <Box>
                                    <TextField
                                        InputLabelProps={{
                                            style: { ...styles.textfieldLabel },
                                        }}
                                        label="Email"
                                        type="email"
                                        name="email"
                                        autoComplete=""
                                        sx={styles.textfield}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        onFocus={props.handleBlur}
                                        value={props.values.email}
                                        error={props.touched.email && Boolean(props.errors.email)}
                                        helperText={props.touched.email && props.errors.email}
                                    />
                                </Box>
                                <Box>
                                    <TextField
                                        InputLabelProps={{
                                            style: { ...styles.textfieldLabel },
                                        }}
                                        label="Password"
                                        type="password"
                                        name="password"
                                        sx={styles.textfield}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        onFocus={props.handleBlur}
                                        value={props.values.password}
                                        autoComplete=""
                                        error={
                                            props.touched.password && Boolean(props.errors.password)
                                        }
                                        helperText={props.touched.password && props.errors.password}
                                    />
                                </Box>
                                <Box>
                                    <TextField
                                        InputLabelProps={{
                                            style: { ...styles.textfieldLabel },
                                        }}
                                        label="Mobile Number*"
                                        type="number"
                                        name="mobileNumber"
                                        sx={styles.textfield}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        onFocus={props.handleBlur}
                                        value={props.values.mobileNumber}
                                        error={
                                            props.touched.mobileNumber &&
                                            Boolean(props.errors.mobileNumber)
                                        }
                                        helperText={
                                            props.touched.mobileNumber && props.errors.mobileNumber
                                        }
                                    />
                                    {((!isSpinnerRotating) && apiStatus === "Success" && registerErrMsg) && (
                                        <Typography sx={styles.negativeResponse}>*{registerErrMsg}.</Typography>
                                    )}
                                </Box>
                            </Container>
                            <Box sx={styles.continueBtnBox}>
                                {!isSpinnerRotating && <Button
                                    sx={styles.continueBtn}
                                    type="submit"
                                    data-testid="register-form"
                                >
                                    Register
                                </Button>}
                                {isSpinnerRotating && (<Box sx={styles.spinnerContainerStyle}>
                                    <Box sx={styles.spinner}></Box>
                                </Box>)}
                                {((!isSpinnerRotating) && apiStatus === "Success" && registeredData) && (
                                    <Typography sx={styles.positiveResponse}>Registration Successful with ID:{registeredData?.data.id}</Typography>
                                )}
                                {((!isSpinnerRotating) && apiStatus === "Success" && registerErrMsg) && (
                                    <Typography sx={styles.negativeResponse}>Registration Unsuccesful</Typography>
                                )}
                                <Typography sx={styles.alreadyHaveAccount}>Already have an account?
                                    <Box component="span" onClick={() => this.props.navigate("/loginboarding")}> Login here</Box>
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Formik>
            </Box>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    userDetails: state.loginRegister.userDetails,
    apiStatus: state.loginRegister.status,
    registeredData: state.loginRegister.registeredData,
    registerErrMsg: state.loginRegister.registerErrMsg
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    registerUserDetails: (userDetails: IState["userDetails"]) => dispatch(registerUserDetails(userDetails)),
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
);
