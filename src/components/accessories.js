import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Accessories = () => {
    return(
        <section>
        <header>
           <span style={{color: "black"}}>Accesories.</span> Festive gift ideas.
        </header>
        <div   className="latest_slider desktop"  >
        <div className="acce_head a_one">
        <h5>FABULOUSLY FESTIVE</h5>
            <h1>Curated accessories to spread joy.</h1>
            </div>
            <div className="cara">
        <Carousel 
          responsive={responsive} 
          >
            <div className="acce_item a_two">
            <h5>NEW</h5>
            <h3>iPhone 15 Pro FineWoven Case with MagSafe - Taupe</h3>
            <p>MRP ₹5900.00 (incl. of all taxes)</p>
            <div className="dot">
              <span style={{backgroundColor: "#B0578D"}}></span>
              <span style={{backgroundColor: "#618264"}}></span>
              <span style={{backgroundColor: "#C8AE7D"}}></span>
              <span style={{backgroundColor: "#749BC2"}}></span>
              <span style={{backgroundColor: "#7D7C7C"}}></span>
            </div>
            </div>
            <div className="acce_item a_three">
            <h5>NEW</h5>
            <h3>iPhone FineWoven Wallet with MagSafe - Mulberry</h3>
            <p>MRP ₹5900.00 (incl. of all taxes)</p>
            <div className="dot">
              <span style={{backgroundColor: "#B0578D"}}></span>
              <span style={{backgroundColor: "#618264"}}></span>
              <span style={{backgroundColor: "#C8AE7D"}}></span>
              <span style={{backgroundColor: "#749BC2"}}></span>
              <span style={{backgroundColor: "#7D7C7C"}}></span>
            </div>
            </div>
            <div className="acce_item a_four">
            <h5>FREE ENGRAVING</h5>
            <h3>AirTag</h3>
            <p>MRP ₹3490.00 (incl. of all taxes)</p>
            
            </div>
            <div className="acce_item a_five">
            <h5>NEW</h5>
            <h3>Apple TV 4K Wi-Fi with 64GB storage</h3>
            <p>MRP ₹14900.00 (incl. of all taxes)</p>
            </div>
            <div className="acce_item a_six">
            <h5>NEW</h5>
            <h3>iPhone 15 FineWoven Case with MagSafe - Pacific Blue</h3>
            <p>MRP ₹5900.00 (incl. of all taxes)</p>
            <div className="dot">
              <span style={{backgroundColor: "#B0578D"}}></span>
              <span style={{backgroundColor: "#618264"}}></span>
              <span style={{backgroundColor: "#C8AE7D"}}></span>
              <span style={{backgroundColor: "#749BC2"}}></span>
              <span style={{backgroundColor: "#7D7C7C"}}></span>
            </div>
            </div>
            <div className="acce_item a_seven" >
            <h5>NEW</h5>
            <h3>41mm Mulberry Modern Buckle - Medium</h3>
            <p>MRP ₹14500.00 (incl. of all taxes)</p>
            <div className="dot_w">
              <span style={{backgroundColor: "#9DB2BF"}}></span>
              <span style={{backgroundColor: "#662549"}}></span>
              <span style={{backgroundColor: "#B0926A"}}></span>
            </div>
            </div>
        </Carousel>
        </div>
        </div>

        <div   className="latest_slider mobile"  >
            <div className="cara">
        <Carousel 
          responsive={responsive}
          arrows={false}

          >
              <div className="acce_head a_one">
        <h5>FABULOUSLY FESTIVE</h5>
            <h1>Curated accessories to spread joy.</h1>
            </div>
            <div className="acce_item a_two">
            <h5>NEW</h5>
            <h3>iPhone 15 Pro FineWoven Case with MagSafe - Taupe</h3>
            <p>MRP ₹5900.00 (incl. of all taxes)</p>
            <div className="dot">
              <span style={{backgroundColor: "#B0578D"}}></span>
              <span style={{backgroundColor: "#618264"}}></span>
              <span style={{backgroundColor: "#C8AE7D"}}></span>
              <span style={{backgroundColor: "#749BC2"}}></span>
              <span style={{backgroundColor: "#7D7C7C"}}></span>
            </div>
            </div>
            <div className="acce_item a_three">
            <h5>NEW</h5>
            <h3>iPhone FineWoven Wallet with MagSafe - Mulberry</h3>
            <p>MRP ₹5900.00 (incl. of all taxes)</p>
            <div className="dot">
              <span style={{backgroundColor: "#B0578D"}}></span>
              <span style={{backgroundColor: "#618264"}}></span>
              <span style={{backgroundColor: "#C8AE7D"}}></span>
              <span style={{backgroundColor: "#749BC2"}}></span>
              <span style={{backgroundColor: "#7D7C7C"}}></span>
            </div>
            </div>
            <div className="acce_item a_four">
            <h5>FREE ENGRAVING</h5>
            <h3>AirTag</h3>
            <p>MRP ₹3490.00 (incl. of all taxes)</p>
            
            </div>
            <div className="acce_item a_five">
            <h5>NEW</h5>
            <h3>Apple TV 4K Wi-Fi with 64GB storage</h3>
            <p>MRP ₹14900.00 (incl. of all taxes)</p>
            </div>
            <div className="acce_item a_six">
            <h5>NEW</h5>
            <h3>iPhone 15 FineWoven Case with MagSafe - Pacific Blue</h3>
            <p>MRP ₹5900.00 (incl. of all taxes)</p>
            <div className="dot">
              <span style={{backgroundColor: "#B0578D"}}></span>
              <span style={{backgroundColor: "#618264"}}></span>
              <span style={{backgroundColor: "#C8AE7D"}}></span>
              <span style={{backgroundColor: "#749BC2"}}></span>
              <span style={{backgroundColor: "#7D7C7C"}}></span>
            </div>
            </div>
            <div className="acce_item a_seven" >
            <h5>NEW</h5>
            <h3>41mm Mulberry Modern Buckle - Medium</h3>
            <p>MRP ₹14500.00 (incl. of all taxes)</p>
            <div className="dot_w">
              <span style={{backgroundColor: "#9DB2BF"}}></span>
              <span style={{backgroundColor: "#662549"}}></span>
              <span style={{backgroundColor: "#B0926A"}}></span>
            </div>
            </div>
        </Carousel>
        </div>
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

export default Accessories;