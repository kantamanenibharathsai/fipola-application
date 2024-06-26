import React, { Component, createRef } from 'react';
import './draggableSlider.css';

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
        const carousel = this.carouselRef.current;
        if (carousel) {
            carousel.addEventListener('touchmove', this.dragging, { passive: false });
            carousel.addEventListener('touchend', this.dragStop);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.showHideIcons);
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
                <div
                    className="carousel"
                    ref={this.carouselRef}
                    onMouseDown={this.dragStart}
                    onTouchStart={this.dragStart}
                    onMouseMove={(e) => this.dragging(e.nativeEvent as MouseEvent)}
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


