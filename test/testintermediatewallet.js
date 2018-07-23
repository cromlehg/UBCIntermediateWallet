import ether from './helpers/ether';
import tokens from './helpers/tokens';

import maintest from './testintermediatewallet/intermediatewallet';
import basic from './testintermediatewallet/basic';

const token = artifacts.require('MainToken.sol');
const intermediatewallet = artifacts.require('IntermediateWallet.sol');

contract('Init test', function (accounts) {
  basic(token, intermediatewallet, accounts);
});

contract('IntermediateWallet test', function (accounts) {
  maintest(token, intermediatewallet, accounts);
});
