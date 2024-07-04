import { Box } from "@mui/material";
import { Component } from "react";
import BestSellersCard from "../../components/best_sellers_card/BestSellersCard";
import TopNavbarArrow from "../../components/top_navbar_arrow_icon/TopNavbarArrow";
import withRouter from "../../hoc/withRouter";
import { relatedCategoryCardData } from "../../typescript/data";
import relatedCategoryStyles from "./RelatedCategory.Styles";



interface MyProps {
    navigate: (path: string) => void;
}

class RelatedCategory extends Component<MyProps, {}> {


    listItemsClickHandler = (path: string) => {
        this.props.navigate(path)
    }

    render() {
        return (
            <Box sx={relatedCategoryStyles.mainCont}>
                <TopNavbarArrow navigateHandler={this.listItemsClickHandler} childrenContent="Chicken" pathName="/category" />
                <Box sx={relatedCategoryStyles.bodyCont}>
                    <Box sx={relatedCategoryStyles.categoryProductsCont}>
                        {relatedCategoryCardData.map(eachProduct => (
                            <BestSellersCard key={eachProduct.productId}  {...{ eachProduct }} />
                        ))}
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default withRouter(RelatedCategory)