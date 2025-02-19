import { Carousel } from 'react-bootstrap';
import styles from "../styles/prizeCarousel.module.scss";

const PrizeCarousel = () => {
    return (
        <Carousel interval = {5000}>
            <Carousel.Item>
                <img
                    className={styles['prize-image']}
                    src="/images/carousel1.png"
                    alt="First Prize"
                />
                <Carousel.Caption>
                    <h3>First Prize</h3>
                    <p>First prize caption</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className={styles['prize-image']}
                    src="/images/carousel2.png"
                    alt="Second Prize"
                    />
                <Carousel.Caption>
                    <h3>Second Prize</h3>
                    <p>Second prize caption</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default PrizeCarousel;