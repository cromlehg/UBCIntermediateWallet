import ether from '../helpers/ether';
import tokens from '../helpers/tokens';
import EVMRevert from '../helpers/EVMRevert';
import {advanceBlock} from '../helpers/advanceToBlock';

const should = require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(web3.BigNumber))
  .should();

export default function (IntermediateWallet, wallets) {
  let intermediatewallet;

  before(async function () {
    // Advance to the next block to correctly read time in the solidity "now" function interpreted by testrpc
    await advanceBlock();
  });

  beforeEach(async function () {
    intermediatewallet = await IntermediateWallet.new();
  });

  it ('should init wallet as owner', async function () {
    const owner = await intermediatewallet.owner();
    const initwallet = await intermediatewallet.wallet();
    assert.equal(owner, initwallet);
  }); 

  it ('should init token as 0x2D3E7D4870a51b918919E7B851FE19983E4c38d5', async function () {
    const initToken = await intermediatewallet.token();
    assert.equal(initToken, 0x2D3E7D4870a51b918919E7B851FE19983E4c38d5);
  });

}
