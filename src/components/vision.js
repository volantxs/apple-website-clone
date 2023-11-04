import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TbExchange } from "react-icons/tb"
import { BsApple } from "react-icons/bs"
import { CgSmileMouthOpen } from "react-icons/cg"
import { BsFillCreditCardFill } from "react-icons/bs"
import { HiOutlineTruck } from "react-icons/hi2"

const Vision = () => {

    return(
        <section>
        <header>
           <span style={{color: "black"}}>The Apple Store difference.</span> Even more reasons to shop with us.
        </header>
        <div className="vision_slider">
        <Carousel 
          responsive={responsive} 
          showDots={false} 
          >
            <div className="vision_item v_one">
            <span><TbExchange size={40} color="#DA0C81" /></span>
            <h1><span style={{color:"#DA0C81"}}>Exchange your current smartphone.</span> Get credit towards a new one.</h1>
            </div>
            <div className="vision_item v_two">
            <span><BsApple size={40} color="#80B3FF" /></span>
            <h1><span style={{color:"#80B3FF"}}>Customise your Mac</span></h1>
            </div>
            <div className="vision_item v_three">
            <span><CgSmileMouthOpen size={45} color="#F99417" /></span>
            <h1><span style={{color:"#F99417"}}>Engrave a mix of emoji, names and numbers for free.</span> Only at Apple</h1>
            </div>
            <div className="vision_item v_four">
            <span><BsFillCreditCardFill size={45} color="#79AC78" /></span>
            <h1><span style={{color:"#79AC78"}}>Flexible ways to pay.</span> Plus instant savings and No Cost EMI.</h1>
            </div>
            <div className="vision_item v_five">
            <span><HiOutlineTruck size={45} color="#BC7AF9" /></span>
            <h1><span style={{color:"#BC7AF9"}}>Enjoy free delivery, or easy pickup</span> from an Apple Store.</h1>
            </div>
            <div className="vision_item v_six">
            <span><BsFillCreditCardFill size={45} color="#64CCC5" /></span>
            <h1><span style={{color:"#64CCC5"}}>Trade in your eligible Mac, Apple Watch or iPad.</span> In store only.</h1>
            </div>
        </Carousel>

        </div>

    </section>
    )
   

}

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 2.8
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default Vision;