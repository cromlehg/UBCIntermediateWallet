import ether from './helpers/ether';
import tokens from './helpers/tokens';

import maintest from './testintermediatewallet/intermediatewallet';
import init from './testintermediatewallet/init';

const intermediatewallet = artifacts.require('IntermediateWallet.sol');
const token = artifacts.require('TestToken.sol');

contract('Init test', function (accounts) {
  init(intermediatewallet, accounts);
});

contract('IntermediateWallet test', function (accounts) {
  maintest(token, intermediatewallet, accounts);
});
