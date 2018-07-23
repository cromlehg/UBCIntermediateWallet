pragma solidity ^0.4.24;

import './ownership/Ownable.sol';
import './token/ERC20Basic.sol';
import './ReceivingContractCallback.sol';

contract IntermediateWallet is ReceivingContractCallback, Ownable {
    
  address public token = 0x2D3E7D4870a51b918919E7B851FE19983E4c38d5; 

  address public wallet;

  struct TokenTx {
    address from;
    uint amount;
    uint date;
  }

  TokenTx[] public txs;
  
  constructor() public {
    wallet = owner;
  }

  function setToken(address newTokenAddr) public onlyOwner {
    token = newTokenAddr;
  }
  
  function setWallet(address newWallet) public onlyOwner {
    wallet = newWallet;
  }

  function retrieveTokens(address to, address anotherToken) public onlyOwner {
    ERC20Basic alienToken = ERC20Basic(anotherToken);
    alienToken.transfer(to, alienToken.balanceOf(this));
  }

  function () payable public {
    wallet.transfer(msg.value);
  }

  function tokenFallback(address _from, uint _value) public {
    require(msg.sender == token);
    txs.push(TokenTx(_from, _value, now));
    ERC20Basic(token).transfer(wallet, _value);
  }

}

