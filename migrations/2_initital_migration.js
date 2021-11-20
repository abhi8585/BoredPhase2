const Wine = artifacts.require("Wine");

module.exports = function(deployer) {
  deployer.deploy(Wine);
};