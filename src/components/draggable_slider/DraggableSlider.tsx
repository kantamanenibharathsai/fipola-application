import React, { Component, createRef } from 'react';
import './draggableSlider.css'; // Assuming the CSS is in a file named style.css
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

type State = {
    isDragStart: boolean;
    isDragging: boolean;
    prevPageX: number;
    prevScrollLeft: number;
    positionDiff: number;
    currentSlide: number;
};

class DraggableImageSlider extends Component<{}, State> {
    carouselRef = createRef<HTMLDivElement>();
    firstImgRef = createRef<HTMLImageElement>();
    leftArrowRef = createRef<HTMLSpanElement>();
    rightArrowRef = createRef<HTMLSpanElement>();

    state: State = {
        isDragStart: false,
        isDragging: false,
        prevPageX: 0,
        prevScrollLeft: 0,
        positionDiff: 0,
        currentSlide: 0,
    };

    images = [
        "https://images.unsplash.com/photo-1717451062812-052db96a2c0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1718417286278-b383b8a8ad6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1714051661316-4432704b02f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTJ8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1717705422478-0b42e89e06b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTB8fHxlbnwwfHx8fHw%3D"
    ]

    componentDidMount() {
        this.showHideIcons();
        window.addEventListener('resize', this.showHideIcons);

        // Add passive: false event listeners for touch events
        const carousel = this.carouselRef.current;
        if (carousel) {
            carousel.addEventListener('touchmove', this.dragging, { passive: false });
            carousel.addEventListener('touchend', this.dragStop);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.showHideIcons);

        // Remove event listeners
        const carousel = this.carouselRef.current;
        if (carousel) {
            carousel.removeEventListener('touchmove', this.dragging);
            carousel.removeEventListener('touchend', this.dragStop);
        }
    }

    showHideIcons = () => {
        const carousel = this.carouselRef.current;
        if (carousel) {
            const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
            if (this.leftArrowRef.current && this.rightArrowRef.current) {
                this.leftArrowRef.current.style.display = carousel.scrollLeft === 0 ? 'none' : 'block';
                this.rightArrowRef.current.style.display = carousel.scrollLeft === scrollWidth ? 'none' : 'block';
            }
        }
    };

    autoSlide = () => {
        const carousel = this.carouselRef.current;
        if (!carousel) return;

        const { positionDiff, prevScrollLeft } = this.state;
        if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

        const firstImgWidth = (this.firstImgRef.current?.clientWidth ?? 0) + 14;
        const valDifference = firstImgWidth - Math.abs(positionDiff);

        if (carousel.scrollLeft > prevScrollLeft) {
            carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -Math.abs(positionDiff);
        } else {
            carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -Math.abs(positionDiff);
        }

        const newSlide = Math.round(carousel.scrollLeft / firstImgWidth);
        this.setState({ currentSlide: newSlide });
    };

    dragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
        const carousel = this.carouselRef.current;
        if (carousel) {
            this.setState({
                isDragStart: true,
                prevPageX: pageX,
                prevScrollLeft: carousel.scrollLeft,
            });
        }
    };

    dragging = (e: MouseEvent | TouchEvent) => {
        const { isDragStart, prevPageX, prevScrollLeft } = this.state;
        const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;

        if (!isDragStart) return;
        e.preventDefault();
        const carousel = this.carouselRef.current;
        if (carousel) {
            const positionDiff = pageX - prevPageX;
            this.setState({ isDragging: true, positionDiff });
            carousel.scrollLeft = prevScrollLeft - positionDiff;
            this.showHideIcons();
        }
    };

    dragStop = () => {
        this.setState({ isDragStart: false });
        if (this.state.isDragging) {
            this.setState({ isDragging: false });
            this.autoSlide();
        }
    };

    handleDotClick = (index: number) => {
        const carousel = this.carouselRef.current;
        const firstImg = this.firstImgRef.current;
        if (carousel && firstImg) {
            const firstImgWidth = firstImg.clientWidth + 14;
            carousel.scrollLeft = index * firstImgWidth;
            this.setState({ currentSlide: index });
        }
    };

    render() {
        const { currentSlide } = this.state;
        return (
            <div className="wrapper">
                {/* <span id="left" ref={this.leftArrowRef} onClick={() => this.handleArrowClick('left')}>
                    <FaAngleLeft />
                </span> */}
                <div
                    className="carousel"
                    ref={this.carouselRef}
                    onMouseDown={this.dragStart}
                    onTouchStart={this.dragStart}
                    onMouseMove={(e) => this.dragging(e.nativeEvent as MouseEvent)}
                    // onTouchMove={(e) => this.dragging(e.nativeEvent as TouchEvent)}
                >
                    {this.images.map((src, index) => (
                        <img
                            key={index}
                            ref={index === 0 ? this.firstImgRef : null}
                            src={src}
                            alt={`img-${index + 1}`}
                            draggable="false"
                        />
                    ))}
                </div>
                {/* <span id="right" ref={this.rightArrowRef} onClick={() => this.handleArrowClick('right')}>
                    <FaAngleRight />
                </span> */}
                <div className="dots">
                    {this.images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => this.handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default DraggableImageSlider;









// import React, { Component } from 'react';
// import styles from './App.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
// import img1 from './images/img-1.jpg';
// import img2 from './images/img-2.jpg';
// import img3 from './images/img-3.jpg';
// import img4 from './images/img-4.jpg';
// import img5 from './images/img-5.jpg';
// import img6 from './images/img-6.jpg';

// type Card = {
//   img: string;
//   name: string;
//   position: string;
// };

// type State = {
//   isDragging: boolean;
//   startX: number;
//   startScrollLeft: number;
//   timeoutId: NodeJS.Timeout | null;
// };

// class App extends Component<{}, State> {
//   carouselRef: React.RefObject<HTMLUListElement>;
//   wrapperRef: React.RefObject<HTMLDivElement>;
//   cardWidth: number;
//   cardPerView: number;
//   isAutoPlay: boolean;

//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       isDragging: false,
//       startX: 0,
//       startScrollLeft: 0,
//       timeoutId: null,
//     };

//     this.carouselRef = React.createRef();
//     this.wrapperRef = React.createRef();
//     this.cardWidth = 0;
//     this.cardPerView = 0;
//     this.isAutoPlay = true;
//   }

//   componentDidMount() {
//     if (this.carouselRef.current) {
//       this.cardWidth = this.carouselRef.current.querySelector('li')!.offsetWidth;
//       this.cardPerView = Math.round(this.carouselRef.current.offsetWidth / this.cardWidth);

//       this.setupCarousel();
//       this.autoPlay();
//     }
//   }

//   setupCarousel = () => {
//     const carousel = this.carouselRef.current;
//     const children = Array.from(carousel!.children);

//     children.slice(-this.cardPerView).reverse().forEach(card => {
//       carousel!.insertAdjacentHTML('afterbegin', card.outerHTML);
//     });

//     children.slice(0, this.cardPerView).forEach(card => {
//       carousel!.insertAdjacentHTML('beforeend', card.outerHTML);
//     });

//     carousel!.classList.add(styles.noTransition);
//     carousel!.scrollLeft = carousel!.offsetWidth;
//     carousel!.classList.remove(styles.noTransition);
//   };

//   handleArrowClick = (direction: string) => {
//     if (this.carouselRef.current) {
//       this.carouselRef.current.scrollLeft += direction === 'left' ? -this.cardWidth : this.cardWidth;
//     }
//   };

//   dragStart = (e: React.MouseEvent) => {
//     if (this.carouselRef.current) {
//       this.setState({
//         isDragging: true,
//         startX: e.pageX,
//         startScrollLeft: this.carouselRef.current.scrollLeft,
//       });
//       this.carouselRef.current.classList.add(styles.dragging);
//     }
//   };

//   dragging = (e: React.MouseEvent) => {
//     if (!this.state.isDragging || !this.carouselRef.current) return;

//     this.carouselRef.current.scrollLeft = this.state.startScrollLeft - (e.pageX - this.state.startX);
//   };

//   dragStop = () => {
//     this.setState({ isDragging: false });
//     if (this.carouselRef.current) {
//       this.carouselRef.current.classList.remove(styles.dragging);
//     }
//   };

//   infiniteScroll = () => {
//     if (this.carouselRef.current) {
//       if (this.carouselRef.current.scrollLeft === 0) {
//         this.carouselRef.current.classList.add(styles.noTransition);
//         this.carouselRef.current.scrollLeft = this.carouselRef.current.scrollWidth - (2 * this.carouselRef.current.offsetWidth);
//         this.carouselRef.current.classList.remove(styles.noTransition);
//       } else if (Math.ceil(this.carouselRef.current.scrollLeft) === this.carouselRef.current.scrollWidth - this.carouselRef.current.offsetWidth) {
//         this.carouselRef.current.classList.add(styles.noTransition);
//         this.carouselRef.current.scrollLeft = this.carouselRef.current.offsetWidth;
//         this.carouselRef.current.classList.remove(styles.noTransition);
//       }

//       if (!this.wrapperRef.current!.matches(':hover')) {
//         this.autoPlay();
//       }
//     }
//   };

//   autoPlay = () => {
//     if (window.innerWidth < 800 || !this.isAutoPlay) return;

//     if (this.carouselRef.current) {
//       this.setState({
//         timeoutId: setTimeout(() => {
//           this.carouselRef.current!.scrollLeft += this.cardWidth;
//         }, 2500),
//       });
//     }
//   };

//   handleMouseEnter = () => {
//     if (this.state.timeoutId) {
//       clearTimeout(this.state.timeoutId);
//     }
//   };

//   handleMouseLeave = () => {
//     this.autoPlay();
//   };

//   render() {
//     const cards: Card[] = [
//       { img: img1, name: 'Blanche Pearson', position: 'Sales Manager' },
//       { img: img2, name: 'Joenas Brauers', position: 'Web Developer' },
//       { img: img3, name: 'Lariach French', position: 'Online Teacher' },
//       { img: img4, name: 'James Khosravi', position: 'Freelancer' },
//       { img: img5, name: 'Kristina Zasiadko', position: 'Bank Manager' },
//       { img: img6, name: 'Donald Horton', position: 'App Designer' },
//     ];

//     return (
//       <div className={styles.wrapper} ref={this.wrapperRef} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
//         <FontAwesomeIcon icon={faAngleLeft} className={styles.arrow} onClick={() => this.handleArrowClick('left')} />
//         <ul className={styles.carousel} ref={this.carouselRef} onMouseDown={this.dragStart} onMouseMove={this.dragging} onMouseUp={this.dragStop} onScroll={this.infiniteScroll}>
//           {cards.map((card, index) => (
//             <li className={styles.card} key={index}>
//               <div className={styles.img}>
//                 <img src={card.img} alt="img" draggable="false" />
//               </div>
//               <h2>{card.name}</h2>
//               <span>{card.position}</span>
//             </li>
//           ))}
//         </ul>
//         <FontAwesomeIcon icon={faAngleRight} className={styles.arrow} onClick={() => this.handleArrowClick('right')} />
//       </div>
//     );
//   }
// }

// export default App;
