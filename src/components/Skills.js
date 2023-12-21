import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import meter7 from "../assets/img/meter7.svg";
import meter8 from "../assets/img/meter8.svg";
import meter9 from "../assets/img/meter9.svg";
import meter10 from "../assets/img/meter10.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>skills</h2>
                        <p>programming languages, frameworks and developer tools:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>html</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>css</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>java</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>c/c++</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>react</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>git</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>pycharm</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>vs code</h5>
                            </div>
                        </Carousel>
                        <p style={{marginBottom:0}}>and more<br></br>...</p>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
