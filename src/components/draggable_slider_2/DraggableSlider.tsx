// import React, { Component } from 'react';
// import styles from './Carousel.module.css';
// import BestSellersCard from '../best_sellers_card/BestSellersCard';

// type CarouselState = {
//     isDragging: boolean;
//     isAutoPlay: boolean;
//     startX: number;
//     startScrollLeft: number;
// };

// class Carousel extends Component<{}, CarouselState> {
//     carouselRef: React.RefObject<HTMLUListElement>;
//     wrapperRef: React.RefObject<HTMLDivElement>;
//     firstCardWidth: number;
//     timeoutId: NodeJS.Timeout | null = null;

//     constructor(props: {}) {
//         super(props);
//         this.state = {
//             isDragging: false,
//             isAutoPlay: true,
//             startX: 0,
//             startScrollLeft: 0,
//         };
//         this.carouselRef = React.createRef();
//         this.wrapperRef = React.createRef();
//         this.firstCardWidth = 0;
//     }

//     componentDidMount() {
//         const carousel = this.carouselRef.current;
//         if (!carousel) return;

//         this.firstCardWidth = carousel.querySelector<HTMLElement>('.card')?.offsetWidth || 0;
//         const cardPerView = Math.round(carousel.offsetWidth / this.firstCardWidth);
//         const carouselChildren = Array.from(carousel.children);

//         // Insert copies of the last few cards to beginning of carousel for infinite scrolling
//         carouselChildren.slice(-cardPerView).reverse().forEach((card) => {
//             carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
//         });
//         // Insert copies of the first few cards to end of carousel for infinite scrolling
//         carouselChildren.slice(0, cardPerView).forEach((card) => {
//             carousel.insertAdjacentHTML('beforeend', card.outerHTML);
//         });

//         carousel.classList.add(styles.noTransition);
//         carousel.scrollLeft = carousel.offsetWidth;
//         carousel.classList.remove(styles.noTransition);

//         this.autoPlay();
//     }

//     componentWillUnmount() {
//         if (this.timeoutId) {
//             clearTimeout(this.timeoutId);
//         }
//     }

//     handleArrowClick = (direction: 'left' | 'right') => {
//         const carousel = this.carouselRef.current;
//         if (!carousel) return;
//         carousel.scrollLeft += direction === 'left' ? -this.firstCardWidth : this.firstCardWidth;
//     };

//     dragStart = (e: React.MouseEvent) => {
//         const carousel = this.carouselRef.current;
//         if (!carousel) return;
//         this.setState({ isDragging: true, startX: e.pageX, startScrollLeft: carousel.scrollLeft });
//         carousel.classList.add(styles.dragging);
//     };

//     dragging = (e: React.MouseEvent) => {
//         if (!this.state.isDragging) return;
//         const carousel = this.carouselRef.current;
//         if (!carousel) return;
//         carousel.scrollLeft = this.state.startScrollLeft - (e.pageX - this.state.startX);
//     };

//     dragStop = () => {
//         this.setState({ isDragging: false });
//         const carousel = this.carouselRef.current;
//         if (carousel) carousel.classList.remove(styles.dragging);
//     };

//     infiniteScroll = () => {
//         const carousel = this.carouselRef.current;
//         if (!carousel) return;
//         // If the carousel is at the beginning, scroll to the end
//         if (carousel.scrollLeft === 0) {
//             carousel.classList.add(styles.noTransition);
//             carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
//             carousel.classList.remove(styles.noTransition);
//         }
//         // If the carousel is at the end, scroll to the beginning
//         else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
//             carousel.classList.add(styles.noTransition);
//             carousel.scrollLeft = carousel.offsetWidth;
//             carousel.classList.remove(styles.noTransition);
//         }
//         // Clear existing timeout & start autoplay if mouse is not hovering over carousel
//         if (this.timeoutId) clearTimeout(this.timeoutId);
//         if (!this.wrapperRef.current?.matches(':hover')) this.autoPlay();
//     };

//     autoPlay = () => {
//         if (window.innerWidth < 800 || !this.state.isAutoPlay) return;
//         this.timeoutId = setTimeout(() => {
//             const carousel = this.carouselRef.current;
//             if (!carousel) return;
//             carousel.scrollLeft += this.firstCardWidth;
//         }, 2500);
//     };

//     render() {
//         return (
//             <div className={styles.wrapper} ref={this.wrapperRef} onMouseEnter={() => this.timeoutId && clearTimeout(this.timeoutId)} onMouseLeave={this.autoPlay}>
//                 {/* <i id="left" className="fa-solid fa-angle-left" onClick={() => this.handleArrowClick('left')}></i> */}
//                 <ul className={styles.carousel} ref={this.carouselRef} onMouseDown={this.dragStart} onMouseMove={this.dragging} onMouseUp={this.dragStop} onScroll={this.infiniteScroll}>
//                     <li className={styles.card}>
//                         <div className={styles.img}><img src="https://images.unsplash.com/photo-1585020430145-2a6b034f7729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="img" draggable="false" /></div>
//                         <h2>Blanche Pearson</h2>
//                         <span>Sales Manager</span>
//                     </li>
//                     <li className={styles.card}>
//                         <div className={styles.img}><img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="img" draggable="false" /></div>
//                         <h2>Joenas Brauers</h2>
//                         <span>Web Developer</span>
//                     </li>
//                     <li className={styles.card}>
//                         <div className={styles.img}><img src="https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.webp?b=1&s=170667a&w=0&k=20&c=0ptevX36IqBQM1P4PoCycpe8Vj-QAhITR7oNn9R991g=" alt="img" draggable="false" /></div>
//                         <h2>Lariach French</h2>
//                         <span>Online Teacher</span>
//                     </li>
//                     <li className={styles.card}>
//                         <div className={styles.img}><img src="https://media.istockphoto.com/id/1065043970/photo/young-woman-sitting-on-edge-looks-out-at-view.webp?b=1&s=170667a&w=0&k=20&c=bauwN1SrBGldGebcx9TT8VR3SloQO3Xhw22l3oRgoO4=" alt="img" draggable="false" /></div>
//                         <h2>James Khosravi</h2>
//                         <span>Freelancer</span>
//                     </li>
//                     <li className={styles.card}>
//                         <div className={styles.img}><img src="https://media.istockphoto.com/id/1036100456/photo/glowing-light-bulb-standing-out-from-the-crowd.webp?b=1&s=170667a&w=0&k=20&c=cnwJDjNkGhC-NpXtcF4qIIf0cO69Wyi3rX07fUxys7U=" alt="img" draggable="false" /></div>
//                         <h2>Kristina Zasiadko</h2>
//                         <span>Bank Manager</span>
//                     </li>
//                     <li className={styles.card}>
//                         <div className={styles.img}><img src="https://media.istockphoto.com/id/1065043970/photo/young-woman-sitting-on-edge-looks-out-at-view.webp?b=1&s=170667a&w=0&k=20&c=bauwN1SrBGldGebcx9TT8VR3SloQO3Xhw22l3oRgoO4=" alt="img" draggable="false" /></div>
//                         <h2>Donald Horton</h2>
//                         <span>App Designer</span>
//                     </li>
//                     {/* {[1, 2, 3, 4, 5].map(each => <BestSellersCard key={each} />)} */}
//                 </ul>
//                 {/* <i id="right" className="fa-solid fa-angle-right" onClick={() => this.handleArrowClick('right')}></i> */}
//             </div>
//         );
//     }
// }

// export default Carousel;



import React, { Component } from 'react'; // Import React and Component from the react library
import styles from './Carousel.module.css'; // Import CSS module for styling
import BestSellersCard from '../best_sellers_card/BestSellersCard'; // Import the BestSellersCard component

// Define the type for the state of the Carousel component
type CarouselState = {
    isDragging: boolean; // Indicates if the user is currently dragging the carousel
    isAutoPlay: boolean; // Indicates if the carousel should auto-play
    startX: number; // Starting X position for dragging
    startScrollLeft: number; // Starting scroll left position for dragging
    disableDragging: boolean; // Indicates if dragging should be disabled (when hovering over an item)
};

// Define the Carousel component as a class extending React.Component
class Carousel extends Component<{}, CarouselState> {
    carouselRef: React.RefObject<HTMLUListElement>; // Reference to the carousel element
    wrapperRef: React.RefObject<HTMLDivElement>; // Reference to the wrapper element
    firstCardWidth: number; // Width of the first card in the carousel
    timeoutId: NodeJS.Timeout | null = null; // Timeout ID for auto-play

    constructor(props: {}) {
        super(props);
        // Initialize the component state
        this.state = {
            isDragging: false, // Initial state of dragging
            isAutoPlay: true, // Initial state of auto-play
            startX: 0, // Initial start X position
            startScrollLeft: 0, // Initial start scroll left position
            disableDragging: false, // Initial state of dragging being disabled
        };
        this.carouselRef = React.createRef(); // Create a reference for the carousel
        this.wrapperRef = React.createRef(); // Create a reference for the wrapper
        this.firstCardWidth = 0; // Initialize the width of the first card
    }

    componentDidMount() {
        const carousel = this.carouselRef.current; // Get the current carousel element
        if (!carousel) return; // If no carousel, exit the function

        this.firstCardWidth = carousel.querySelector<HTMLElement>('.card')?.offsetWidth || 0; // Get the width of the first card
        const cardPerView = Math.round(carousel.offsetWidth / this.firstCardWidth); // Calculate number of cards per view
        const carouselChildren = Array.from(carousel.children); // Get the carousel children as an array

        // Insert copies of the last few cards to the beginning of the carousel for infinite scrolling
        carouselChildren.slice(-cardPerView).reverse().forEach((card) => {
            carousel.insertAdjacentHTML('afterbegin', card.outerHTML); // Insert card HTML at the beginning
        });
        // Insert copies of the first few cards to the end of the carousel for infinite scrolling
        carouselChildren.slice(0, cardPerView).forEach((card) => {
            carousel.insertAdjacentHTML('beforeend', card.outerHTML); // Insert card HTML at the end
        });

        carousel.classList.add(styles.noTransition); // Add no transition class for instant scroll
        carousel.scrollLeft = carousel.offsetWidth; // Scroll to the initial position
        carousel.classList.remove(styles.noTransition); // Remove no transition class

        this.autoPlay(); // Start auto-play
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId); // Clear the auto-play timeout when the component unmounts
        }
    }

    handleArrowClick = (direction: 'left' | 'right') => {
        const carousel = this.carouselRef.current; // Get the current carousel element
        if (!carousel) return;
        // Scroll left or right based on the direction
        carousel.scrollLeft += direction === 'left' ? -this.firstCardWidth : this.firstCardWidth;
    };

    dragStart = (e: React.MouseEvent) => {
        if (this.state.disableDragging) return; // If dragging is disabled, do nothing
        const carousel = this.carouselRef.current; // Get the current carousel element
        if (!carousel) return;
        // Update state to start dragging
        this.setState({ isDragging: true, startX: e.pageX, startScrollLeft: carousel.scrollLeft });
        carousel.classList.add(styles.dragging); // Add dragging class to carousel
    };

    dragging = (e: React.MouseEvent) => {
        if (this.state.disableDragging || !this.state.isDragging) return; // If dragging is disabled or not started, do nothing
        const carousel = this.carouselRef.current; // Get the current carousel element
        if (!carousel) return;
        // Calculate the new scroll position based on mouse movement
        carousel.scrollLeft = this.state.startScrollLeft - (e.pageX - this.state.startX);
    };

    dragStop = () => {
        if (this.state.disableDragging) return; // If dragging is disabled, do nothing
        this.setState({ isDragging: false }); // Update state to stop dragging
        const carousel = this.carouselRef.current; // Get the current carousel element
        if (carousel) carousel.classList.remove(styles.dragging); // Remove dragging class from carousel
    };

    infiniteScroll = () => {
        const carousel = this.carouselRef.current; // Get the current carousel element
        if (!carousel) return;
        // If the carousel is at the beginning, scroll to the end
        if (carousel.scrollLeft === 0) {
            carousel.classList.add(styles.noTransition); // Add no transition class for instant scroll
            carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth; // Scroll to the end
            carousel.classList.remove(styles.noTransition); // Remove no transition class
        }
        // If the carousel is at the end, scroll to the beginning
        else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add(styles.noTransition); // Add no transition class for instant scroll
            carousel.scrollLeft = carousel.offsetWidth; // Scroll to the beginning
            carousel.classList.remove(styles.noTransition); // Remove no transition class
        }
        // Clear existing timeout & start auto-play if mouse is not hovering over the carousel
        if (this.timeoutId) clearTimeout(this.timeoutId);
        if (!this.wrapperRef.current?.matches(':hover')) this.autoPlay();
    };

    autoPlay = () => {
        if (window.innerWidth < 800 || !this.state.isAutoPlay) return; // If the window is narrow or auto-play is disabled, do nothing
        // Set a timeout to auto-scroll the carousel
        this.timeoutId = setTimeout(() => {
            const carousel = this.carouselRef.current; // Get the current carousel element
            if (!carousel) return;
            carousel.scrollLeft += this.firstCardWidth; // Scroll to the next card
        }, 2500); // Auto-scroll every 2.5 seconds
    };

    // Disable dragging when the mouse enters a card
    handleMouseEnter = () => {
        this.setState({ disableDragging: true });
    };

    // Re-enable dragging when the mouse leaves a card
    handleMouseLeave = () => {
        this.setState({ disableDragging: false });
    };

    render() {
        return (
            <div
                className={styles.wrapper}
                ref={this.wrapperRef}
                // Clear the auto-play timeout when the mouse enters the wrapper
                onMouseEnter={() => this.timeoutId && clearTimeout(this.timeoutId)}
                // Restart auto-play when the mouse leaves the wrapper
                onMouseLeave={this.autoPlay}
            >
                {/* <i id="left" className="fa-solid fa-angle-left" onClick={() => this.handleArrowClick('left')}></i> */}
                <ul
                    className={styles.carousel}
                    ref={this.carouselRef}
                    // Handle mouse events for dragging
                    onMouseDown={this.dragStart}
                    onMouseMove={this.dragging}
                    onMouseUp={this.dragStop}
                    onScroll={this.infiniteScroll}
                >
                    {/* Map over a list of names and create a card for each */}
                    {/* {['Blanche Pearson', 'Joenas Brauers', 'Lariach French', 'James Khosravi', 'Kristina Zasiadko', 'Donald Horton'].map((name, index) => (
                        <li
                            className={styles.card}
                            key={index}
                            // Disable dragging when the mouse enters a card
                            onMouseEnter={this.handleMouseEnter}
                            // Re-enable dragging when the mouse leaves a card
                            onMouseLeave={this.handleMouseLeave}
                        >
                            <div className={styles.img}>
                                <img src={`https://source.unsplash.com/random/150x150?sig=${index}`} alt="img" draggable="false" />
                            </div>
                            <h2>{name}</h2>
                            <span>{["Sales Manager", "Web Developer", "Online Teacher", "Freelancer", "Bank Manager", "App Designer"][index]}</span>
                        </li>
                    ))} */}
                    {[1, 2, 3, 4, 5].map(each => <BestSellersCard key={each} />)}
                </ul>
                {/* <i id="right" className="fa-solid fa-angle-right" onClick={() => this.handleArrowClick('right')}></i> */}
            </div>
        );
    }
}

export default Carousel; // Export the Carousel component
