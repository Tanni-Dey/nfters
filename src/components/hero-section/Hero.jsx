import "./Hero.css";
import CountUp from "react-countup";
import heroImg1 from "../../assets/images/hero_img1.png";
import heroImg2 from "../../assets/images/hero_img2.png";
import heroImg3 from "../../assets/images/hero_img3.png";

const Hero = () => {
  const counterArr = [
    { countEnd: 98, tittle: "Artwork" },
    { countEnd: 12, tittle: "Auction" },
    { countEnd: 15, tittle: "Artist" },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="hero_content">
            <h5>Discover, and collect Digital Art NFTs </h5>
            <p>
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>
            <button className="button">Explore Now</button>
            <div className="hero_counter">
              <div className="row">
                {counterArr.map((count, index) => (
                  <div key={index} className="col-4">
                    <div className="single-counter">
                      <CountUp start={1} end={count.countEnd} duration={2.75} />
                      <span>K+</span>
                      <p>{count.tittle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="hero_img">
            <div className="hero_img_1">
              <img src={heroImg1} alt="img" />
            </div>
            <div className="hero_img_2">
              <img src={heroImg2} alt="img" />
            </div>
            <div className="hero_img_3">
              <img src={heroImg3} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
