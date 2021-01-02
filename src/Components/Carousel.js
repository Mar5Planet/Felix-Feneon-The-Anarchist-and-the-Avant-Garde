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
                    <div className="carousel__cell">1</div>
                    <div className="carousel__cell">2</div>
                    <div className="carousel__cell">3</div>
                    <div className="carousel__cell">4</div>
                    <div className="carousel__cell">5</div>
                    <div className="carousel__cell">6</div>
                    <div className="carousel__cell">7</div>
                    <div className="carousel__cell">8</div>
                    <div className="carousel__cell">9</div>
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
