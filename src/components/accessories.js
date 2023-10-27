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
        <h5>FABULOUSLY FESTIVE</h5>
            <p>Curated accessories to spread joy.</p>
            </div>
            <div className="cara">

        <Carousel 
          responsive={responsive} 
          showDots={false} 
          >
            <div className="acce_item a_two">
            <h5>IPHONE 15 PRO</h5>
            <h1>Titanium</h1>
            <p>From 134900.00</p>
            <div className="dot">
              <span style={{backgroundColor: "#B0578D"}}></span>
              <span style={{backgroundColor: "#618264"}}></span>
              <span style={{backgroundColor: "#C8AE7D"}}></span>
              <span style={{backgroundColor: "#749BC2"}}></span>
              <span style={{backgroundColor: "#7D7C7C"}}></span>

            </div>
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
        </div>

        </section>

    </div>
    )
   

}

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.9
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 1.3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default Accessories;