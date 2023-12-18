// fungsi habis di bagi
function fishBash(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";

    if (i % 3 === 0) {
      output = "fish";
    }

    if (i % 5 === 0) {
      output = "bash";
    }

    if (i % 15 === 0) {
      output = "fish bash";
    }

    console.log(output || i);
  }
}

fishBash(100);

// Output:
// 1
// 2
// fish
// 4
// bash

// Fungsi untuk mengurutkan angka dari kecil ke besar secara manual
function sortAsceding(number) {
  for (let i = 0; i < number.length - 1; i++) {
    for (let j = i + 1; j < number.length; j++) {
      if (number[j] < number[i]) {
        // Tukar posisi jika angka sekarang lebih besar dari angka berikutnya
        let temp = number[i];
        number[i] = number[j];
        number[j] = temp;
      }
    }
  }
  return number;
}

// Fungsi untuk mengurutkan angka dari besar ke kecil secara manual
function sortDesceding(number) {
  for (let i = 0; i < number.length - 1; i++) {
    for (let j = i + 1; j < number.length; j++) {
      if (number[j] > number[i]) {
        let temp = number[i];
        number[i] = number[j];
        number[j] = temp;
      }
    }
  }
  return number;
}

let arr = [3, 7, 2, 1, 8, 4, 5, 6];

console.log(sortAsceding(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(sortDesceding(arr)); // Output: [8, 7, 6, 5, 4, 3, 2, 1]

//fungsi check string
function isPalindrome(str) {
  // Menghapus whitespace dan mengubah ke huruf kecil
  str = str.toLowerCase().replace(/\s/g, "");

  // Membalikkan string
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  // Mengecek apakah string asli dan yang dibalik sama
  return str === reversed;
}
console.log(isPalindrome("ibu ubi")); // true
console.log(isPalindrome("hello world")); // false
