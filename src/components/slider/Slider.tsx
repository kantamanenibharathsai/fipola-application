import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from "@mui/material";
import sliderStyles from "./Slider.Styles";

const sliderData = [
    {
        id: 1, imgUrl: "https://s3-alpha-sig.figma.com/img/1b49/6d03/136523f8ca7b302699686074dda78bff?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AhVHiLy9q45iK5gkgrf8dDLA-W-Z76ABxc5qglx-x76~G-3jN5z42nDpIVx0gIPya2lSZtWWfXpAs49-CxbHB2AkYMGjWymIw-WvmJ2LzxOHP6Rk~6FufcYTlold9gt~asKi1kK3wD3o9STikG8z37iKs1Tl57BS9cspGGmeF1Y1NGW95gw5uuPCJlOelGKJ~vZ~PxS~G3Dc416ArJNY01Qz1IghKZmVNS-HX3xGFr6qvuj0d5hFlSas9nnxb7heTUPMGyw236dwYQX3UocnynZSgDq5A4mwWuQFWV6DIReg2b4lSpU12URocmIfInKsDjws~kaLVf13KsW-J3OqRA__",
        heading: "90 min Delivery", paragraph: "It is a long established fact that a reader will be distracted"
    },
    {
        id: 2, imgUrl: "https://s3-alpha-sig.figma.com/img/a3ac/6b53/55b302c075e3a9ceb1c630b5fb0ebdd2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cz3wwFb20zlNBTSU6a4hmYcPdHICixQ7K9i1uZnx9fAPj8y8C2vjBLjLoi0EWYT6HQbqjOkcyIudF9Fc~Za4dCQRIkkgn8Wv09y5XfBrtN-PMDNI5D1FD6NUXHRySXC94VyCRaO1AVFSHrlFQBPCOzxzksMv0UUtP7ubD7yW5qyi1VGXHZssuqQ8Ope~2-nVRcPcFP1lbqQJzd6CvaYcc6YbVSn6kNlM-qNoB~r88wL66GWxZbGpOPVKlHfWX56k9HXlUNhxJovqLqBA0zA2mxB2MqicnsUaz4ql7IMkkzk1dqF7EJlMCC9H0BUZz9c2VsRBF-kasHwOrDxJDpo-7Q__",
        heading: "Antibiotic free", paragraph: "It is a long established fact that a reader will be distracted"
    },
    {
        id: 3, imgUrl: "https://s3-alpha-sig.figma.com/img/e150/d8c6/432a019ceded7bfc905bd3c3a469f45a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G6u5NEs~GNP~HOOomUKmKY9C1YvQ6PMugUKq5--g3az3~Ow6bQhFHGcttDJR-d9Wt-bShqomErqfwnv9fRJkWNDvhbgm4bWVL14JOe0moSRdNvQgclCI-NBgFBluDFbBNlKQaI3DN55W~qpPi0rpZXPxAf8T04M1QN~mVESZwhr81~d2g1iZVZ7VfFHL5kUTmLvoHrZFgWPH79PySBzZNApwJrIkusKJAIGXcqTy02Ynbb0WxeZIbx21ZvxZ5gyC9gyT7W14TVqX1vDLLbcw8gN8BGqAWor~p~w4jonFYnXXOa8c6OR~zGr-SXqv1a11lKRRHhgYRxMHp9U~dfKGlg__",
        heading: "halal certified", paragraph: "It is a long established fact that a reader will be distracted"
    }
];


const Slider: React.FC = () => {
    const sliderRef = useRef<HTMLUListElement | null>(null); // Ref to the slider container
    const itemsRef = useRef<(HTMLLIElement | null)[]>([]); // Ref to individual slider items
    const dotsRef = useRef<(HTMLLIElement | null)[]>([]); // Ref to the navigation dots
    const [activeDot, setActiveDot] = useState(0); // Active dot index

    useEffect(() => {
        const slider = sliderRef.current; // Get the slider element
        const items = itemsRef.current; // Get the slider items
        const dots = dotsRef.current; // Get the navigation dots
        if (!slider || items.length === 0 || dots.length === 0) return; // If any of these elements are missing, exit the effect
        const lengthItems = items.length - 1; // Total number of slider items minus one
        let active = 0; // Active slide index, initialized to 0
        let refreshInterval: NodeJS.Timeout; // Interval to auto-slide
        const resetInterval = () => {
            clearInterval(refreshInterval); // Clear the existing interval
            refreshInterval = setInterval(() => {
                active = (active + 1) > lengthItems ? 0 : active + 1; // Calculate the next slide index
                setActiveDot(active); // Update the active dot
                reloadSlider(); // Reload the slider position
            }, 2000); // Set a new interval to move to the next slide every 3 seconds
        };
        const reloadSlider = () => {
            if (!items[active] || !slider) return; // If the active item or slider is not available, exit the function
            slider.style.left = -items[active]!.offsetLeft + 'px'; // Move the slider to the active item
        };
        const handleDotClick = (index: number) => {
            active = index; // Set the active slide to the clicked dot index
            setActiveDot(active); // Update the active dot
            reloadSlider(); // Reload the slider position
            resetInterval(); // Reset the auto-slide interval
        };
        dots.forEach((li, key) => li?.addEventListener('click', () => handleDotClick(key))); // Assign handleDotClick to each dot's click event
        window.onresize = reloadSlider; // Reload the slider on window resize
        resetInterval(); // Initialize the auto-slide interval
        return () => {
            clearInterval(refreshInterval); // Clear the interval when the component is unmounted
            dots.forEach(li => li?.removeEventListener('click', () => { })); // Remove event listeners from the dots
            window.onresize = null; // Remove the resize event listener
        };
    }, []); // Empty dependency array means this useEffect runs once when the component mounts

    return (
        <Box sx={sliderStyles.sliderContainer}>
            <Box component="ul" sx={sliderStyles.sliderListContainer} ref={sliderRef}>
                {sliderData.map((eachObj, index) => (
                    <Box
                        key={index}
                        component="li"
                        ref={(el) => (itemsRef.current[index] = el as HTMLLIElement)}
                    >
                        <Box component="img" src={eachObj.imgUrl} alt={eachObj.heading} />
                        <Typography component={"h2"}>{eachObj.heading}</Typography>
                        <Typography component={"p"}>{eachObj.paragraph}</Typography>
                    </Box>
                ))}
            </Box>
            <Box component="ul" sx={sliderStyles.sliderDotsContainer} className="slider dots">
                {Array.from({ length: sliderData.length }).map((_, index) => (
                    <Box
                        key={index}
                        component="li"
                        sx={{
                            ...sliderStyles.sliderDot,
                            width: activeDot === index ? { xs: "25px", sm: "30px" } : "10px",
                            backgroundColor: activeDot !== index ? "#dcdcdd" : "#f5bf45"
                        }}
                        ref={el => (dotsRef.current[index] = el as HTMLLIElement)}
                    ></Box>
                ))}
            </Box>
        </Box>
    );
};

export default Slider;
