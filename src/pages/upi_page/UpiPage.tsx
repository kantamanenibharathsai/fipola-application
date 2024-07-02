




import { Box, Button, TextField } from "@mui/material";
import { Component } from "react";
import TopNavbarArrow from "../../components/top_navbar_arrow_icon/TopNavbarArrow";
import withRouter from "../../hoc/withRouter";
import upiPageStyles from "./UpiPage.Styles";






interface MyProps {
    navigate: (path: string) => void;
}


class UPIPage extends Component<MyProps, {}> {

    navigateHandler = (path: string) => {
        this.props.navigate(path);
    }

    render() {
        return (
            <Box sx={upiPageStyles.mainCont}>
                <Box sx={upiPageStyles.yellowCont}>
                    <TopNavbarArrow childrenContent="UPI" navigateHandler={this.navigateHandler} pathName="/paymentMethod" />
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
                        <Button onClick={() => this.props.navigate("/orderSuccess")} sx={upiPageStyles.redBtn}>Pay now</Button>
                    </Box>
                </Box>
            </Box>
        )
    }
}


export default withRouter(UPIPage)