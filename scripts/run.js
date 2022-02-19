const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Leo", "Aang", "Pikachu"],       // Names
      ["QmYuoSVe9AZGxQSkzEs1HYtttoeiGHemwPC457rtCDvPh2", // Images
      "QmWncGAMAMkjE2Jz6pA5rjW1xW8RBYrG3qzj5Qwf6gmMn2", 
      "QmSpp6HUhtvo7ehA98gHeavMduFs7hnUT3CK5xvs5oLuKS"],
      [100, 200, 300],                    // HP values
      [100, 50, 25],                       // Attack damage values
      "Boss", // Boss name
      "https://www.giantbomb.com/a/bundles/phoenixsite/images/core/loose/profile-gb.png", // Boss image
      10000, // Boss hp
      50 // Boss attack damage     
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    // Get the value of the NFT's URI.
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();