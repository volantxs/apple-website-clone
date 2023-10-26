import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Special = () => {

    return(
        <div className="special">
        <header className="special_header">
           <p><span style={{color: "black"}}>Festive specials.</span> All the reasons to rejoice</p>
        </header>
        <section className="special_slider">
        <Carousel 
          responsive={responsive} 
          showDots={false} 
          >
            <div className="special_item one">
            <h5>FESTIVE OFFER</h5>
            <p>Save up to ₹10000.00 instantly on eligible products with HDFC Bank Credit Cards.</p>
            </div>
            <div className="special_item two">
            <h5>IPHONE</h5>
            <p>Save up to ₹6000.00§§
Trade in your smartphone to save even more.*</p>
            </div>
            <div className="special_item three">
            <h5>MAC</h5>
            <p>Save up to ₹10000.00§§
Customise it the way you want.</p>
            </div>
            <div className="special_item four">
            <h5>IPAD</h5>
            <p>Save up to ₹10000.00§§
Customise it the way you want.</p>
            </div>
            <div className="special_item five">
            <h5>APPLE WATCH</h5>
            <p>SSave up to ₹10000.00§§
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

export default Special;