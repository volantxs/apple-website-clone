import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Educators = () => {

    return(
        <section>
        <header>
           <span style={{color: "black"}}>Special stores.</span> Exclusive savings for students and educators.
        </header>
        <div   className="edu_slider"  >
        <div className="edu_item">
        <h5>EDUCATION</h5>
            <h1>Save on Mac or iPad with education pricing.</h1>
            </div>
        </div>

    </section>
    )

}


export default Educators;