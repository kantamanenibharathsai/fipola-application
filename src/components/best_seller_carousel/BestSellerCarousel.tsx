import { Component } from "react";
import Carousel from 'react-multi-carousel';
import eggsImg from "../../assets/best_sellers_card_images/eggs.png";
import chickenImg from "../../assets/best_sellers_card_images/chicken.png";
import { ProductInterface } from "../../typescript/data";
import BestSellersCard from "../best_sellers_card/BestSellersCard";

const bestSellerCardData: ProductInterface[] = [{ productId: 1, productName: "Country Eggs Pack", productPrice: 173.00, productQuantity: 0, productOriginalPrice: 200.00, productImg: eggsImg },
{ productId: 2, productName: "Tandoori Chicken", productPrice: 149.00, productQuantity: 0, productOriginalPrice: 198.00, productImg: chickenImg },
{ productId: 3, productName: "Natural Eggs Pack", productPrice: 103.00, productQuantity: 0, productOriginalPrice: 110.00, productImg: eggsImg },
{ productId: 4, productName: "Indian Mackeral", productPrice: 181.00, productQuantity: 0, productOriginalPrice: 226.00, productImg: eggsImg },
{ productId: 5, productName: "Chicken Drumstick", productPrice: 112.00, productQuantity: 0, productOriginalPrice: 122.00, productImg: eggsImg },
]


class BestSellerCarousel extends Component {


    render() {
        return (
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
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
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 454,
                            min: 0
                        },
                        items: 1.2,
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
                rtl={true}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {bestSellerCardData.map(eachProduct => <BestSellersCard key={eachProduct.productId} {...{eachProduct}}/>)}
            </Carousel>
        )
    }
}


export default BestSellerCarousel;