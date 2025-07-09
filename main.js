alert("Sizda hozir random sonlar chiqishni boshlaydi 😉")
let random = Math.round(Math.random() * 70 );
let result = random * 2;
let secondResult = random / 2;
let thirdResult = random /3;
alert(`Random orqali chiqqan son: ${random}`);
confirm("Biz random sonni 2 ga ko'paytirmoqchimiz va bo'lmoqchimiz !");
alert(`Random orqali chiqqan son: ${random} edi
biz uni 2 ga ko'paytirib: ${result} sonini chiqardik,
va shu sonni 2 ga bo'lib: ${secondResult} sonini chiqardik,
va shu sonni 3 ga bo'lgandagi qoldik: ${thirdResult} sonini chiqardik.
`)

console.log(`Random orqali chiqqan son: ${random} edi,
biz uni 2 ga ko'paytirib ${result} sonini chiqardik, 
va shu sonni 2 ga bo'lib: ${secondResult} sonini chiqardik, 
va shu sonni 3 ga bo'lgandagi qoldik: ${thirdResult} sonini chiqardik.
`)

