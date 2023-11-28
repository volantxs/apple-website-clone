import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Audio = () => {

    return(
        <section>
        <header>
           <span style={{color: "black"}}>Loud and clear.</span> Audio that's in harmony with the festivies.
        </header>
        <div   className="audio_slider desktop"  >
        <div className="audio_head">
        <h5>APPLE MUSIC OFFER</h5>
            <h1>Get Apple Music Free for 6 months with Homepod and Airpods.</h1>
            </div>
            <div className="cara">
        <Carousel 
          responsive={responsive} 
          >
            <div className="audio_item u_two">
            <h5>FREE ENGRAVING</h5>
            <h3>AirPods Pro (2nd generation) with MagSafe Charging Case...</h3>
            <p>MRP ₹24900.00 (incl. of all taxes)</p>
            </div>
            <div className="audio_item u_three exPad">
            <h3>HomePod - Midnight</h3>
            <p>MRP ₹32900.00 (incl. of all taxes)</p>
            <div className="dot_au">
              <span style={{backgroundColor: "#45474B"}}></span>
              <span style={{backgroundColor: "#F5F5F5"}}></span>
            </div>
            </div>
            <div className="audio_item u_four exPad">
            <h3>HomePod min - Orange</h3>
            <p>MRP ₹10900.00 (incl. of all taxes)</p>
            <div className="dot_n">
              <span style={{backgroundColor: "#45474B"}}></span>
              <span style={{backgroundColor: "#2E4374"}}></span>
              <span style={{backgroundColor: "#FFCC70"}}></span>
              <span style={{backgroundColor: "#F5F5F5"}}></span>
              <span style={{backgroundColor: "#ED7D31"}}></span>
            </div>
            </div>
            <div className="audio_item u_five exPad">
            <h3>AirPods Max - Sky Blue</h3>
            <p>MRP ₹59900.00 (incl. of all taxes)</p>
            <div className="dot_hd">
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-spacegray-202011_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1604622935000" />
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1603846873000" />
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-green-202011_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1603846873000" />
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-silver-202011_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1603846873000" />
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-skyblue-202011_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1603846875000" />
            </div>
            </div>
            <div className="audio_item u_six">
            <h5>FREE ENGRAVING</h5>
            <h3>AirPods (3rd generation) with Lightning Charging Case</h3>
            <p>MRP ₹19900.00 (incl. of all taxes)</p>

            </div>
            <div className="audio_item u_seven " >
            <h5>FREE ENGRAVING</h5>
            <h3>AirPods (2nd generation)</h3>
            <p>MRP ₹12900.00 (incl. of all taxes)</p>
            </div>
        </Carousel>
        </div>
        </div>
        <div   className="audio_slider mobile"  >
            <div className="cara">
        <Carousel 
          responsive={responsive}
          arrows={false} 
          >
             <div className="audio_head">
        <h5>APPLE MUSIC OFFER</h5>
            <h1>Get Apple Music Free for 6 months with Homepod and Airpods.</h1>
            </div>
            <div className="audio_item u_two">
            <h5>FREE ENGRAVING</h5>
            <h3>AirPods Pro (2nd generation) with MagSafe Charging Case...</h3>
            <p>MRP ₹24900.00 (incl. of all taxes)</p>
            </div>
            <div className="audio_item u_three exPad">
            <h3>HomePod - Midnight</h3>
            <p>MRP ₹32900.00 (incl. of all taxes)</p>
            <div className="dot_au">
              <span style={{backgroundColor: "#45474B"}}></span>
              <span style={{backgroundColor: "#F5F5F5"}}></span>
            </div>
            </div>
            <div className="audio_item u_four exPad">
            <h3>HomePod min - Orange</h3>
            <p>MRP ₹10900.00 (incl. of all taxes)</p>
            <div className="dot_n">
              <span style={{backgroundColor: "#45474B"}}></span>
              <span style={{backgroundColor: "#2E4374"}}></span>
              <span style={{backgroundColor: "#FFCC70"}}></span>
              <span style={{backgroundColor: "#F5F5F5"}}></span>
              <span style={{backgroundColor: "#ED7D31"}}></span>
            </div>
            </div>
            <div className="audio_item u_five exPad">
            <h3>AirPods Max - Sky Blue</h3>
            <p>MRP ₹59900.00 (incl. of all taxes)</p>
            <div className="dot_hd">
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-spacegray-202011_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1604622935000" />
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1603846873000" />
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-green-202011_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1603846873000" />
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-silver-202011_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1603846873000" />
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-skyblue-202011_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1603846875000" />
            </div>
            </div>
            <div className="audio_item u_six">
            <h5>FREE ENGRAVING</h5>
            <h3>AirPods (3rd generation) with Lightning Charging Case</h3>
            <p>MRP ₹19900.00 (incl. of all taxes)</p>

            </div>
            <div className="audio_item u_seven " >
            <h5>FREE ENGRAVING</h5>
            <h3>AirPods (2nd generation)</h3>
            <p>MRP ₹12900.00 (incl. of all taxes)</p>
            </div>
        </Carousel>
        </div>
        </div>

    </section>
    )
   

}

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.8
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 1.3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.18
    }
  };

export default Audio;