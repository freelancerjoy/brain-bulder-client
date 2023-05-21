import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import css from "./Slider.css";

// heading main slider
const Slider = () => {
  return (
    <div>
      <AwesomeSlider
        className="aws-btn"
        bullets={false}
        slider-height-percentage="50%">
        <div
          className="text-green-600 text-6xl font-bold text-green-600"
          data-src="https://stemeducationguide.com/wp-content/uploads/2016/10/subscription-boxes-bluemoon-box.jpg">
          BoosT you knowlodge
        </div>
        <div data-src="https://tickleright.com/wp-content/uploads/2021/08/XAmGtL0tgZ0dbLttcBuSYsvAz76ruBTbfTJ7qVVC4vZ5sdJNEVTuZfXC_L1PuRh4oqkN3H-aNgXvK9BNyYqI0kLixxcxosQz3gNQ.jpg">
          2
        </div>
        <div data-src="https://tickleright.com/wp-content/uploads/2021/08/XAmGtL0tgZ0dbLttcBuSYsvAz76ruBTbfTJ7qVVC4vZ5sdJNEVTuZfXC_L1PuRh4oqkN3H-aNgXvK9BNyYqI0kLixxcxosQz3gNQ.jpg">
          2
        </div>
        <div data-src="https://tickleright.com/wp-content/uploads/2021/08/XAmGtL0tgZ0dbLttcBuSYsvAz76ruBTbfTJ7qVVC4vZ5sdJNEVTuZfXC_L1PuRh4oqkN3H-aNgXvK9BNyYqI0kLixxcxosQz3gNQ.jpg">
          2
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
