import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, FormikHelpers } from "formik";
import { Component } from "react";
import * as Yup from "yup";
import arrowBackIcon from "../../assets/arrowBack.png";
import modeEditIcon from "../../assets/profile_page/modeEdit.png";
import profilePageStyles from "./ProfilePage.Styles";



interface EditUserDetails {
    fname: string;
    lname: string;
    email: string;
    mobileNumber: string;
};

interface MyState {
    profileImage: string;
    isSpinnerRotating: boolean;
    timeoutId: NodeJS.Timeout | null;
    redirectTimeoutId: NodeJS.Timeout | null;
}

class ProfilePage extends Component<{}, MyState> {
    state = {
        profileImage: "https://s3-alpha-sig.figma.com/img/f90c/7b6b/8a2737b4c8e0471c9260bce20912e462?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A5R5zHJXBDC2G3gOquh64oB9u5AObVQ~zYZN8qzUKeOBBBuXh0~Vj-y3eJQpLFXTN0RLqBwO0zAhO5tZWmnZ5jVuLqlycWTozdBm4PW0oFcaqS37M-50tXusgZ6uq~SRAcn6Y~AaC6yBJdIbKSw-nNaCEHRXpD79-Lyv7SwiRNo3K3NqEQsSrE36znmy3VWnrAQxsszgnn4copfeNBxEQHor6wpQ26-QfNTxRKJyKkL9QgNF~Cd6N0XooKASVqh-lyBzYMWOlcargurR9ZGgM79EBREW0xkq~C8xTfXnDN716ZyCUAtp0yqlpbJFdNH03rgNC1NsxZCAdDO4pm4XMA__",
        isSpinnerRotating: false,
        timeoutId: null,
        redirectTimeoutId: null
    }


    handleFileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const imageData = fileReader.result as string;
            this.setState({ profileImage: imageData });
            localStorage.setItem("images", imageData);
        };
        if (file) fileReader.readAsDataURL(file);
        console.log(event.target.value)
    }

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

    handleEditProfile = async (
        values: EditUserDetails,
        actions: FormikHelpers<EditUserDetails>
    ) => {
        this.setState({ isSpinnerRotating: true });
        // this.props.registerUserDetails(values);
        // const timeoutId = setTimeout(() => {
        //     this.setState({ isSpinnerRotating: false });
        //     actions.setSubmitting(false);
        //     if (this.props.apiStatus === "Success" && !this.props.registerErrMsg) {
        //         const redirectTimeoutId = setTimeout(() => {
        //             this.props.navigate("/loginboarding");
        //         }, 2000);
        //         this.setState({ redirectTimeoutId });
        //     }

        // }, 3000);
        // this.setState({ timeoutId });
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
        return (
            <Box sx={profilePageStyles.mainCont}>
                <Box sx={profilePageStyles.topCont}>
                    <Box>
                        <Box component="img" src={arrowBackIcon} alt="arrow-back-icon-img" />
                        <Typography component="h2">Profile</Typography>
                    </Box>
                    <Box sx={profilePageStyles.imageUploadCont}>
                        <Box component={"label"} htmlFor="fileInput">
                            <Box component="img" src={modeEditIcon} alt="arrow-back-icon-img" />
                        </Box>
                        <Box id="fileInput" component="input" type="file" display={"none"} onChange={this.handleFileImageChange} />
                        <Box>
                            <Box component={"img"} alt="profile-img" src={this.state.profileImage} />
                        </Box>
                    </Box>
                </Box>
                <Box sx={profilePageStyles.bottomCont}>
                    <Formik
                        initialValues={{
                            fname: "",
                            lname: "",
                            email: "",
                            mobileNumber: "",
                        }}
                        validationSchema={this.validationSchema}
                        onSubmit={(values, actions) => this.handleEditProfile(values, actions)}
                    >
                        {(props) => (
                            <Box component={"form"} onSubmit={props.handleSubmit}>
                                <Box>
                                    <Box>
                                        <TextField
                                            InputLabelProps={{
                                                style: { ...profilePageStyles.textfieldLabel },
                                            }}
                                            label="First Name"
                                            type="text"
                                            name="fname"
                                            sx={profilePageStyles.textfield}
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
                                                style: { ...profilePageStyles.textfieldLabel },
                                            }}
                                            label="Last Name"
                                            type="text"
                                            name="lname"
                                            sx={profilePageStyles.textfield}
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
                                                style: { ...profilePageStyles.textfieldLabel },
                                            }}
                                            label="Mobile Number*"
                                            type="number"
                                            name="mobileNumber"
                                            sx={profilePageStyles.textfield}
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
                                    <Box>
                                        <TextField
                                            InputLabelProps={{
                                                style: { ...profilePageStyles.textfieldLabel },
                                            }}
                                            label="Email"
                                            type="email"
                                            name="email"
                                            autoComplete=""
                                            sx={profilePageStyles.textfield}
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            onFocus={props.handleBlur}
                                            value={props.values.email}
                                            error={props.touched.email && Boolean(props.errors.email)}
                                            helperText={props.touched.email && props.errors.email}
                                        />
                                    </Box>
                                </Box>
                                <Box>
                                    {/* {((!isSpinnerRotating) && apiStatus === "Success" && registerErrMsg) && (
                                            <Typography sx={profilePageStyles.negativeResponse}>*{registerErrMsg}.</Typography>
                                        )} */}
                                </Box>

                                <Box sx={profilePageStyles.btnBox}>
                                    {!isSpinnerRotating && <Button
                                        sx={profilePageStyles.btn}
                                        type="submit"
                                        data-testid="register-form"
                                    >
                                        Edit Profile
                                    </Button>}
                                    {isSpinnerRotating && (<Box sx={profilePageStyles.spinnerContainerStyle}>
                                        <Box sx={profilePageStyles.spinner}></Box>
                                    </Box>)}
                                    {/* {((!isSpinnerRotating) && apiStatus === "Success" && registeredData) && (
                                        <Typography sx={styles.positiveResponse}>Registration Successful with ID:{registeredData?.data.id}</Typography>
                                    )}
                                    {((!isSpinnerRotating) && apiStatus === "Success" && registerErrMsg) && (
                                        <Typography sx={styles.negativeResponse}>Registration Unsuccesful</Typography>
                                    )}
                                    <Typography sx={styles.alreadyHaveAccount}>Already have an account?
                                        <Box component="span" onClick={() => this.props.navigate("/loginboarding")}> Login here</Box>
                                    </Typography> */}
                                </Box>
                            </Box>
                        )}
                    </Formik>
                </Box>
            </Box>
        )
    }
}

export default ProfilePage