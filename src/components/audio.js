import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Audio = () => {

    return(
        <div className="audio">
        <header>
           <span style={{color: "black"}}>Accesories.</span> Festive gift ideas.
        </header>
        <section   className="audio_slider"  >
        <div className="audio_head">
        <h5>APPLE MUSIC OFFER</h5>
            <p>Get Apple Music Free for 6 months with Homepod anf Airpods.</p>
            </div>
            <div className="cara">
        <Carousel 
          responsive={responsive} 
          >
            <div className="audio_item u_two">
            <h5>FREE ENGRAVING</h5>
            <h3>AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)</h3>
            <p>MRP 5900.00 (incl. of all taxes)</p>
            </div>
            <div className="audio_item u_three">
            <h5>NEW</h5>
            <h3>iPhone FineWoven Wallet with MagSafe - Mulberry</h3>
            <p>MRP 5900.00 (incl. of all taxes)</p>
            <div className="dot au">
              <span style={{backgroundColor: "#45474B"}}></span>
              <span style={{backgroundColor: "#F5F5F5"}}></span>
            </div>
            </div>
            <div className="audio_item u_four">
            <h5>FREE ENGRAVING</h5>
            <h3>AirTag</h3>
            <p>MRP 3490.00 (incl. of all taxes)</p>
            <div className="dot">
              <span style={{backgroundColor: "#45474B"}}></span>
              <span style={{backgroundColor: "#2E4374"}}></span>
              <span style={{backgroundColor: "#FFCC70"}}></span>
              <span style={{backgroundColor: "#F5F5F5"}}></span>
              <span style={{backgroundColor: "#ED7D31"}}></span>
            </div>
            </div>
            <div className="audio_item u_five">
            <h5>NEW</h5>
            <h3>Apple TV 4K Wi-Fi with 64GB storage</h3>
            <p>MRP 14900.00 (incl. of all taxes)</p>
            <div className="dot_hd">
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-spacegray-202011_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1604622935000" />
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1603846873000" />
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-green-202011_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1603846873000" />
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-silver-202011_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1603846873000" />
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-skyblue-202011_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1603846875000" />
            </div>
            </div>
            <div className="audio_item u_six">
            <h5>NEW</h5>
            <h3>iPhone 15 FineWoven Case with MagSafe - Pacific Blue</h3>
            <p>MRP 5900.00 (incl. of all taxes)</p>

            </div>
            <div className="audio_item u_seven" >
            <h5>NEW</h5>
            <h3>41mm Mulberry Modern Buckle - Medium</h3>
            <p>MRP 14500.00 (incl. of all taxes)</p>
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

export default Audio;