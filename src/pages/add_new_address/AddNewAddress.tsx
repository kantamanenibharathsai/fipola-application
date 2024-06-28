import { Box, Button, TextField } from "@mui/material";
import { Component } from "react";
import TopNavbarArrow from "../../components/top_navbar_arrow_icon/TopNavbarArrow";
import addNewAddressStyles from "./AddNewAddress.Styles";









class AddNewAddress extends Component {


    render() {


        return (
            <Box sx={addNewAddressStyles.mainCont}>
                <TopNavbarArrow>Add New Address</TopNavbarArrow>
                <Box sx={addNewAddressStyles.emptyBox}></Box>
                <Box sx={addNewAddressStyles.bodyCont}>
                    <Box sx={addNewAddressStyles.bodyTopCont}>
                    </Box>
                    <Box sx={addNewAddressStyles.bodyBottomCont}>
                        <Box component={"form"} sx={addNewAddressStyles.formCont}>
                            <TextField
                                InputLabelProps={{
                                    style: { ...addNewAddressStyles.textfieldLabel },
                                }}
                                label="Flat No, building name"
                                type="text"
                                name="Flat-No-Building-Name"
                                sx={addNewAddressStyles.textfield}
                            // onChange={props.handleChange}
                            // onBlur={props.handleBlur}
                            // onFocus={props.handleBlur}
                            // value={props.values.fname}
                            // error={props.touched.fname && Boolean(props.errors.fname)}
                            // helperText={props.touched.fname && props.errors.fname}
                            />

                            <TextField
                                InputLabelProps={{
                                    style: { ...addNewAddressStyles.textfieldLabel },
                                }}
                                label="City"
                                type="text"
                                name="city"
                                sx={addNewAddressStyles.textfield}
                            // onChange={props.handleChange}
                            // onBlur={props.handleBlur}
                            // onFocus={props.handleBlur}
                            // value={props.values.lname}
                            // error={props.touched.lname && Boolean(props.errors.lname)}
                            // helperText={props.touched.lname && props.errors.lname}
                            />

                            <TextField
                                InputLabelProps={{
                                    style: { ...addNewAddressStyles.textfieldLabel },
                                }}
                                label="Pincode"
                                type="number"
                                name="pincode"
                                sx={addNewAddressStyles.textfield}
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

                            <Button sx={addNewAddressStyles.redBtn}>Add new</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default AddNewAddress