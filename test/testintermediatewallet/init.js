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

  it ('should init wallet as 0x0B18Ed2b002458e297ed1722bc5599E98AcEF9a5', async function () {
    const initwallet = await intermediatewallet.wallet();
    assert.equal(initwallet, 0x0B18Ed2b002458e297ed1722bc5599E98AcEF9a5);
  }); 

}
