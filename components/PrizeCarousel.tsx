import { Carousel } from "react-bootstrap";
import styles from "../styles/prizeCarousel.module.scss";
import { useState } from "react";

const PrizeCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <div className={styles["carousel-wrapper"]}>
            <Carousel
                interval={5000}
                activeIndex={activeIndex}
                onSelect={handleSelect}
                controls={false} // ❌ Removes default left/right controls
                indicators={false} // ❌ Removes default progress dots
            >
                {[1, 2, 3, 4, 5].map((num, index) => (
                    <Carousel.Item key={num}>
                        <div className={styles["carousel-container"]}>
                            <img
                                className={styles["prize-image"]}
                                src={`/images/carousel${num}.png`}
                                alt={`Prize ${num}`}
                            />
                            <p className={styles["prize-caption"]}>Prize {num} caption</p>

                            {/* Custom Clickable Progress Bar */}
                            <div className={styles["carousel-progress"]}>
                                {[0, 1, 2, 3, 4].map((barIndex) => (
                                    <div
                                        key={barIndex}
                                        className={`${styles["progress-bar"]} ${
                                            barIndex === activeIndex ? styles.active : ""
                                        }`}
                                        onClick={() => handleSelect(barIndex)} // 👈 Click to switch slide
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