import React, { Component } from 'react';
import { Box, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import muttonBiryaniImg from "../../assets/receipes/muttonBiryaniImg.png"
import receipesCarouselStyles from './ReceipesCarousel.Styles';


interface RecipeCardProps {
    description: string;
    headline: string;
    image: string;
}

const RecipeCard: React.FC<RecipeCardProps> = () => (
    <Box sx={receipesCarouselStyles.cardCont}>
        <Box component={"img"} src={muttonBiryaniImg} alt="mutton-biryani-img" />
        <Typography component={"p"}>Mutton Biryani</Typography>
    </Box>
);


class RecipesCarousel extends Component {
    render() {
        return (
            <Box>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={true}
                    infinite={false}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    partialVisible
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 0
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(recipe => (
                        <RecipeCard
                               key={recipe} description={''} headline={''} image={''}                        />
                    ))}
                </Carousel>
            </Box>
        );
    }
}

export default RecipesCarousel;
