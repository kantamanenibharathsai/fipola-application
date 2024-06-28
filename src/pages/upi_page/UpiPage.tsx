




import { Box, Button, TextField } from "@mui/material";
import { Component } from "react";
import TopNavbarArrow from "../../components/top_navbar_arrow_icon/TopNavbarArrow";
import upiPageStyles from "./UpiPage.Styles";








class UPIPage extends Component {


    render() {
        return (
            <Box sx={upiPageStyles.mainCont}>
                <Box sx={upiPageStyles.yellowCont}>
                    <TopNavbarArrow>UPI</TopNavbarArrow>
                </Box>
                <Box sx={upiPageStyles.bottomCont}>
                    <Box component={"form"} sx={upiPageStyles.formCont}>
                        <Box sx={upiPageStyles.cardCont}>
                            <TextField
                                InputLabelProps={{
                                    style: { ...upiPageStyles.textfieldLabel },
                                }}
                                label="UPI"
                                type="number"
                                name="UPI"
                                sx={upiPageStyles.textfield}
                            // onChange={props.handleChange}
                            // onBlur={props.handleBlur}
                            // onFocus={props.handleBlur}
                            // value={props.values.fname}
                            // error={props.touched.fname && Boolean(props.errors.fname)}
                            // helperText={props.touched.fname && props.errors.fname}
                            />
                        </Box>
                        <Button sx={upiPageStyles.redBtn}>Pay now</Button>
                    </Box>
                </Box>
            </Box>
        )
    }
}


export default UPIPage