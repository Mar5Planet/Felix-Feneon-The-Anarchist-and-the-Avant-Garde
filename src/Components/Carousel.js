import React, {useState} from 'react';

const Carousel = () => {
    let [selectedIndex, setSelectedIndex] = useState(0)
    const [cellCount,] = useState(9);
    let [transform, setTransform] = useState({});

    const rotateCarousel = (index) => {
        let angle = index/cellCount * -360;
        setTransform({transform: 'translateZ(-288px) rotateY(' + angle + 'deg)'})
    };

    const prevButton = () => {
        setSelectedIndex(selectedIndex-1);
        rotateCarousel(selectedIndex-1);
    };

    const nextButton = () => {
        setSelectedIndex(selectedIndex+1);
        rotateCarousel(selectedIndex+1);
    }

    return (
        <>
            <div className="scene">
                <div style={transform} className="carousel">
                    <div className="carousel__cell"/>
                    <div className="carousel__cell"/>
                    <div className="carousel__cell"/>
                    <div className="carousel__cell"/>
                    <div className="carousel__cell"/>
                    <div className="carousel__cell"/>
                    <div className="carousel__cell"/>
                    <div className="carousel__cell"/>
                    <div className="carousel__cell"/>
                </div>
            </div>
                <button onClick={prevButton}>
                    Previous
                </button>
                <button onClick={nextButton}>
                    Next
                </button>
        </>
    )
}

export default Carousel;
