import {basename, dirname} from "path";

let arquivo = basename('.teste.txt');
let filename = basename('/teste/something');

let dir = dirname('/teste/something');
let diretorio = dirname('/teste/something/file.txt');

console.log("arquivo:  " + arquivo);
console.log("filename:  " + filename);
console.log("dir:  " + dir);
console.log("diretorio:  " + diretorio);

/* Resultado do console.log

arquivo:     .teste.txt
filename:    something
dir:         /teste
diretorio:   /teste/something

*/