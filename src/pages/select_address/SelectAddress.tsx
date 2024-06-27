import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Radio, Typography } from "@mui/material";
import { Component } from "react";
import TopNavbarArrow from "../../components/top_navbar_arrow_icon/TopNavbarArrow";
import selectAddressStyles from "./SelectAddress.Styles";




class SelectAddressCard extends Component {
    render() {
        return (
            <Box sx={selectAddressStyles.cardCont}>
                <Box sx={selectAddressStyles.inputRadioCont}>
                    <Radio
                        checked
                        // onChange={handleChange}
                        // value="a"
                        name="radio-buttons"
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple

                    />

                </Box>
                <Box sx={selectAddressStyles.addressCont}>
                    <Box sx={selectAddressStyles.contentCont}>
                        <Typography component="h2">Rajesh Singh</Typography>
                        <Typography component="p">Sarjapur Outer Ring Road,
                            Kadabeesanahalli, Bengaluru
                            -500049</Typography>
                    </Box>
                    <MoreVertIcon />
                </Box>
            </Box>
        )
    }
}



class SelectAddress extends Component {


    render() {
        return (
            <Box sx={selectAddressStyles.mainCont}>
                <TopNavbarArrow>Delivery Address</TopNavbarArrow>
                <Box sx={selectAddressStyles.emptyBox}></Box>
                <Box sx={selectAddressStyles.bodyCont}>
                    <Box sx={selectAddressStyles.bodyChildCont}>
                        <Box sx={selectAddressStyles.cardsCont}>
                            {[1, 2, 3, 4, 5, 6, 7].map(each => <SelectAddressCard key={each} />)}
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default SelectAddress