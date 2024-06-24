import { Box, Typography } from "@mui/material";
import { Component } from "react";
import searchLogo from "../../assets/home/search.png";
import BottomNavbar from "../../components/bottom_navbar/BottomNavbar";
import categoryStyles from "./Category.Styles";
import { categoryData } from "../../typescript/data";
import CategoryCard from "../../components/category_card/CategoryCard";



class CategoryPage extends Component {








    render() {
        return (
            <>
                <Box sx={categoryStyles.topNavbar}>
                    <Typography component="h2">Our Category</Typography>
                </Box>
                <Box sx={categoryStyles.bodyCont}>
                    <Box sx={categoryStyles.textFieldCont}>
                        <Box component={"img"} src={searchLogo} alt="search-logo" />
                        <Box component={"input"} placeholder="Search..." />
                    </Box>
                    <Box sx={categoryStyles.cardsCont}>
                        {/* <Typography>sdlbsdlvb</Typography> */}
                        {categoryData.map(eachCategory => (
                            <CategoryCard eachCategory={eachCategory} key={eachCategory.categoryId}/>
                        ))}
                    </Box>
                </Box>
                <BottomNavbar />
            </>
        )
    }
}









export default CategoryPage