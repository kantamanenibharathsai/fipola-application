import { Box } from "@mui/material";
import { Component } from "react";
import BestSellersCard from "../../components/best_sellers_card/BestSellersCard";
import TopNavbarArrow from "../../components/top_navbar_arrow_icon/TopNavbarArrow";
import relatedCategoryStyles from "./RelatedCategory.Styles";


class RelatedCategory extends Component {


    render() {
        return (
            <Box sx={relatedCategoryStyles.mainCont}>
                <TopNavbarArrow>Chicken</TopNavbarArrow>
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