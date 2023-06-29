import "./AmazeNft.css";
import svg1 from "../../assets/images/amaze_nft_svg1.svg";
import svg2 from "../../assets/images/amaze_nft_svg2.svg";

const AmazeNft = () => {
  const colArr = [
    {
      //   icon: svg1,
      tittle: "The amazing NFT art of the world here",
      //   p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.",
    },
    {
      icon: svg1,
      tittle: "Fast Transaction",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.",
    },
    {
      icon: svg2,
      tittle: "Growth Transaction",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus",
    },
  ];

  return (
    <div className="amaze">
      <div className="container">
        <div className="row align-items-center">
          {colArr.map((singleCol, index) => (
            <div key={index} className="col-md-4">
              <div className="single_col">
                <div className="d-flex align-items-start">
                  {singleCol.icon ? (
                    <img src={singleCol?.icon} alt="icon" />
                  ) : (
                    ""
                  )}
                  <div>
                    <h6
                      className={`${
                        singleCol.tittle ===
                        "The amazing NFT art of the world here"
                          ? "single_tittle"
                          : null
                      }`}
                    >
                      {singleCol.tittle}
                    </h6>
                    {singleCol.p ? <p>{singleCol?.p}</p> : ""}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmazeNft;
