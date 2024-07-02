import { Box, Button, TextField } from "@mui/material";
import { Component } from "react";
import TopNavbarArrow from "../../components/top_navbar_arrow_icon/TopNavbarArrow";
import withRouter from "../../hoc/withRouter";
import cardDetailsInputsStyles from "./CardDetailsInputs.Styles";






interface MyProps {
    navigate: (path: string) => void;
}

class CardDetailsInputs extends Component<MyProps, {}> {


    navigateHandler = (path: string) => {
        this.props.navigate(path);
    }

    render() {
        return (
            <Box sx={cardDetailsInputsStyles.mainCont}>
                <Box sx={cardDetailsInputsStyles.yellowCont}>
                    <TopNavbarArrow childrenContent="Card" navigateHandler={this.navigateHandler} pathName="/paymentMethod" />
                </Box>
                <Box sx={cardDetailsInputsStyles.bottomCont}>
                    <Box component={"form"} sx={cardDetailsInputsStyles.formCont}>
                        <Box sx={cardDetailsInputsStyles.cardCont}>
                            <TextField
                                InputLabelProps={{
                                    style: { ...cardDetailsInputsStyles.textfieldLabel },
                                }}
                                label="card No"
                                type="number"
                                name="cardNo"
                                sx={cardDetailsInputsStyles.textfield}
                            // onChange={props.handleChange}
                            // onBlur={props.handleBlur}
                            // onFocus={props.handleBlur}
                            // value={props.values.fname}
                            // error={props.touched.fname && Boolean(props.errors.fname)}
                            // helperText={props.touched.fname && props.errors.fname}
                            />

                            <TextField
                                InputLabelProps={{
                                    style: { ...cardDetailsInputsStyles.textfieldLabel },
                                }}
                                label="Expire"
                                type="text"
                                name="expire"
                                sx={cardDetailsInputsStyles.textfield}
                            // onChange={props.handleChange}
                            // onBlur={props.handleBlur}
                            // onFocus={props.handleBlur}
                            // value={props.values.lname}
                            // error={props.touched.lname && Boolean(props.errors.lname)}
                            // helperText={props.touched.lname && props.errors.lname}
                            />

                            <TextField
                                InputLabelProps={{
                                    style: { ...cardDetailsInputsStyles.textfieldLabel },
                                }}
                                label="CVC"
                                type="number"
                                name="cvc"
                                sx={cardDetailsInputsStyles.textfield}
                            // onChange={props.handleChange}
                            // onBlur={props.handleBlur}
                            // onFocus={props.handleBlur}
                            // value={props.values.mobileNumber}
                            // error={
                            //     props.touched.mobileNumber &&
                            //     Boolean(props.errors.mobileNumber)
                            // }
                            // helperText={
                            //     props.touched.mobileNumber && props.errors.mobileNumber
                            // }
                            />

                            <TextField
                                InputLabelProps={{
                                    style: { ...cardDetailsInputsStyles.textfieldLabel },
                                }}
                                label="Holder name"
                                type="text"
                                name="holderName"
                                autoComplete=""
                                sx={cardDetailsInputsStyles.textfield}
                            // onChange={props.handleChange}
                            // onBlur={props.handleBlur}
                            // onFocus={props.handleBlur}
                            // value={props.values.email}
                            // error={props.touched.email && Boolean(props.errors.email)}
                            // helperText={props.touched.email && props.errors.email}
                            />
                        </Box>
                        <Button onClick={() => this.props.navigate("/orderSuccess")} sx={cardDetailsInputsStyles.redBtn}>Pay now</Button>
                    </Box>
                </Box>
            </Box>
        )
    }
}


export default withRouter(CardDetailsInputs)