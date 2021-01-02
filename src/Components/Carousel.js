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
                    <a href="https://nga.gov.au/bonnard/detail.cfm?IRN=157446&MnuID=1" className="carousel__cell"> </a>
                    <a href="https://gallica.bnf.fr/ark:/12148/bpt6k83575m" className="carousel__cell"> </a>
                    <a href="https://gallica.bnf.fr/ark:/12148/bpt6k835779" className="carousel__cell"> </a>
                    <a href="https://www.moma.org/collection/works/78734" className="carousel__cell"> </a>
                    <a href="https://www.moma.org/collection/works/7600" className="carousel__cell"> </a>
                    <a href="https://nga.gov.au/exhibition/masterpiecesfromparis/default.cfm?IRN=191253&BioArtistIRN=16097&MnuID=SRCH&ArtistIRN=16097&ViewID=2" className="carousel__cell"> </a>
                    <a href="https://frenchaffair.com.au/chat-noir/" className="carousel__cell"> </a>
                    <a href="https://www.metmuseum.org/art/collection/search/333990" className="carousel__cell"> </a>
                    <a href="https://nga.gov.au/bonnard/detail.cfm?IRN=3635&MnuID=1" className="carousel__cell"> </a>
                </div>
            </div>
            <div className="btn-div">
                <button onClick={prevButton}>
                    &#8592;
                </button>
                <button onClick={nextButton}>
                    &#8594;
                </button>
            </div>
        </>
    )
}

export default Carousel;