import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = () => {
    return (
        <div className="hero">
            {/* <header className="hero_header">
            <p>Save up to ₹10000.00 instantly on eligible products 
                with HDFC Bank Credit Cards. Footnote §§</p>
            </header> */}
            <section className="hero_section">
                <h1><span>Store.</span> Brighten the season with products you love.</h1>
            </section>
            <section className="hero_slider">
            <Carousel 
          responsive={responsive} 
          showDots={false} 
          swipeable={true}
          minimumTouchDrag={10}
          focusOnSelect={true}
          keyBoardControl>
                <div className="slider_item">
                    <img
                    src="https://www.apple.com/v/mac/compare/v/images/meta/mac-compare__ct98832ueaky_og.png?202302010507" />
                    <p>Mac</p>
                </div>
                <div className="slider_item">
                    <img
                    src="https://freepngimg.com/save/133339-picture-12-apple-iphone-hd-image-free/896x672" />
                    <p>iPhone</p>
                </div>
                <div className="slider_item">
                    <img
                    src="https://img-prd-pim.poorvika.com/product/Apple-ipad-air-with-apple-m1-chip-10-9-inch-wifi-space-grey-5th-generation-side-view-Model-Image.png" />
                    <p>iPad</p>
                </div>
                <div className="slider_item">
                    <img
                    src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-smart-electronic-apple-watches-vector-set-picture-image_8195761.png" />
                    <p>Apple Watch</p>
                </div>
                <div className="slider_item">
                    <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MV7N2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1551489688005" />
                    <p>AirPods</p>
                </div>
                <div className="slider_item">
                    <img
                    src="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP840/airtag.png" />
                    <p>AirTag</p>
                </div>
                <div className="slider_item">
                    <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202210_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1664896361164" />
                    <p>Apple TV 4K</p>
                </div>
                <div className="slider_item">
                    <img
                    src="https://help.apple.com/assets/6426055D5E9B81542A36F8B9/642605705E9B81542A36F8CA/en_GB/e6aa3bd284ebc39ed8eec6e9c947e838.png" />
                    <p>HomePod</p>
                </div>
                <div className="slider_item">
                    <img
                    src="https://images.deccanherald.com/deccanherald%2F2023-09%2Fe3d9a6a3-6e9b-4ddd-9f21-4138ac2065ca%2FScreenshot_2023_09_13_at_3_38_40_AM.png" />
                    <p>Accessories</p>
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
      items: 8
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default Hero;