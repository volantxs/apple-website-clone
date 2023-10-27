import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Accessories = () => {

    return(
        <div className="acce">
        <header>
           <span style={{color: "black"}}>The latest.</span> Usher in new arrivals to the celebration.
        </header>
        <section   className="latest_slider" >
        <div className="acce_head a_one">
            <h5>IPHONE 15</h5>
            <h1>Newphoria</h1>
            <p>From 79900.00</p>
            </div>
        <Carousel 
          responsive={responsive} 
          showDots={false} 
          className="cara"
          >
            <div className="acce_item a_two">
            <h5>IPHONE 15 PRO</h5>
            <h1>Titanium</h1>
            <p>From 134900.00</p>
            </div>
            <div className="acce_item a_three">
            <h5>APPLE WATCH SERIES 9</h5>
            <h1>Smarter. Brighter. Mightier</h1>
            <p>From 41900.00</p>
            </div>
            <div className="acce_item a_four">
            <h5>APPLE WATCH ULTRA 2</h5>
            <h1>Next-level adventure.</h1>
            <p>From 89900.00</p>
            </div>
            <div className="acce_item a_five">
            <h5>GREEN TECH</h5>
            <h1>Shop carbon-neutral Apple Watch starps.</h1>
            <p>Learn more at <a>here</a></p>
            </div>
            <div className="acce_item a_six">
            <h5>AVAILABLE EARLY NOVEMBER APPLE PENCIL</h5>
            <h1>The most affordable Apple Pencil</h1>
            <p>From 7900.00</p>
            </div>
        </Carousel>

        </section>

    </div>
    )
   

}

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5
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

export default Accessories;