import { Carousel } from "react-bootstrap";
import styles from "../styles/prizeCarousel.module.scss";
import { useState, useEffect } from "react";

const PrizeCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFirstCycle, setIsFirstCycle] = useState(true);
    const places = [
        "1ST PLACE",
        "2ND PLACE",
        "3RD PLACE",
        "4TH PLACE",
        "5TH PLACE"
    ];
    const captions = [
        "FRESNO STATE JERSEY, $50 GIFT CARD, PEPSI PRODUCT",
        "FRESNO STATE BACKPACK, MOPHIE POWER PACK, PEPSI PRODUCT",
        "FRESNO STATE BLANKET, PEPSI <br />PRODUCT",
        "DAVANTE ADAMS <br />BOBBLEHEAD",
        "BIG THREE BOBBLEHEAD (PAUL GEORGE, AARON JUDGE, DEREK CARR)"
    ];

    useEffect(() => {
        /* The first cycle was skipping the second slide. Make first cycle slightly
        longer to allow all slides to be recognized properly before starting
        automatic transitions */
        const startDelay = isFirstCycle ? 5100 : 5000;
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
            setIsFirstCycle(false);
        }, startDelay);

        return () => clearInterval(interval);
    }, [isFirstCycle]);

    const handleSelect = (selectedIndex: number) => {
        setActiveIndex(selectedIndex);
        setIsFirstCycle(false);
    };

    return (
        <div className={styles["carousel-wrapper"]}>
            <Carousel
                activeIndex={activeIndex}
                onSelect={handleSelect}
                controls={false}
                indicators={false}
                fade={true}
            >
                {[1, 2, 3, 4, 5].map((num) => (
                    <Carousel.Item key={num}>
                        <div className={styles["carousel-container"]}>
                            <img
                                className={styles["prize-image"]}
                                src={`/images/carousel${num}.png`}
                                alt={`Prize ${num}`}
                            />
                            <h3 className={styles["prize-place"]}>{places[num - 1]}</h3>
                            <p className={styles["prize-caption"]}dangerouslySetInnerHTML={{ __html: captions[num - 1] }}></p>

                            <div className={styles["carousel-progress"]}>
                                {[0, 1, 2, 3, 4].map((barIndex) => (
                                    <div
                                        key={barIndex}
                                        className={`${styles["progress-bar"]} ${
                                            barIndex === activeIndex ? styles.active : ""
                                        }`}
                                        onClick={() => handleSelect(barIndex)}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default PrizeCarousel;