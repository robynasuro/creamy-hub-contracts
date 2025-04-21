async function main() {
  // Dapatkan contract factory untuk NFTMinter
  const NFTMinter = await ethers.getContractFactory("NFTMinter");
  
  // Deploy kontrak
  console.log("Deploying NFTMinter...");
  const nftMinter = await NFTMinter.deploy();
  
  // Tunggu transaksi deploy selesai
  await nftMinter.waitForDeployment();
  
  // Cetak alamat kontrak
  console.log("NFTMinter deployed to:", await nftMinter.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
