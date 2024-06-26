import { Box, Typography } from "@mui/material";
import { Component } from "react";
import { CategoryObjInterface } from "../../typescript/data";
import categoryCardStyles from "./CategoryCard.Styles";





interface MyProps {
    eachCategory: CategoryObjInterface
}




class CategoryCard extends Component<MyProps, {}> {


    render() {
        const { categoryImg, categoryName } = this.props.eachCategory;

        return (
            <Box sx={categoryCardStyles.cardCont}>
                <Box>
                    <Box component="img" src={categoryImg} alt={categoryName} />
                </Box>
                <Typography component="p">{categoryName}</Typography>
            </Box>
        )
    }
}

export default CategoryCard