pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";


// import "./ERC721Full.sol";

contract Wine is ERC721, ERC721Enumerable {

    // to keep the wine count
    uint public wineCount = 0;

    // to keep the track of ipfshash with data
    mapping(uint => string) public wineData;
    
    // to keep check if the wine exists or not
    mapping(string => bool) public wineExist;

    // array to store all the ipfs hashes

    string[] public wineHashes;

    constructor() ERC721("Wine", "WINE") public {
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
    internal
    override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, ERC721Enumerable)
    returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function mint(string memory _wineHash) public payable {
        require(msg.value >= 20000000000000000, "Not enough ETH sent; check price!");
        require(!wineExist[_wineHash],"Wine already exists");
            wineHashes.push(_wineHash);
            uint _id = wineHashes.length - 1;
            _mint(msg.sender,_id);
            wineData[_id] = _wineHash;
            wineExist[_wineHash] = true;
            wineCount ++;
    }

    function getContractBalance() public returns(uint){

    return address(this).balance;


    }
}

// make an array so that we can fetch the object on UI part.
// make a mapping to keep track of the ipfs hash
