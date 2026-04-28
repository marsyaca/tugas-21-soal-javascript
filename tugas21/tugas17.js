// Input total harga barang 
let totalHarga = 250000;

// Inisialisasi variabel diskon
let diskon = 0;

// Cek apakah total harga >= 200000
if (totalHarga >= 200000) {
    diskon = 0.075 * totalHarga;
}

// Hitung total yang harus dibayar setelah diskon
let hargaBayar = totalHarga - diskon;

// Tampilkan hasil
console.log("Diskon: " + diskon);
console.log("Total yang harus dibayar: " + hargaBayar);