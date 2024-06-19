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
import { Formik } from "formik";
import * as Yup from "yup";

import {
    IState,
    registerUserDetails,
} from "../../redux/reducers/LoginRegisterSlice";
import { AppDispatch, RootState } from "../../redux/Store";
import { connect } from "react-redux";


interface RegisterProps {
    navigate: (path: string) => void;
    registerUserDetails: (userDetails: any) => void;
    registeredData: IState["registeredData"];
}

interface RegisterState { }



class Register extends React.Component<RegisterProps, RegisterState> {
    state: RegisterState = {};

    validationSchema = Yup.object().shape({
        fname: Yup.string().required("*First Name is required"),
        lname: Yup.string().required("*Last Name is required"),
        email: Yup.string().email("Invalid email").required("*Email is required"),
        password: Yup.string()
            .min(6, "*Password must be at least 6 characters")
            .required("*Password is required"),
        mobileNumber: Yup.string().required("*Mobile Number is required"),
    });

    handleRegister = async (
        values: {
            fname: string;
            lname: string;
            email: string;
            password: string;
            mobileNumber: string;
        },
        actions: any
    ) => {
        this.props.registerUserDetails(values);
        this.props.navigate("/");
    };

    render() {
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
                                </Box>
                            </Container>
                            <Box sx={styles.continueBtnBox}>
                                <Button
                                    sx={styles.continueBtn}
                                    type="submit"
                                    data-testid="register-form"
                                >
                                    Register
                                </Button>
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
    registeredData: state.loginRegister.registeredData,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    registerUserDetails: (userDetails: IState["userDetails"]) =>
        dispatch(registerUserDetails(userDetails)),
});


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Register)
);