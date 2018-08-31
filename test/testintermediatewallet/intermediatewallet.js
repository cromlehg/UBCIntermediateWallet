import ether from '../helpers/ether';
import tokens from '../helpers/tokens';
import EVMRevert from '../helpers/EVMRevert';
import {advanceBlock} from '../helpers/advanceToBlock';

const should = require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(web3.BigNumber))
  .should();

export default function (Token, IntermediateWallet, wallets) {
  let intermediatewallet;
  let token;

  before(async function () {
    // Advance to the next block to correctly read time in the solidity "now" function interpreted by testrpc
    await advanceBlock();
  });

  beforeEach(async function () {
    token = await Token.new();
    await token.transferOwnership(wallets[1]);

    intermediatewallet = await IntermediateWallet.new();
  });

  it ('should send ether to wallet', async function () {
    const investment = ether(1);
    const pre = web3.eth.getBalance('0x0B18Ed2b002458e297ed1722bc5599E98AcEF9a5');
    await intermediatewallet.sendTransaction({value: investment, from: wallets[2]});
    const post = web3.eth.getBalance('0x0B18Ed2b002458e297ed1722bc5599E98AcEF9a5');
    post.minus(pre).should.be.bignumber.equal(investment);
  });

  it ('should send tokens to wallet', async function () {
    const tokensInvestment = tokens(100);
    await token.registerCallback(intermediatewallet.address, {from: wallets[1]});
    await token.mint(wallets[2], tokensInvestment, {from: wallets[1]});
    await token.transfer(intermediatewallet.address, tokensInvestment, {from: wallets[2]});

    const balance = await token.balanceOf('0x0B18Ed2b002458e297ed1722bc5599E98AcEF9a5');
    balance.should.be.bignumber.equal(tokensInvestment);

  });
}
