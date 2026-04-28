// Input jari-jari bola 
let jariJari = 7;

// Hitung volume bola
let volume = (4 / 3) * Math.PI * Math.pow(jariJari, 3);

// Hitung luas permukaan bola
let luasPermukaan = 4 * Math.PI * Math.pow(jariJari, 2);

// Tampilkan hasil
console.log("Jari-jari bola: " + jariJari);
console.log("Volume bola: " + volume.toFixed(2));
console.log("Luas permukaan bola: " + luasPermukaan.toFixed(2));