import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Latest = () => {

    return(
        <div className="latest">
        <header>
           <span style={{color: "black"}}>The latest.</span> Usher in new arrivals to the celebration.
        </header>
        <section className="latest_slider">
        <Carousel 
          responsive={responsive} 
          showDots={false} 
          >
            <div className="latest_item l_one">
            <h5>IPHONE 15</h5>
            <h1>Newphoria</h1>
            <p>From 79900.00</p>
            </div>
            <div className="latest_item l_two">
            <h5>IPHONE 15 PRO</h5>
            <h1>Titanium</h1>
            <p>From 134900.00</p>
            </div>
            <div className="latest_item l_three">
            <h5>MAC</h5>
            <p>Save up to ₹10000.00§§
Customise it the way you want.</p>
            </div>
            <div className="latest_item l_four">
            <h5>IPAD</h5>
            <p>Save up to ₹10000.00§§
Customise it the way you want.</p>
            </div>
            <div className="latest_item l_five">
            <h5>APPLE WATCH</h5>
            <p>Save up to ₹10000.00§§
Customise it the way you want.</p>
            </div>
            <div className="latest_item l_six">
            <h5>APPLE WATCH</h5>
            <p>Save up to ₹10000.00§§
Customise it the way you want.</p>
            </div>
        </Carousel>

        </section>

    </div>
    )
   

}

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.6
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 2.2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default Latest;