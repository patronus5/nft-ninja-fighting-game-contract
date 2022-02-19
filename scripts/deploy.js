const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  
  const gameContract = await gameContractFactory.deploy(
    ["Warrior1", "Warrior2", "Warrior3"],       // Names
    ["https://www.giantbomb.com/a/uploads/square_medium/15/153607/3028428-7282301757-Link_.png", // Images
    "https://www.giantbomb.com/a/uploads/square_medium/15/153607/3294276-link.png", 
    "https://www.giantbomb.com/a/uploads/square_medium/15/153607/3289157-link2.png"],
    [100, 200, 300],                    // HP values
    [100, 50, 25],                       // Attack damage values
    "Boss", // Boss name
    "https://www.giantbomb.com/a/bundles/phoenixsite/images/core/loose/profile-gb.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage     
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

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