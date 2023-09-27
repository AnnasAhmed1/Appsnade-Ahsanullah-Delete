import React from "react";

const FeaturedSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
  };
  //   return (
  //     <Slider className="awards-slider" {...settings}>
  //       {awards.map((award, index) => {
  //         return (
  //           <div className="awards-card" key={index}>
  //             <img
  //               src={require(`../../Assets/${award.image}`)}
  //               alt={award.title}
  //             />
  //             <h5>{award.title}</h5>
  //             <p>{award.detail}</p>
  //             {/* <div></div> */}
  //           </div>
  //         );
  //       })}
  //     </Slider>
  //   );
};

export default FeaturedSlider;
