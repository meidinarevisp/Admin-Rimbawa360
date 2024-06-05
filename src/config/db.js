const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  multipleStatements: true,
});

const createDatabaseAndTable = `
    CREATE DATABASE IF NOT EXISTS rimbawa360;
    USE rimbawa360;
    CREATE TABLE IF NOT EXISTS direktori (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nama_tempat VARCHAR(255) NOT NULL,
        lokasi VARCHAR(255) NOT NULL,
        latitude VARCHAR(255) NOT NULL,
        longitude VARCHAR(255) NOT NULL,
        deskripsi VARCHAR(255) NOT NULL,
        aktivitas VARCHAR(255) NOT NULL,
        akses VARCHAR(255) NOT NULL,
        fasilitas VARCHAR(255) NOT NULL,
        gambar VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS edukasi (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nama_isu VARCHAR(255) NOT NULL,
        deskripsi VARCHAR(255) NOT NULL,
        dampak VARCHAR(255) NOT NULL,
        solusi VARCHAR(255) NOT NULL,
        gambar VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS spesies (
        id INT PRIMARY KEY AUTO_INCREMENT,
        namaSpesies VARCHAR(255) NOT NULL,
        deskripsi VARCHAR(255) NOT NULL,
        kerajaan VARCHAR(255) NOT NULL,
        kelas VARCHAR(255) NOT NULL,
        statusKonservasi VARCHAR(255) NOT NULL,
        ordo VARCHAR(255) NOT NULL,
        spesies VARCHAR(255) NOT NULL,
        populasi VARCHAR(255) NOT NULL,
        rentanganHidup VARCHAR(255) NOT NULL,
        panjang VARCHAR(255) NOT NULL,
        berat VARCHAR(255) NOT NULL,
        kecepatanTertinggi VARCHAR(255) NOT NULL,
        gambar VARCHAR(255) NOT NULL
    );
`;

pool.query(createDatabaseAndTable, (err, results) => {
  if (err) {
    console.error("Error creating database and table:", err);
  } else {
    console.log("Database and table created or already exist.");
  }
});

module.exports = pool.promise();
