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
    await intermediatewallet.setWallet(wallets[2]);
    await intermediatewallet.transferOwnership(wallets[1]);

  });

  it ('should return correct wallets address after setting wallet', async function () {
    await intermediatewallet.setWallet(wallets[5], {from: wallets[1]});
    const wallet = await intermediatewallet.wallet();
    assert.equal(wallet, wallets[5]);
  });      

  it ('only owner can set wallet', async function () {
    await intermediatewallet.setWallet(wallets[5], {from: wallets[3]}).should.be.rejectedWith(EVMRevert);
    const wallet = await intermediatewallet.wallet();
    assert.equal(wallet, wallets[2]);
  });  

  it ('should send ether to wallet', async function () {
    const investment = ether(1);
    const pre = web3.eth.getBalance(wallets[2]);
    await intermediatewallet.sendTransaction({value: investment, from: wallets[3]});
    const post = web3.eth.getBalance(wallets[2]);
    post.minus(pre).should.be.bignumber.equal(investment);
  });

  it ('should send tokens to wallet ', async function () {
    const tokensInvestment = tokens(100);
    await token.mint(intermediatewallet.address, tokensInvestment, {from: wallets[0]});
    await intermediatewallet.retrieveTokens(wallets[4], token.address, {from: wallets[1]});
    const balance = await token.balanceOf(wallets[4]);  
    balance.should.be.bignumber.equal(tokensInvestment);
  });

  it ('should not send tokens to wallet if sender is not owner', async function () {
    const tokensInvestment = tokens(100);
    await token.mint(intermediatewallet.address, tokensInvestment, {from: wallets[0]});
    await intermediatewallet.retrieveTokens(wallets[4], token.address, {from: wallets[3]}).should.be.rejectedWith(EVMRevert);
  }); 

}
