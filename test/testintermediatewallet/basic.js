import ether from '../helpers/ether';
import tokens from '../helpers/tokens';
import EVMRevert from '../helpers/EVMRevert';
import {advanceBlock} from '../helpers/advanceToBlock';

const should = require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(web3.BigNumber))
  .should();

export default function (Token, IntermediateWallet, wallets) {
  let token;
  let intermediatewallet;

  before(async function () {
    // Advance to the next block to correctly read time in the solidity "now" function interpreted by testrpc
    await advanceBlock();
  });

  beforeEach(async function () {
    token = await Token.new();
    intermediatewallet = await IntermediateWallet.new();

    await token.transferOwnership(wallets[0]);

  });

  it ('should init wallet as owner', async function () {
    const owner = await intermediatewallet.owner();
    const initwallet = await intermediatewallet.wallet();
    assert.equal(owner, initwallet);
  }); 

}
