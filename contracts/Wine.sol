pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";



// import "./ERC721Full.sol";

contract Wine is ERC721, ERC721Enumerable {

    // to keep the wine count
    uint public wineCount = 0;
    

    // to keep the track of ipfshash with data
    mapping(uint => string) public wineData;
    
    // to keep check if the wine exists or not
    mapping(string => bool) public wineExist;

     // to keep check if the same images is getting used
    mapping(string => bool) public imageExist;

    // array to store all the ipfs hashes

    string[] public wineHashes;
    string[] public imageHashes;


    string public ipfsDataHash = "QmZ18Sy3avcXyje2Q7X4R86XD6oCR2Tj85XU7fSqTCgZBh";

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

    function mint(string memory _wineHash, string memory _imageHash) public {
        require(!wineExist[_wineHash],"Wine already exists");
        require(!imageExist[_imageHash],"Image is getting used twices");
            wineHashes.push(_wineHash);
            imageHashes.push(_imageHash);
            uint _id = imageHashes.length - 1;
            _mint(msg.sender,_id);
            wineData[_id] = _wineHash;
            imageExist[_imageHash] = true;
            wineExist[_wineHash] = true;
            wineCount ++; 
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "https://ipfs.io/ipfs/";
    }

    function getData() public view returns (string memory) {
        return ipfsDataHash;
    }

    function getMintedImages() public view returns(string[] memory) {
        return imageHashes;
        }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        // require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory baseURI = _baseURI();
        string memory tokenHash = wineData[tokenId];
        return string(abi.encodePacked(baseURI, tokenHash));
        // return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : "";
    }
  
}
