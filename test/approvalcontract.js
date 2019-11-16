const ApprovalContract = artifacts.require( '../contracts/ApprovalContract' )

contract( 'ApprovalContract' , ( accounts ) => {
    it( 'Initiates Contract', async () => {
        const contract = await ApprovalContract.deployed()
        const approver = await contract.approver.call()
        assert.equal( approver, 0x4997d18808c071d308e04ef994e465a474019577, 'Approvers Dont Match' )
    })

    it( 'takes deposit', async ()=> {
        const contract = await ApprovalContract.deployed()
        await contract.deposit( accounts[0], { value: 1e+18, from: accounts[1]})
        assert.equal( web3.eth.getBalance( contract.address), 1e+18, 'Amounts Did not Match')
    })
})