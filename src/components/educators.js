import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Educators = () => {

    return(
        <div className="edu">
        <header>
           <span style={{color: "black"}}>Special stores.</span> Exclusive savings for students and educators.
        </header>
        <section   className="edu_slider"  >
        <div className="edu_item">
        <h5>EDUCATION</h5>
            <h1>Save on Mac or iPad with education pricing.</h1>
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

export default Educators;