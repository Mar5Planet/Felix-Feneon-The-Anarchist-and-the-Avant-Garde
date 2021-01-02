import React, {useState} from 'react';

const Carousel = () => {
    let [selectedIndex, setSelectedIndex] = useState(0)
    const [cellCount,] = useState(9);
    let [transform, setTransform] = useState({color: 'red'});

    const rotateCarousel = () => {
        let angle = selectedIndex/cellCount * -360;
        setTransform({transform: 'translateZ(-288px) rotateY(' + angle + 'deg)'})
    };

    const prevButton = () => {
        setSelectedIndex(selectedIndex-1);
        setTransform({color: 'green !important'})
        // rotateCarousel();
        console.log(selectedIndex)
        console.log(transform)
    };

    const nextButton = () => {
        setSelectedIndex(selectedIndex+1);
        setTransform({color: 'red !important'})
        console.log(transform)
        // rotateCarousel();
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
