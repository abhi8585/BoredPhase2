
// import { color } from 'd3-color';
import React from 'react';
import Wine from "../../contracts/Wine.json";
import ipfs from "./ipfs";
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import ShowError from './error';
import {Link } from "react-router-dom";



class WineInfo extends React.Component {

    constructor(props){
        super(props)
        this.handleMintClick = this.handleMintClick.bind(this)
        this.lazyMint = this.lazyMint.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleCheckBox = this.handleCheckBox.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.containerStyles = this.containerStyles.bind(this)
        this.addWineNumber = this.addWineNumber.bind(this)
        this.subWineNumber = this.subWineNumber.bind(this)
        this.handleTransferClick = this.handleTransferClick.bind(this)
        this.getEditionNumbers = this.getEditionNumbers.bind(this)
        this.state = {
            mintClicked : false,
            wineNumber : 1,
            userName : "",
            userEmail:"",
            userShippingAddress : "",
            redirect: false,
            transactionHash:"",
            blockHash:"",
            ageCheck:"",
            winePrice : 1,
            transferDone : false,
            transferClicked : false,
            details : false,
            itemData : "",
            existingImages : "",
            usdtTransactionHash : "",
            usdtBlockHash : "",
            mint : false,
            editionNumbers : []
        }
        // this.containerStyles = {
        //     height: 20,
        //     width: '100%',
        //     // backgroundColor: "#e0e0de",
        //     borderRadius: 40,
        //     // margin: 50
        //   },
        this.fillerStyles = {
            height: '100%',
            width: `${50}%`,
            backgroundColor: "#000000",
            borderRadius: 'inherit',
            textAlign: 'right'
          }
          this.labelStyles = {
            padding: 4,
            color: 'white',
            fontWeight: 'bold'
          }
        

    }

    containerStyles(){
        return ({
            height: 20,
            width: '100%',
            // backgroundColor: "#e0e0de",
            borderRadius: 40,
            // margin: 50
        })
    }


    handleMintClick(){
        console.log(this.props.itemData)
    //    alert(true)
    if(this.state.wineNumber < 2){
        alert("You have to atleast Mint 2 Wine's ")
        return
    }
    this.setState({ mintClicked : true})
    this.setState({ transferClicked : true})
    }

    async lazyMint(e){
        // this.setState({ mint : true })
        var existingCount = 0
        var wineMintData = []
        var wineIpfsHashes = []
        const networkId = await this.props.web3.eth.net.getId();
        const networkData = Wine.networks[networkId];
        const contractData = await new this.props.web3.eth.Contract(Wine.abi, networkData.address )
        
        
        const mintedImageHashes = await contractData.methods.getMintedImages().call({from: this.props.accounts[0]})
        .then(function(result){
            existingCount = parseInt(result)
        });
        for(existingCount+1;existingCount<this.props.data.length-1;existingCount++){
          if(wineMintData.length<this.state.wineNumber){
            wineMintData.push(this.props.data[existingCount])
          }
        }
        console.log(wineMintData)
         for (var i = 0;i<wineMintData.length;i++){
          
          var tempWineItem = wineMintData[i];
          this.state.editionNumbers.push(tempWineItem["edition"])
          // var tempImageItem = tempWineItem["image"].split("/")[4]
          const itemData = await JSON.stringify(tempWineItem)
          const itemBuffer = await Buffer.from(itemData);
          // // console.log(itemBuffer);
          const fid = await ipfs.add(itemBuffer);
          // console.log(fid.path)
          wineIpfsHashes.push(fid.path)
          // imageIpfsHashes.push(tempImageItem);

        }
        // console.log(wineIpfsHashes)
        const addItem = await contractData.methods.mint(wineIpfsHashes,this.state.wineNumber).send(({ from : this.props.accounts[0]}))
        .on('receipt', (receipt) => {
          this.setState({ transactionHash : receipt["transactionHash"] })
          this.setState({ blockHash : receipt["blockHash"] })
          this.setState({ mint : true })
        }).on('error', (receipt) => {
          if(receipt["code"] == 4001){
            alert("User denied transaction!! Please check")
            return;
          }
        });
             // ------------------
    //     // sending email
          init("user_ca1Ts0fdL8YuvJE1cUgtk");
          var templateParams = {
              "userName" : this.state.userName,
              "userEmail" : this.state.userEmail,
              "userShippingAddress" : this.state.userShippingAddress,
              "transactionHash" : this.state.transactionHash,
              "blockHash" : this.state.blockHash,
              "winePrice" : this.state.winePrice,
              "wineNumber" : this.state.wineNumber,
              "usdtTransactionHash" : this.state.usdtTransactionHash,
              "usdtBlockHash" : this.state.usdtBlockHash
          }
        emailjs.send('service_fonu0fq', 'template_uegm5or', templateParams)
            .then(function(response) {
              alert('CONGRATULATIONS FOR YOUR DIGITAL WINE!');
        }, function(error) {
           console.log('FAILED...', error);
        });
        return;
        
  
     
      }

    getEditionNumbers(){
      var collectionNumber = ""
      for(var i=0;i<this.state.editionNumbers.length;i++){
        collectionNumber = collectionNumber + " " + "#"+ this.state.editionNumbers[i]
        console.log(collectionNumber)
      }
      return collectionNumber
    }
    


    addWineNumber(){
        console.log("button clicked")
        if(this.state.wineNumber < 6){
            this.state.wineNumber  = this.state.wineNumber + 1
            this.setState({ wineNumber : this.state.wineNumber})
            this.setState({ winePrice : this.state.winePrice + 1 })
            return
        }
        else{
            alert("You can only mint 6 wine's at a time.")
        }
        
    }

    subWineNumber(){
        console.log("button clicked")
        if(this.state.wineNumber > 0){
            this.state.wineNumber  = this.state.wineNumber - 1
            this.setState({ wineNumber : this.state.wineNumber})
            this.setState({ winePrice : this.state.winePrice - 1 })
        }
        else{
            alert("Please add wine first")
        return
        }
     
    }

    async handleTransferClick(){
      alert("Please read Carefully! PengWines can only be purchased using USDT coins. This transaction will transfer the required amount for Wine Purchase to our Address. Then will allow you to mint the Wine NFT'S. Click OK below to proceed with TX!")
      if(!this.state.userName.length>0){
        alert("Please Enter Name! Under Shipping Details!😕")
        return
      }
      if(!this.state.userEmail.length>0){
        alert("Please Enter Email! Under Shipping Details!😕")
        return
      }
      if(!this.state.userShippingAddress.length>0){
        alert("Please Enter Shipping Address! Under Shipping Details!😕")
        return
      }

      if(!this.state.ageCheck ){
        alert("Verify your Age");
        return;
      }
      const mintPrice = this.state.winePrice + "000000"
      const usdtABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CHILD_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CHILD_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSITOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ERC712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"}],"name":"changeName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bytes","name":"depositData","type":"bytes"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getDomainSeperator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address","name":"childChainManager","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
      const usdtAddress = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
      var tokenInst = await new this.props.web3.eth.Contract(usdtABI,usdtAddress)
      const balance = await tokenInst.methods.balanceOf(this.props.accounts[0]).call()
            // .then(function(result){
              
            //   // if(result == 0){
            //   //   alert("Not enough USDT in Wallet!")
            //   //   return;
            //   // }
            // });
      if(balance < mintPrice){
        alert("Don't have enough USDT funds!!")
        return;
      }
          
      const transfer = await tokenInst.methods.transfer("0x027232Ed0657C7b4a041C6Bb345D24C9C7a65FD3",mintPrice).send(({ from : this.props.accounts[0]}))
      .on('receipt', (receipt) => {
        this.setState({ usdtTransactionHash : receipt["transactionHash"] })
        this.setState({ usdtBlockHash : receipt["blockHash"]})
        this.setState({ details : true})
        // console.log([this.state.transactionHash, this.state.blockHash])
      }).on('error', (receipt) => {
        if(receipt["code"] == 4001){
          console.log(receipt)
          alert("User denied transaction!! Please check")
          return;
        }
      });
      
    }

    handleNameChange(event) {
        console.log(event.target.value)
        this.setState({ userName: event.target.value});  
      }
  
      handleEmailChange(event) {
        console.log(event.target.value)
        this.setState({ userEmail: event.target.value});  
      }
      
      handleAddressChange(event) {
        console.log(event.target.value)
        this.setState({ userShippingAddress: event.target.value});  
      }

      handleCheckBox(event) {
        let isChecked = event.target.checked;
        this.setState({ ageCheck : isChecked});
        // do whatever you want with isChecked value
      }

      handleBack(event){
        this.setState({ mintClicked : false})
      }
  

    render() {
        
        return (
            <div className="info">
            
            

            {!this.state.mintClicked  && <div className="shoeName">
            
                    <div>
                    <h1 className="big">PengWine Adelie 1 Collection #1</h1>
                    <span className="new">FEATURED</span>
                    </div>
                    <h4 className="small">{"Edition"+" "+1}</h4>
                </div>}

                {!this.state.mintClicked && <div className="description">
                    <h3 className="title">Description</h3>
                    <p className="text">
                    Hand picked grapes,cold soak and Alcoholic fermentation with controlled temperature in stainless steel tanks. Malolactic fermentation completed. Fully fined and filtered for an optimal result.
                    </p>
                </div>
            }
            {
                !this.state.mintClicked && <div className="color-container">
                    <h3 className="title-wine">300 Minted</h3>
                    <div style={this.containerStyles()}>
                    <div style={this.fillerStyles}>
                    <span style={this.labelStyles}>{`${50}%`}</span>
                    </div>
                </div>
                </div>
              
            }
            {
            !this.state.mintClicked && <div className="size-container">
            <h3 className="title">Wines to Mint</h3>
            <div className="sizes">
                <span className="size" onClick={this.addWineNumber}>+</span>
                <span className="size active">{this.state.wineNumber}</span>
                <span className="size" onClick={this.subWineNumber}>-</span>
                {/* <span className="size">10</span>
                <span className="size">11</span> */}
            </div>
            </div>
            }
          

        {this.state.mintClicked && !this.state.details && <div className="shoeName">
                    
            <div>
            {/* <h1 className="big">Please Enter Shipping Details</h1> */}
            {/* <span className="new">FEATURED</span> */}
            </div>
            <h4 className="small">Please Enter Shipping Details</h4>
            </div>
                }
        {/* {
            this.state.mintClicked && 
        }
         */}
               {
                   this.state.mintClicked && !this.state.details && <div className="sign__group">
                   <input onChange={this.handleNameChange} type="text" name="name" className="sign__input" placeholder="Name" />
                 </div>
               }
              {
                  this.state.mintClicked && !this.state.details && <div className="sign__group">
                  <input onChange={this.handleEmailChange} type="text" name="email" className="sign__input" placeholder="Email" />
                </div>
              }
               {
                   this.state.mintClicked && !this.state.details && <div className="sign__group">
                   <textarea onChange={this.handleAddressChange}
                     name="text"
                     className="sign__textarea"
                     placeholder="Shipping Address"
                     defaultValue={""}
                   />
                 <div>
                 <ul className="filter__checkboxes">
                 <li>
                   <input onChange = {this.handleCheckBox} id="type5" type="checkbox" name="type5" />
                   <label htmlFor="type5">I confirm I am 18 years of age or older</label>
                 </li>
                 </ul>
                 
                 </div>
                 
              
 
               </div>
               }

{
             this.state.mintClicked && !this.state.details && <div className="buy-price">
               <div className="price">
                    <i className="fas fa-dollar-sign"></i>
                    <h4>Total Amount</h4>
                </div>
                <div className="price">
                    <i className="fas fa-dollar-sign"></i>
                    <strong>
                      <h5>{this.state.winePrice} {" "} USDT</h5>
                    </strong>
                </div>
                </div>
            }

{
            !this.state.mintClicked && <div className="buy-price">
                <a href="/#" className="buy" onClick={this.handleMintClick}>
                    <i className="fas fa-shopping-cart"></i>Click to Mint
                </a>
                <div className="price">
                    <i className="fas fa-dollar-sign"></i>
                    <h1>{this.state.winePrice} {" "} USDT</h1>
                </div>
                </div>
            }

{
            this.state.mintClicked && !this.state.details && <div className="buy-price">
                <a href="/#" className="buy" onClick={this.handleBack}>
                    <i className="fas fa-shopping-cart"></i>Back
                </a>
                <a href="/#" className="buy" onClick={this.handleTransferClick}>
                    <i className="fas fa-shopping-cart"></i>Transfer
                </a>
                {/* <div className="price">
                    <i className="fas fa-dollar-sign"></i>
                    <h1>{this.state.winePrice}ETH</h1>
                </div> */}
                </div>
            }

  {this.state.details && !this.state.mint && <div className="shoeName">
              
              <div>
              <h2 className="big">Amount Paid</h2>
              <span className="new">Congratulations</span>
              </div>
              <h4 className="small">Welcome to BoredWineClub</h4>
          </div>}


    {this.state.details && !this.state.mint &&<div className="description">
                        {/* <h3 className="title">Congratulations</h3> */}
                        <h2 className="text">
                       You have successfully paid for the Wine. You are now able to Mint
                       your Wine NFT. You just have to pay the gas fees now.
                        </h2>
                    </div>
                }

{this.state.details && !this.state.mint &&<div className="description">
                        <h3 className="title">Check on Polygon Explorer </h3>
                        <p className="text">
                        <a href={"https://polygonscan.com/tx/"+this.state.usdtTransactionHash} target="_blank" className="buy">
                    <i></i>Click to Explore
                </a>
                        </p>
                    </div>
                }

{this.state.details && !this.state.mint&&<div className="description">
                        <h3 className="title">Amount Paid</h3>
                       <strong>
                       <p className="text">
                        {this.state.winePrice+" "+"USDT"}
                        </p>
                       </strong>
                    </div>
                }

{
            this.state.details && !this.state.mint && <div className="buy-price">
                <a href="/#" className="buy" onClick={this.lazyMint}>
                    <i className="fas fa-shopping-cart"></i>Mint
                </a>

                </div>
            }

{this.state.mint && <div className="shoeName">
              
              <div>
              <h1 className="big">Wine Minted</h1>
              <span className="new">Congratulations</span>
              </div>
              <h4 className="small">Welcome to BoredWineClub</h4>
          </div>}

          {this.state.mint &&<div className="description">
                        {/* <h3 className="title">Congratulations</h3> */}
                        <h2 className="text">
                       You have successfully minted your Wines. Welcome to the BoredWineClub.
                       Enjoy your wine .You can see them at Opensea.Below are the summarized order details.
                        </h2>
                    </div>
                }

{this.state.mint && <div className="description">
                        <h3 className="title">Check on Polygon Explorer </h3>
                        <p className="text">
                        <a href={"https://polygonscan.com/tx/"+this.state.transactionHash} target="_blank" className="buy">
                    <i></i>Click to Explore
                </a>
                        </p>
                    </div>
                }


{this.state.mint && <div className="description">
                        <h3 className="title">Check on OpenSea </h3>
                        <p className="text">
                        <a href="https://opensea.io/collection/" target="_blank" className="buy">
                    <i></i>Click to Explore
                </a>
                        </p>
                    </div>
                }

{this.state.mint && <div className="description">
                        <h3 className="title">Minted Edition Numbers</h3>
                       <strong>
                       <p className="text">
                       {this.getEditionNumbers()}
                        </p>
                       </strong>
                    </div>
                }



               
            </div>
        )
    }
}

export default WineInfo;


