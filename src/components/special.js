import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Special = () => {
    return(
        <section>
        <header>
        <span style={{color: "black"}}>Festive specials.</span> All the reasons to rejoice
        </header>
        <div className="special_slider">
        <Carousel 
          responsive={responsive} 
          showDots={false} 
          arrows={false}

          >
            <div className="special_item s_one">
            <h5>FESTIVE OFFER</h5>
            <h1>Save up to ₹10000.00 instantly on eligible products with HDFC Bank Credit Cards.</h1>
            </div>
            <div className="special_item s_two">
            <h5>IPHONE</h5>
            <h1>Save up to ₹6000.00§§
Trade in your smartphone to save even more.*</h1>
            </div>
            <div className="special_item s_three">
            <h5>MAC</h5>
            <h1>Save up to ₹10000.00§§
Customise it the way you want.</h1>
            </div>
            <div className="special_item s_four">
            <h5>IPAD</h5>
            <h1>Save up to ₹10000.00§§
Customise it the way you want.</h1>
            </div>
            <div className="special_item s_five">
            <h5>APPLE WATCH</h5>
            <h1>Save up to ₹10000.00§§
Customise it the way you want.</h1>
            </div>
            <div className="special_item s_six">
            <h5>APPLE WATCH</h5>
            <h1>Save up to ₹10000.00§§
Customise it the way you want.</h1>
            </div>
            <div></div>
        </Carousel>

        </div>

    </section>
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
      items: 1.18
    }
  };

export default Special;