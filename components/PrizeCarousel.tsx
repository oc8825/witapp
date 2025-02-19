import { Carousel } from 'react-bootstrap';
import styles from "../styles/prizeCarousel.module.scss";

const PrizeCarousel = () => {
    return (
        <Carousel interval={5000} controls={true} indicators={true} pause={false}>
            {[1, 2, 3, 4, 5].map((num) => ( 
                <Carousel.Item key={num}> 
                    <div className={styles["carousel-container"]}>
                        <img
                            className={styles["prize-image"]}
                            src={`/images/carousel${num}.png`}
                            alt={`Prize ${num}`}
                        />
                        <p className={styles["prize-caption"]}>Prize {num} caption</p>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default PrizeCarousel;