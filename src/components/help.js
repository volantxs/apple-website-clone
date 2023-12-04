import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Help = () => {

    return(
        <section>
        <header>
           <span style={{color: "black"}}>Help is here.</span> Whenever and however you need it.
        </header>
        <div className="help_slider">
        <Carousel 
          responsive={responsive} 
          showDots={false} 
          arrows={false}
          >
            <div className="help_one ">
            <h5>APPLE SPECIALIST</h5>
            <h1>Find the perfect festive gift with a Specialist.</h1>
            </div>
            <div className="help_two ">
            <h5>BUSINESS</h5>
            <h1>From enterprise to small business, we'll work with you</h1>
            </div>
            <div className="help_three ">
            <h1>Get to know your new device with a free Personal Session.</h1>
            </div>
            <div className="help_four">
            <div className="rowOne">
            <h5>WATCH AND LEARN</h5>
            <h1>Need support? Our teams are here for you.</h1>
            </div>
            <div className="rowTwo">
                <div className="col-10">
                <p>Get a quick overview from Pritesh on the Apple Support
                App</p>
                </div>
                <div className="col-2">
                    <button className="button">
                      <button className="play"></button>
                    </button>
                </div>

            </div>
            
           
            </div>
         
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

export default Help;