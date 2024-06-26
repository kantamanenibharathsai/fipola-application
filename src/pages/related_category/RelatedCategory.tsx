import { Box, Typography } from "@mui/material";
import { Component } from "react";
import relatedCategoryStyles from "./RelatedCategory.Styles";
import BestSellersCard from "../../components/best_sellers_card/BestSellersCard";







class RelatedCategory extends Component {


    render() {
        return (
            <Box sx={relatedCategoryStyles.mainCont}>
                <Box sx={relatedCategoryStyles.topNavbar}>
                    <Typography component="h2">Cart</Typography>
                </Box>
                <Box sx={relatedCategoryStyles.bodyCont}>
                    <Box sx={relatedCategoryStyles.categoryProductsCont}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map(each => (
                            <BestSellersCard key={each} />
                        ))}
                    </Box>
                </Box>
            </Box>
        )
    }
}


export default RelatedCategory