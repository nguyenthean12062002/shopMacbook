import React from "react";
import "./Home.scss";
function Home() {
  return (
    <div className="home">
      <h3 className="home__title">
        Payment in installments, term up to 24 months and only 20% down payment.
      </h3>
      <div className="home__wrapper">
        <div className="item first">
          <h4 className="name">
            MacBook Air 13 inch M1 2020: Equipment Chip M1, Display Retina 13.3
            inch
          </h4>
          <div className="pictures">
            <img
              src="https://cdnb.artstation.com/p/assets/images/images/016/802/459/large/shuja-shuaib-banner.jpg?1553535424"
              alt=""
            />
          </div>
        </div>
        <div className="item first">
          <h4 className="name">MacBook Touch Bar , Chip M1 News</h4>
          <div className="pictures">
            <img
              src="https://cdn.shopify.com/s/files/1/1183/6364/files/AppleMBPM2Banner.jpg?v=1674604100"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
