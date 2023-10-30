import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Accessories = () => {

    return(
        <div className="acce">
        <header>
           <span style={{color: "black"}}>Accesories.</span> Festive gift ideas.
        </header>
        <section   className="latest_slider"  >
        <div className="acce_head a_one">
        <h5>FABULOUSLY FESTIVE</h5>
            <p>Curated accessories to spread joy.</p>
            </div>
            <div className="cara">

        <Carousel 
          responsive={responsive} 
          >
            <div className="acce_item a_two">
            <h5>NEW</h5>
            <h3>iPhone 15 Pro FineWoven Case with MagSafe - Taupe</h3>
            <p>MRP 5900.00 (incl. of all taxes)</p>
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
            <p>MRP 5900.00 (incl. of all taxes)</p>
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
            <p>MRP 3490.00 (incl. of all taxes)</p>
            
            </div>
            <div className="acce_item a_five">
            <h5>NEW</h5>
            <h3>Apple TV 4K Wi-Fi with 64GB storage</h3>
            <p>MRP 14900.00 (incl. of all taxes)</p>
            </div>
            <div className="acce_item a_six">
            <h5>NEW</h5>
            <h3>iPhone 15 FineWoven Case with MagSafe - Pacific Blue</h3>
            <p>MRP 5900.00 (incl. of all taxes)</p>
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
            <p>MRP 14500.00 (incl. of all taxes)</p>
            <div className="dot au">
              <span style={{backgroundColor: "#9DB2BF"}}></span>
              <span style={{backgroundColor: "#662549"}}></span>
              <span style={{backgroundColor: "#B0926A"}}></span>
            </div>
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