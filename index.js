console.log("hello world");

//variable 
// var, let, const
// jika var memiliki dua variable sama akan teroverwrite
// jika let memiliki dua variable sama akan eror karena variable telah terdeclare
// const hanya boleh satu isi dan value tidak bisa di ganti

// var name ='harysa';
// var name = 'gaga';
// console.log(name);

// let status = 'sswa';
// let status = 'kerja';
// console.log(status);

// const address = 'cpt';
// const address = 'bks';
// console.log(address);

// tipe Data
// String, int, Boolean=true/false, dll.

// const address = 'ciputat bintaro';
// const addressLength = address.length;
// const addIndex = address.indexOf('bin');
// const addSubs = address.substr(3, 2);
// const addSlice = address.slice(0, 3);
// const addSplit = address.split('');

// console.log(addressLength);
// console.log(addIndex);
// console.log(addSubs);
// console.log(addSlice);
// console.log(addSplit);

// const permen = 1000;
// const banyak = 4;

// const tambah = permen + banyak;
// const kurang = permen - banyak;
// const kali = permen * banyak;
// const bagi = permen / banyak;
// const modulo = permen % banyak;

// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);
// console.log(modulo);
// jika hasil modulo 1 ganjil jika 0 genap
// parseint untuk merubah string jadi number
// tostring untuk merubah menjadi string



// const mathpi = Math.PI(100);
 console.log(Math.PI);
 // nampilin pi 3,14

const mathabs = Math.abs(-100);
console.log(mathabs);
// abs buat ngilangin minus

const mathpow = Math.pow(2,2)
console.log(mathpow);
// pow untuk kuadrat

const mathsqrt = Math.sqrt(49)
console.log(mathsqrt);
// sqrt untuk akar

const mathcbrt = Math.cbrt(27)
console.log(mathcbrt);
// cbrt untuk akar pangkat 3

const mathround = Math.round(4.2);
console.log(mathround);
// untuk pembulatan 0-4 kebawah 5-9 keats
// rand x 10

const mathfloor = Math.floor(4.7);
console.log(mathfloor);
//untuk pembulatan kebawah

const mathceil =Math.ceil(4.4);
console.log(mathceil);
// untuk pembulatan keatas

console.log(Math.random()*10);
//random angka 0-1