pragma solidity ^0.4.24;

import './ERC20BasicCutted.sol';

pragma solidity ^0.4.24;

contract IntermediateWallet {
    
  address public wallet =0x0B18Ed2b002458e297ed1722bc5599E98AcEF9a5;

  function () payable public {
    wallet.transfer(msg.value);
  }
  
  function tokenFallback(address _from, uint _value) public {
    ERC20BasicCutted(msg.sender).transfer(wallet, _value);
  }

}

