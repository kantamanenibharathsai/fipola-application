import { Box, Typography } from "@mui/material";
import { Component } from "react";
import { CategoryObjInterface } from "../../typescript/data";
import categoryCardStyles from "./CategoryCard.Styles";
import withRouter from "../../hoc/withRouter";


interface MyProps {
    eachCategory: CategoryObjInterface;
    navigateHandler? :(path: string) => void;
}


class CategoryCard extends Component<MyProps, {}> {


    render() {
        const { categoryImg, categoryName } = this.props.eachCategory;

        return (
            <Box sx={categoryCardStyles.cardCont} onClick={() => this.props.navigateHandler!("/relatedCategory")}>
                <Box>
                    <Box component="img" src={categoryImg} alt={categoryName} />
                </Box>
                <Typography component="p">{categoryName}</Typography>
            </Box>
        )
    }
}

export default CategoryCard