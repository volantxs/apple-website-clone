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
            {/* <section className="hero_slider"> */}
                <Carousel responsive={responsive} 
                className="hero_slider"
                >
                <div className="hero_item" >
                    <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666" />
                    <p>Mac</p>
                </div>
                <div className="hero_item">
                    <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_EMEA?wid=200&hei=130&fmt=png-alpha&.v=1692971740071" />
                    <p>iPhone</p>
                </div>
                <div className="hero_item">
                    <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437" />
                    <p>iPad</p>
                </div>
                <div className="hero_item">
                    <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_IN?wid=200&hei=130&fmt=png-alpha&.v=1693703814407" />
                    <p>Apple Watch</p>
                </div>
                <div className="hero_item" >
                    <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885" />
                    <p>AirPods</p>
                </div>
                <div className="hero_item">
                    <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000" />
                    <p>AirTag</p>
                </div>
                <div className="hero_item">
                    <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664628458484" />
                    <p>Apple TV 4K</p>
                </div>
                <div className="hero_item">
                    <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670389216654" />
                    <p>HomePod</p>
                </div>
                <div className="hero_item">
                    <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=200&hei=130&fmt=png-alpha&.v=1692803114952" />
                    <p>Accessories</p>
                </div>
                </Carousel>
            {/* </section> */}
        </div>
    )
}

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8.9
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

export default Hero;