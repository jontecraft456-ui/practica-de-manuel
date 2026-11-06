//arquitectura dle computado
//import * as os from "node:os";
//console.log(os.arch())

//memoria libre y total en gigas

//import * as os from "node:os";

//console.log(os.totalmem(),os.freemem()/ (1024**3))

//que plataforma usa

//import * as os from "node:os";

//console.log(os.platform())

//tipo de sistema operativo

//import * as os from "node:os";

//console.log(os.type())


//fs.writeFileSync("archivo1.txt","Hola mundo")

//import * as fs from "node:fs";
//
//const objetos =[
//
//{id:1, nombre: "jiosiel"},
//{id:2, nombre: "jioswel"}
//
//]
//fs.writeFileSync ("data.json",JSON.stringify(objetos))



//const contenido = fs.readFileSync("archivo3.txt", "utf-8" );

//const lineas = contenido.split("\n");

//console.log(lineas);

//fs.copyFileSync("archivo2-txt", "archivo3.txt")
//const leerdisco = fs.readdirSync("src")

//console.log(leerdisco)
//fs.mkdirSync("src/carpeta1")

//fs.renameSync("archivo1.txt","archivo2-txt")

//const existente = fs.existsSync("archivo1.txt")

//console.log(existente)
//fs.appendFileSync("archivo1.txt", "\nprobando")

//const contenido = fs.readFileSync("archivo1.txt", "utf-8")

//console.log (contenido)

//import * as os from "node:os"
//import * as path from "node:path"
//
//const rutaoriginal = ("./src/main.ts")
//const canonizada = path.resolve(rutaoriginal)
//
//console.log("rutaoriginal: ",rutaoriginal)
//console.log("ruta canon: ",canonizada)
//console.log("direcion de disco",os.tmpdir())
//console.log("separador: ",path.sep)
//console.log("esabsoluta",path.isAbsolute(rutaoriginal))

//import * as os from "node:os";
//import * as path from "node:path";
//
//const rutaOriginal = "./src/../config/./env.json";
//
// Canoniza: resuelve los "." y ".." y la convierte en absoluta
//const rutaCanonica = path.resolve(rutaOriginal);
//
//console.log("Ruta original:", rutaOriginal);
//console.log("Ruta canonizada:", rutaCanonica);
//console.log("Separador de rutas:", path.sep);
//console.log("Directorio temporal:", os.tmpdir());
//console.log("¿Es absoluta?:", path.isAbsolute(rutaCanonica));






//ejercicio 12

//import * as os from 'node:os';
//
//const uptimeSegundos = os.uptime();
//
//const horas = Math.floor(uptimeSegundos / 3600);
//const minutos = Math.floor((uptimeSegundos % 3600) / 60);
//const segundos = Math.floor(uptimeSegundos % 60);
//
//console.log(`Tiempo de actividad: ${horas} horas, ${minutos} minutos, ${segundos} segundos`);


import * as os from "node:os"


console.log ("direcion temporal", os.tmpdir())



