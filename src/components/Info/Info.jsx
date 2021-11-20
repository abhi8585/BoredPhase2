import React from "react";

const Info = () => {
  const shoeName = (
    <div className="shoeName">
      <div>
        <h1 className="big">Chardonnay</h1>
        <span className="new">FEATURED</span>
      </div>
      <h4 className="small">Dry Red Wine 750ml</h4>
    </div>
  );

  const description = (
    <div className="description">
      <h3 className="title">Description</h3>
      <p className="text">
      Red. This is Spain 2019s most planted and highly-prized red variety. Wines range in style from rose to red, but Tempranillo is perhaps most known by its two champion regions of Rioja and Ribera del Duero.
      </p>
    </div>
  );

  // const ColorContainer = (
  //   <div className="color-container">
  //     <h3 className="title">300 Minted</h3>
  //     <div className="colors">
  //       <span className="color active" primary="#2175f5" color="blue"></span>
  //       <span className="color" primary="#f84848" color="red"></span>
  //       <span className="color" primary="#29b864" color="green"></span>
  //       <span className="color" primary="#ff5521" color="orange"></span>
  //       <span className="color" primary="#444" color="black"></span>
  //     </div>
  //   </div>
  // );

  const SizeContainer = (
    <div className="size-container">
      <h3 className="title">Wines to Mint</h3>
      <div className="sizes">
        <span className="size">+</span>
        <span className="size active">0</span>
        <span className="size">-</span>
        {/* <span className="size">10</span>
        <span className="size">11</span> */}
      </div>
    </div>
  );

  const BuySection = (
    
    <div className="buy-price">
      <a href="/#" className="buy">
        <i className="fas fa-shopping-cart"></i>Mint
      </a>
      <div className="price">
        <i className="fas fa-dollar-sign"></i>
        <h1>0.5ETH</h1>
      </div>
    </div>
  );

  const containerStyles = {
    height: 20,
    width: '100%',
    // backgroundColor: "#e0e0de",
    borderRadius: 40,
    // margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${50}%`,
    backgroundColor: "#000000",
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 4,
    color: 'white',
    fontWeight: 'bold'
  }

  const ColorContainer = (
    <div className="color-container">
      <h3 className="title-wine">300 Minted</h3>
      <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${50}%`}</span>
      </div>
    </div>
    </div>
  );


  const mintClicked = true;

  return (
    <div className="info">
      {shoeName}
      {description}
      {ColorContainer}
      {SizeContainer}
      
      {BuySection}
    </div>
  );
};

export default Info;
