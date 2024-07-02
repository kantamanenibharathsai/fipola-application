import { Box } from "@mui/material";
import { Component, createRef } from 'react';
import sliderStyles from "./SingleProductCarousel.Styles";


interface SliderState {
    activeDot: number;
}

const sliderData = [
    "https://images.unsplash.com/photo-1432835305417-6919779246b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lYXR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1460122109654-7e46ab4fc9b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lYXR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1592771582174-777dbbd2945e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lYXR8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1666620505051-8a4511e384b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lYXR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lYXR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVhdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1669984111649-add99106f48f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVhdHxlbnwwfHwwfHx8MA%3D%3D"
]

class Slider extends Component<{}, SliderState> {
    sliderRef = createRef<HTMLUListElement>();
    itemsRef: (HTMLLIElement | null)[] = [];
    dotsRef: (HTMLLIElement | null)[] = [];
    refreshInterval: NodeJS.Timeout | undefined;

    constructor(props: {}) {
        super(props);
        this.state = {
            activeDot: 0,
        };
    }

    componentDidMount() {
        this.resetInterval();
        window.addEventListener('resize', this.reloadSlider);
    }

    componentWillUnmount() {
        clearInterval(this.refreshInterval);
        this.dotsRef.forEach(dot => dot?.removeEventListener('click', () => { }));
        window.removeEventListener('resize', this.reloadSlider);
    }

    resetInterval = () => {
        clearInterval(this.refreshInterval);
        this.refreshInterval = setInterval(() => {
            let active = (this.state.activeDot + 1) >= this.itemsRef.length ? 0 : this.state.activeDot + 1;
            this.setState({ activeDot: active }, this.reloadSlider);
        }, 3000);
    };

    reloadSlider = () => {
        if (!this.sliderRef.current || !this.itemsRef[this.state.activeDot]) return;
        this.sliderRef.current.style.left = -this.itemsRef[this.state.activeDot]!.offsetLeft + 'px';
    };

    handleDotClick = (index: number) => {
        this.setState({ activeDot: index }, () => {
            this.reloadSlider();
            this.resetInterval();
        });
    };

    render() {
        const { activeDot } = this.state;

        return (
            <Box sx={sliderStyles.sliderContainer}>
                <Box component="ul" sx={sliderStyles.sliderListContainer} ref={this.sliderRef}>
                    {sliderData.map((eachImgUrl, index) => (
                        <Box
                            key={index}
                            component="li"
                            ref={(el) => (this.itemsRef[index] = el as HTMLLIElement)}
                        >
                            <Box component="img" src={eachImgUrl} alt={`img-${index + 1}`} />
                        </Box>
                    ))}
                </Box>
                <Box component="ul" sx={sliderStyles.sliderDotsContainer} className="slider dots">
                    {sliderData.map((_, index) => (
                        <Box
                            key={index}
                            component="li"
                            sx={{
                                ...sliderStyles.sliderDot,
                                width: activeDot === index ? { xs: "25px", sm: "30px" } : "10px",
                                backgroundColor: activeDot !== index ? "#dcdcdd" : "#f5bf45"
                            }}
                            ref={el => (this.dotsRef[index] = el as HTMLLIElement)}
                            onClick={() => this.handleDotClick(index)}
                        ></Box>
                    ))}
                </Box>
            </Box>
        );
    }
}

export default Slider;

