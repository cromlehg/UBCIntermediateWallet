import assertRevert from '../helpers/assertRevert';

export default function (IntermediateWallet, wallets) {
  let intermediatewallet;

  beforeEach(async function () {
    intermediatewallet = await IntermediateWallet.new();
  });

  it('should have an owner', async function () {
    const owner = await intermediatewallet.owner();
    assert.isTrue(owner !== 0);
  });

  it('changes owner after transfer', async function () {
    const other = wallets[1];
    await intermediatewallet.transferOwnership(other);
    const owner = await intermediatewallet.owner();
    assert.isTrue(owner === other);
  });

  it('should prevent non-owners from transfering', async function () {
    const other = wallets[2];
    const owner = await intermediatewallet.owner();
    assert.isTrue(owner !== other);
    await assertRevert(intermediatewallet.transferOwnership(other, {from: other}));
  });

  it('should guard ownership against stuck state', async function () {
    const originalOwner = await intermediatewallet.owner();
    await assertRevert(intermediatewallet.transferOwnership(null, {from: originalOwner}));
  });
}
