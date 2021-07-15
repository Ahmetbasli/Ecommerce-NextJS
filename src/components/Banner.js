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
          <img loading="lazy" src="/images/1.jpg" />
        </div>
        <div>
          <img loading="lazy" src="images/2.jpg" />
        </div>
        <div>
          <img loading="lazy" src="images/3.jpg" />
        </div>
      </Carousel>
    </div>
  );
};
export default Banner;
