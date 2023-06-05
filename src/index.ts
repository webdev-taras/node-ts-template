import express from "express"
import { hello } from './hello'
import hola from './hola'


const app = express()
 
app.get("/", function (req, res) {
  res.send(`say ${hello}`)
});
 
app.listen(8080)

console.log(`say ${hello}`)
console.log(`di ${hola}`)
