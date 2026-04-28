// Input nama siswa dan nilai 
let namaSiswa = "Dena";
let nilai = 85;

// Fungsi menentukan grade berdasarkan nilai
function tentukanGrade(nilai) {
    if (nilai >= 90 && nilai <= 100) {
        return "A";
    } else if (nilai >= 80 && nilai < 90) {
        return "B";
    } else if (nilai >= 70 && nilai < 80) {
        return "C";
    } else if (nilai >= 60 && nilai < 70) {
        return "D";
    } else if (nilai < 60 && nilai >= 0) {
        return "E";
    } else {
        return "Nilai tidak valid";
    }
}

// Dapatkan grade
let grade = tentukanGrade(nilai);

// Tampilkan hasil
console.log("Nama Siswa: " + namaSiswa);
console.log("Nilai: " + nilai);
console.log("Grade: " + grade);

