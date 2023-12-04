import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Experience = () => {

    return(
        <section>
        <header>
           <span style={{color: "black"}}>The Apple experience.</span> Do even more with Apple products and services.
        </header>
        <div className="experience_slider">
        <Carousel 
          responsive={responsive} 
          showDots={false} 
          arrows={false}
          >
            <div className="experience_item e_one">
            <h5>APPLE TV+</h5>
            <h1>Get 3 months of Apple TV+ free when you buy an Apple device.</h1>
            </div>
            <div className="experience_item e_two ">
            <h1>Four Apple services. One easy subscription</h1>
            </div>
            <div className="experience_item e_three ">
            <h5>NEW</h5>
            <h1>We've got you covered</h1>
            <p>AppleCare+ now comes with unlimited repairs for accidental damage protection.</p>
            </div>
            <div className="experience_item e_four">
            <h5>HOME</h5>
            <h1>See how one app can control your entire home.</h1>
            </div>
            <div></div>         
        </Carousel>

        </div>

    </section>
    )
   

}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1524 },
    items: 3.6
  },
  tablet: {
    breakpoint: { max: 1524, min: 464 },
    items: 3.4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.25
  }
  };

export default Experience;