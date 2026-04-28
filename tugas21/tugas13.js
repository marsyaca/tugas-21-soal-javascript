// Input harga makanan 
let hargaMakanan = 15000;

// Hitung pajak 
let pajak = 0.10 * hargaMakanan;

// Hitung fee 
let fee = 0.05 * hargaMakanan;

// Hitung total harga yang harus dibayar konsumen
let hargaBayar = hargaMakanan + pajak + fee;

// Tampilkan hasil
console.log("Harga makanan : " + hargaMakanan);
console.log("Pajak : " + pajak);
console.log("Fee : " + fee);
console.log("Harga bayar : " + hargaBayar);