const express = require('express');
const app = express();

const fs = require('fs').promises;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ejercicio n°1
app.get('/', (req, res) => {
	const date = new Date()
	const currentDay = `${date.getDate()}/${ (date.getMonth() + 1) }/${ date.getFullYear() }`
	res.send(currentDay)
})


//ejercicio n°2
app.get("/file", async (req, res) => {
	try {
    		res.send(await fs.readFile("./index.txt", "utf-8"));
  	} catch (error) {
    		res.send(error);
  	}
});


//ejercicio n°3
app.post('/user', (req, res) => {
	let {name} = req.body
	res.send(`Hello ${name}`)
})


app.listen(3000, () =>{
	console.log('server on port 3000');
} )
