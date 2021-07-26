import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/components/Banner.module.css";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.gradient} />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={5000}
      >
        {/* lazy loading doesnt work, feel free to research*/}
        <div>
          <img loading="lazy" src="/images/first.jpg" />
        </div>
        <div>
          <img loading="lazy" src="images/second.jpg" />
        </div>
        <div>
          <img loading="lazy" src="images/third.jpg" />
        </div>
      </Carousel>
    </div>
  );
};
export default Banner;
