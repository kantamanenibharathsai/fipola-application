import { Box, Typography } from "@mui/material";
import { Component } from "react";
import searchLogo from "../../assets/home/search.png";
import Debounce from "../../components/DebounceComponent";
import BottomNavbar from "../../components/bottom_navbar/BottomNavbar";
import CategoryCard from "../../components/category_card/CategoryCard";
import { CategoryObjInterface, categoryData } from "../../typescript/data";
import categoryStyles from "./Category.Styles";

interface MyState {
    categoryValue: string;
    isCategoryLoading: boolean;
    categoryData: CategoryObjInterface[];
    isNoCategoriesCardFoundDisplayed: boolean;
}

class CategoryPage extends Component<{}, MyState> {
    state: MyState = {
        categoryValue: "",
        isCategoryLoading: false,
        categoryData,
        isNoCategoriesCardFoundDisplayed: false,
    };

    fetchCategories = async (search: string) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return categoryData.filter((eachCategory) =>
            eachCategory.categoryName.toLowerCase().includes(search.toLowerCase())
        );
    };

    categoryInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ categoryValue: event.target.value });
    };

    handleDebouncedValueChange = async (debouncedValue: string) => {
        this.setState({ isCategoryLoading: true });
        const categoryData = await this.fetchCategories(debouncedValue);
        if (categoryData.length >= 1) {
            this.setState({
                categoryData,
                isNoCategoriesCardFoundDisplayed: false,
                isCategoryLoading: false,
            });
        } else {
            this.setState({
                categoryData: [],
                isNoCategoriesCardFoundDisplayed: true,
                isCategoryLoading: false,
            });
        }
    };

    render() {
        const { categoryValue, categoryData, isCategoryLoading, isNoCategoriesCardFoundDisplayed } = this.state;
        return (
            <>
                <Box sx={categoryStyles.topNavbar}>
                    <Typography component="h2">Our Category</Typography>
                </Box>
                <Box sx={categoryStyles.bodyCont}>
                    <Box sx={categoryStyles.textFieldCont}>
                        <Box component={"img"} src={searchLogo} alt="search-logo" />
                        <Box
                            component={"input"}
                            placeholder="Search..."
                            value={categoryValue}
                            onChange={this.categoryInputHandler}
                        />
                    </Box>
                    <Debounce value={categoryValue} delay={1000} onDebouncedChange={this.handleDebouncedValueChange} />
                    {(isCategoryLoading === false && categoryData.length >= 1 && isNoCategoriesCardFoundDisplayed === false) && (
                        <Box sx={categoryStyles.cardsCont}>
                            {categoryData.map((eachCategory) => (
                                <CategoryCard
                                    eachCategory={eachCategory}
                                    key={eachCategory.categoryId}
                                />
                            ))}
                        </Box>
                    )}
                    {(isCategoryLoading === true) && (
                        <Box sx={categoryStyles.centerCont}>
                            <Box sx={categoryStyles.spinner}></Box>
                        </Box>

                    )}
                    {(isCategoryLoading === false && isNoCategoriesCardFoundDisplayed === true && categoryData.length === 0) && (
                        <Box sx={categoryStyles.centerCont}>
                            <Typography>No categories Found</Typography>
                        </Box>
                    )}
                </Box>
                <BottomNavbar />
            </>
        );
    }
}

export default CategoryPage;
