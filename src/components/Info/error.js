import React from 'react'
// import Footer from './footer';
// import { toAddress, toBigNumber } from "@rarible/types";
// import { MODEL_DATA, HOT_COLLECTION, IMAGES_FOR_SALE, CREATED_IMAGES } from './constants';
// import ipfs from './ipfs';

class ShowError extends React.Component {
  
    constructor(props){
      super(props)      
       
        
    }



    
    render() {
        
        return (
            <div>
              <main className="main">
    <div className="container">
      <div className="row row--grid">
        {/* breadcrumb */}
        <div className="col-12">
          <ul className="breadcrumb">
            {/* <li className="breadcrumb__item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb__item breadcrumb__item--active">
              No MetaMask
            </li> */}
          </ul>
        </div>
        {/* end breadcrumb */}
        {/* error */}
        <div className="col-12">
          <div className="page-404">
            <div className="page-404__wrap">
              <div className="page-404__content">
                <h1 className="page-404__title">404</h1>
                <p className="page-404__text">
                  Install Metamask to use this Application
                </p>
                <a href="index.html" className="page-404__btn">
                  
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end error */}
      </div>
    </div>
  </main>
            </div>
        )
    }
}

export default ShowError;