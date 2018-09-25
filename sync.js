// Pamiętaj!
// Najpierw umieść orginalne pliki w tym samym miejscu co nasz skrypt i package.json

const fs = require('fs');

// Pobranie aktualnych nazw plików z tego katalogu
const fileFolder = './pliki_poczatkowe/';

fs.readdirSync(fileFolder).forEach( (file,index) => {
	// console.log(file);
	fs.renameSync(file, (index+1)+'.jpg');
});

// Przykładowa zmiana nazwy z pliku 'start.js' na 'end.js'
// try {
// 	fs.renameSync('start.js', 'end.js');
// } catch(err) {
// 	console.log('Error while renaming a file'+err)
// }