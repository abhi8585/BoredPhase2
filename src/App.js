import React from "react";
import Home from "./pages/Home";
import Header from "./pages/header";
// import logo from './logo.svg';
// import './App.css';
// import Home from './pages/home'
// import Item from './pages/item'
// import Header  from './pages/header';
// import ModelInformation from './pages/model-information';
// import Collection from './pages/collection';
import Web3 from "web3"
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
    this.state = {

      provider : null,
      accounts : [],
      sdk:null,
      web3:null,

    }
  }

    componentWillMount() {

      // this.setState({ message: "This is an updated message" });
      console.log("Component is Mounting")
      this.useEffect()
  
  }

  async setWeb3Obj(web3){
    await this.setState({ web3});
  }

    useEffect(){

      if (window.ethereum) {
        this.handleInit()
        // console.log("going in if")
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

    async handleInit(){
    const { ethereum } = window
		if (ethereum && ethereum.isMetaMask) {
			console.log('Ethereum successfully detected!')
			this.setProvider(ethereum)

			// add listener on accountsChanged event to render actual address
			// ethereum.on('accountsChanged', this.state.accounts)
      ethereum.on('accountsChanged', this.setAccounts);
    
		// 	// // configure web3
			const web3 = new Web3(ethereum)
      await this.setWeb3Obj(web3)

			// // set current account if already connected
			web3.eth.getAccounts().then(e => {
				this.setAccounts(e)
        console.log(e)
			})
		} else {
			console.log('Please install MetaMask!')
		}
  }
    render() {
        
        return (
          <div>
          <Header provider={this.state.provider} accounts={this.state.accounts} />
        <div className="App">
          
          <Home provider={this.state.provider} accounts={this.state.accounts} web3={this.state.web3} />
        </div>
       </div>
        )
    }
}

export default App;


