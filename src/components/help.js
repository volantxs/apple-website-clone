import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Help = () => {

    return(
        <div className="help">
        <header>
           <span style={{color: "black"}}>The latest.</span> Usher in new arrivals to the celebration.
        </header>
        <section className="help_slider">
        <Carousel 
          responsive={responsive} 
          showDots={false} 
          >
            <div className="help_one ">
            <h5>IPHONE 15</h5>
            <h1>Newphoria</h1>
            </div>
            <div className="help_two ">
            <h5>IPHONE 15 PRO</h5>
            <h1>Titanium</h1>
            </div>
            <div className="help_three ">
            <h5>APPLE WATCH SERIES 9</h5>
            <h1>Smarter. Brighter. Mightier</h1>
            </div>
            <div className="help_four">
            <div className="rowOne">
            <h5>APPLE WATCH ULTRA 2</h5>
            <h1>Next-level adventure.</h1>
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
            <div className="help_five ">
            <h5>GREEN TECH</h5>
            <h1>Shop carbon-neutral Apple Watch starps.</h1>
            </div>
            <div className="help_six ">
            <h5>AVAILABLE EARLY NOVEMBER APPLE PENCIL</h5>
            <h1>The most affordable Apple Pencil</h1>
            </div>
        </Carousel>

        </section>

    </div>
    )
   

}

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default Help;