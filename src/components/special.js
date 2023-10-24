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
          swipeable={true}
          autoPlaySpeed={3000}
          renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
          minimumTouchDrag={80}
          focusOnSelect={true}
          keyBoardControl>
            <div className="special_item">
            <h5>FESTIVE OFFER</h5>
            <p>Save up to ₹10000.00 instantly on eligible products with HDFC Bank Credit Cards.</p>
            </div>
            <div className="special_item">
            <h5>FESTIVE OFFER</h5>
            <p>Save up to ₹10000.00 instantly on eligible products with HDFC Bank Credit Cards.</p>
            </div>
            <div className="special_item">
            <h5>FESTIVE OFFER</h5>
            <p>Save up to ₹10000.00 instantly on eligible products with HDFC Bank Credit Cards.</p>
            </div>
            <div className="special_item">
            <h5>FESTIVE OFFER</h5>
            <p>Save up to ₹10000.00 instantly on eligible products with HDFC Bank Credit Cards.</p>
            </div>
            <div className="special_item">
            <h5>FESTIVE OFFER</h5>
            <p>Save up to ₹10000.00 instantly on eligible products with HDFC Bank Credit Cards.</p>
            </div>

        </Carousel>

        </section>

    </div>
    )
   

}

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default Special;