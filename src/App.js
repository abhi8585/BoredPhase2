import React from "react";
import Home from "./pages/Home";
import Header from "./pages/header";
import ShowError from "./components/Info/error";
// import Particles from "react-tsparticles";
// import logo from './logo.svg';
// import './App.css';
// import Home from './pages/home'
// import Item from './pages/item'
// import Header  from './pages/header';
// import ModelInformation from './pages/model-information';
// import Collection from './pages/collection';
import Web3 from "web3";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// import { createRaribleSdk, RaribleSdk } from "@rarible/protocol-ethereum-sdk"
// import React from 'react'
// import { Web3Ethereum } from "@rarible/web3-ethereum";
// import { Switch, Route } from 'react-router-dom'
// import ModelCollection from './pages/model';
// import CollectionSale from './pages/collection-sale';
// import ItemCollection from './pages/item-collection';
// import ItemCollectionCreated from './pages/item-collection-created';
// import FileUpload from './pages/file-upload';
// import ShowError from './pages/error';
import Particles from "react-tsparticles";
// import logo from './logo.svg';
// import './App.css';
import particlesOptions from "./particles.json";
import ipfs from "./components/Info/ipfs";
import Particle from "./pages/particle";


import "./App.scss";
// const App = () => {
//   return (
//    <div>
//       <Header></Header>
//     <div className="App">
      
//       <Home />
//     </div>
//    </div>
//   );
// };

// export default App;

class App extends React.Component {

  constructor(props){
    super(props)
    this.setAccounts = this.setAccounts.bind(this)
    this.particlesInit = this.particlesInit.bind(this)
    this.particlesLoaded = this.particlesLoaded.bind(this)
    this.setNetworkId = this.setNetworkId.bind(this)
    this.getDataFromHash = this.getDataFromHash.bind(this)
    this.getHash = this.getHash.bind(this)
    this.state = {

      provider : null,
      accounts : [],
      sdk:null,
      web3:null,
      networkId:null,
      wineData: null,
      itemData : null

    }
  }

  particlesInit(main){
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  particlesLoaded(container){
    console.log(container);
  };

  
    getHash(){

    }

    getDataFromHash(){
      fetch('https://ipfs.io/ipfs/QmTBdefEdEK8sM2dqCdogdrGRiL9kzfdpk1dhewQRha31k')
        .then(response => response.json())
        .then(data => this.setState({ wineData : data}));

    }

    getItemData(){
      var itemData = this.state.wineData[Math.floor(Math.random() * this.state.wineData.length)]
      return itemData
    }

    async componentWillMount() {

      // this.setState({ message: "This is an updated message" });
      console.log("Component is Mounting")
      this.useEffect()
      this.getDataFromHash()
      // this.getItemData()
  
  }

  async setWeb3Obj(web3){
    await this.setState({ web3});
  }

    useEffect(){

      if (window.ethereum) {
        this.handleInit()
        console.log("going in if")
      } else {
        
        window.addEventListener('ethereum#initialized', this.handleInit, {
          once: true,
        })
        setTimeout(this.handleInit, 3000) // 3 seconds
      }
  
    }

    async setProvider(currentProvider){
      await this.setState({ provider: currentProvider });
      console.log(this.state.provider);
    }
  
  
    async setAccounts(accounts){
      await this.setState({ accounts: accounts });
      console.log(this.state.accounts);
    }

      async setSdk(currentSdk){
      await this.setState({ sdk : currentSdk })
      console.log(this.state.sdk);
  }

    async setNetworkId(currentId){
      await this.setState({ networkId : currentId })
    }

    async handleInit(){
    const { ethereum } = window
    console.log(ethereum+"eth obj")
		if (ethereum && ethereum.isMetaMask) {
			console.log('Ethereum successfully detected!')
			this.setProvider(ethereum)

			// add listener on accountsChanged event to render actual address
			// ethereum.on('accountsChanged', this.state.accounts)
      ethereum.on('accountsChanged', this.setAccounts);
      // ethereum.on('')
    
		// 	// // configure web3
			const web3 = new Web3(ethereum)
      const networkId = await web3.eth.net.getId();
      this.setNetworkId(networkId)
      // console.log("given provider"+networkId)
      await this.setWeb3Obj(web3)

			// // set current account if already connected
			web3.eth.getAccounts().then(e => {
				this.setAccounts(e)
        console.log(e)
			})
		} else {
			alert('Please install MetaMask!')
		}
  }
    render() {
      console.log(this.state.networkId)
      if (this.state.networkId != 137 && this.state.networkId != 80001){
        return(<ShowError message={"Please Switch to Polygon Network & Reload!"}/>)
        return
      }
      // if (networkId != 137 && networkId != 80001){
      //   alert("Please switch to Polygon Network!")
      //   return
      // }
        if(!this.state.provider?.isMetaMask){
          return(<ShowError message={"Please Install MetaMask!"}/>)
        }
       else{
        return (
          <div>
            {/* <Particles options={particlesOptions}/> */}
          <Particle />
          {/* <AwesomeSlider> */}
        <div className="App">
        <Header provider={this.state.provider} accounts={this.state.accounts} web3={this.state.web3} />
          <Home provider={this.state.provider} accounts={this.state.accounts} web3={this.state.web3}
          data={this.state.wineData} 
          />
          
        </div>
        {/* </AwesomeSlider> */}
       {/* <Particles id="tsparticles" url="http://foo.bar/particles.json" init={this.particlesInit} loaded={this.particlesLoaded} /> */}
       </div>
        )
       }
    }
}

export default App;


