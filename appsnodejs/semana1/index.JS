/*const op = require('./ejercicio1')

op.suma(6, 10)
op.resta(10, 2)
op.multiplicacion(2, 2)
op.division(8, 4)
op.potencia(2, 3)
op.radicacion(8)

console.log(op)
console.log(op)
console.log(op)
console.log(op)
console.log(op)
console.log(op)

*/
//Crear servidor nativo con nodejs 
//1. Requerir el modulo http
const http=require('http')
//3. Crear Funcion callback para manejar el servidor 
function handleserver(req, res){
    res.writeHead(404, {"Content-type": 'text-html'})
    res.write('<h1>Esta es la respuesta del servidor ok</h1>')
    res.end()
}
//2.Crear el server, se utiliza un aocnstante donde se deja almacenado el server, la funcion create server crea un sefvidor y define una funcion para poder definir que va pasar cuando escuche cualquer accion
const server=http.createServer(handleserver).listen(5000)

//Para cerrar el servidso es con control+c


