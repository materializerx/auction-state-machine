const { expect } = require("chai");

describe("AuctionStateMachine", () => {
    it("should return its stage", async () => {
        const Auction = await ethers.getContractFactory("AuctionStateMachine");
        const auction = await Auction.deploy();

        // await auction.deployed();

        console.log("stage : " + await auction.stage())
        console.log("typeof(stage) : " + typeof(await auction.stage()))
        console.log("stage.toString() : " + (await auction.stage()).toString())
        
        expect(await auction.stage()).to.equal(0);
    });
});