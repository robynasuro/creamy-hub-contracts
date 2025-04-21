async function main() {
  // Dapatkan contract factory untuk NFTMinter
  const NFTMinter = await ethers.getContractFactory("NFTMinter");
  
  // Deploy kontrak
  const nftMinter = await NFTMinter.deploy();
  
  // Tunggu sampai selesai deploy
  await nftMinter.deployed();
  
  // Cetak alamat kontrak
  console.log("NFTMinter deployed to:", nftMinter.address);
}

// Jalankan script dan tangkap error
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
