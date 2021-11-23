
// import { color } from 'd3-color';
import React from 'react';
import Wine from "../../contracts/Wine.json";
// import ipfs from "./ipfs";

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
        this.state = {
            mintClicked : false,
            wineNumber : 0,
            userName : "",
            userEmail:"",
            userShippingAddress : "",
            redirect: false,
            transactionHash:"",
            blockHash:"",
            ageCheck:"",
            winePrice : "0.2",
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
        
    //    alert(true)
    if(this.state.wineNumber < 2){
        alert("You have to atleast Mint 2 Wine's ")
        return
    }
    this.setState({ mintClicked : true})
    }

    async lazyMint(e){
      
        // code for getting and setting all the required values
        // send data to ipfs and set hash
  
        
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
        e.preventDefault();
        var data = {
            "userName" : this.state.userName,
            "userEmail" : this.state.userEmail,
            "userShippingAddress" : this.state.userShippingAddress,
            // "itemData" : this.itemData
          }
        console.log(data);
        //  const itemData = await JSON.stringify(data)
        // const itemBuffer = await Buffer.from(itemData);
        // console.log(itemBuffer);
        // const fid = await ipfs.add(itemBuffer);
       
  
        // code for smart contract
        var usdtABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CHILD_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CHILD_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSITOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ERC712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"}],"name":"changeName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bytes","name":"depositData","type":"bytes"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getDomainSeperator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address","name":"childChainManager","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        var tokenAddress = "0x7FFB3d637014488b63fb9858E279385685AFc1e2"
        // address and abi for polygon mumbai testnet for usdt

        // var usdtABI = 
        var tokenInst = await new this.props.web3.eth.Contract(usdtABI,tokenAddress);
        // console.log(tokenInst)
        // const balance = tokenInst.methods.balanceOf(this.props.accounts[0]).call({from: '0x19cFF0b9E7a05f0b7dcdE3783A31dc3509E703E5'})
        //     .then(function(result){
        //         console.log(result)
        //     });
        const transfer = await tokenInst.methods.transfer("0x05Cb7d63483B513887D3fC3fdE38930989312FD0",1).send(({ from : this.props.accounts[0]}))
        .on('receipt', (receipt) => {
            this.setState({ transactionHash : receipt["transactionHash"] })
            this.setState({ blockHash : receipt["blockHash"] })
            console.log(receipt)
            console.log([this.state.transactionHash, this.state.blockHash])
        }).on('error', (receipt) => {
            if(receipt["code"] == 4001){
            alert("User denied transaction")
            return;
            }
        });
        // const symbol = tokenInst.methods.symbol().call({from: '0x19cFF0b9E7a05f0b7dcdE3783A31dc3509E703E5'})
        // .then(function(result){
        //     console.log(result)
        // });

        // var result = tokenInst.methods.balanceOf(this.props.accounts[0]).call()
        // const format = this.props.web3.utils.fromWei(result);
        // console.log(format)
        // return
        var transactionPrice = this.props.web3.utils.toWei("1", 'ether');
        // // getting all the data
        const networkId = await this.props.web3.eth.net.getId();
        const networkData = Wine.networks[networkId];
        const contractData = await new this.props.web3.eth.Contract(Wine.abi, networkData.address )
        
        console.log(contractData)
        console.log([transactionPrice, networkId]);
        // calling the mint function
  
        // const addItem = await contractData.methods.mint("firstipfsfromui").send({ from : this.props.accounts[0] }).on('transactionHash', (hash) => {
        //       alert(hash);
        //   })
  
        const addItem = await contractData.methods.mint("QmRkFkymQ22S4kA66Y8P9eWMcUbzLUy1Bp8te79CgDnmp5").send(({ from : this.props.accounts[0], value : transactionPrice}))
                        .on('receipt', (receipt) => {
                            tokenInst.methods.transfer("0x05Cb7d63483B513887D3fC3fdE38930989312FD0",1).send(({ from : this.props.accounts[0]}))
        .on('receipt', (receipt) => {
            this.setState({ transactionHash : receipt["transactionHash"] })
            this.setState({ blockHash : receipt["blockHash"] })
            console.log(receipt)
            console.log([this.state.transactionHash, this.state.blockHash])
        }).on('error', (receipt) => {
            if(receipt["code"] == 4001){
            alert("User denied transaction")
            return;
            }
        });
                        //   this.setState({ transactionHash : receipt["transactionHash"] })
                        //   this.setState({ blockHash : receipt["blockHash"] })
                        //   console.log(receipt)
                        //   console.log([this.state.transactionHash, this.state.blockHash])
                        }).on('error', (receipt) => {
                          if(receipt["code"] == 4001){
                            alert("User denied transaction")
                            return;
                          }
                        });
  
        // ------------------
    //     // sending email
    //     init("user_ca1Ts0fdL8YuvJE1cUgtk");
    //   var templateParams = {
    //       "userName" : this.state.userName,
    //       "userEmail" : this.state.userEmail,
    //       "userShippingAddress" : this.state.userShippingAddress,
    //       "transactionHash" : this.state.transactionHash,
    //       "blockHash" : this.state.blockHash
    //   }
    //  emailjs.send('service_fonu0fq', 'template_uegm5or', templateParams)
    //           .then(function(response) {
    //             alert('CONGRATULATIONS FOR YOUR DIGITAL WINE!');
    //       }, function(error) {
    //          console.log('FAILED...', error);
    //       });
      
    //     console.log("user initiated")
  
    //     this.setState({ redirect : true })
  
     
      }




    addWineNumber(){
        console.log("button clicked")
        if(this.state.wineNumber < 6){
            this.state.wineNumber  = this.state.wineNumber + 1
            this.setState({ wineNumber : this.state.wineNumber})
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
        }
        else{
            alert("Please add wine first")
        return
        }
     
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
                    <h1 className="big">Chardonnay</h1>
                    <span className="new">FEATURED</span>
                    </div>
                    <h4 className="small">Dry Red Wine 750ml</h4>
                </div>}

                {!this.state.mintClicked && <div className="description">
                    <h3 className="title">Description</h3>
                    <p className="text">
                    Red. This is Spain 2019s most planted and highly-prized red variety. Wines range in style from rose to red, but Tempranillo is perhaps most known by its two champion regions of Rioja and Ribera del Duero.
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
          

        {this.state.mintClicked  && <div className="shoeName">
                    
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
                   this.state.mintClicked && <div className="sign__group">
                   <input onChange={this.handleNameChange} type="text" name="name" className="sign__input" placeholder="Name" />
                 </div>
               }
              {
                  this.state.mintClicked && <div className="sign__group">
                  <input onChange={this.handleEmailChange} type="text" name="email" className="sign__input" placeholder="Email" />
                </div>
              }
               {
                   this.state.mintClicked &&  <div className="sign__group">
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
                   <label htmlFor="type5">Yes I am 18+, Allow me to drink🍷</label>
                 </li>
                 </ul>
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
                    <h1>{this.state.winePrice}ETH</h1>
                </div>
                </div>
            }

{
            this.state.mintClicked && <div className="buy-price">
                <a href="/#" className="buy" onClick={this.handleBack}>
                    <i className="fas fa-shopping-cart"></i>Back
                </a>
                <a href="/#" className="buy" onClick={this.lazyMint}>
                    <i className="fas fa-shopping-cart"></i>Mint
                </a>
                {/* <div className="price">
                    <i className="fas fa-dollar-sign"></i>
                    <h1>{this.state.winePrice}ETH</h1>
                </div> */}
                </div>
            }


               
            </div>
        )
    }
}

export default WineInfo;


