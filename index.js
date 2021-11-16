import express from 'express'
import path from 'path'

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'y', 'x', 'z']
const numbers = [1, 0, 2, 9, 3, 8, 4, 7, 6, 5]
const symbols = ['.', ':', ';', '*', '&', '-', '=', '+', '(', ')', '%', '$', '#', '@', '!', '?', '/', '\\']

const __dirname = path.resolve()
const app = express()
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Servidor arrancado en el puerto ' + PORT)
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})

app.get('/password', (req, res) => {
    let pass = generatePass()
    res.json(
        {
            "pass": pass,
            "passLength": pass.length
        }
    )
    res.send(generatePass())
})

app.get('/password/:lenght', (req, res) => {
    let pass = generatePass(req.params.lenght)
    res.json(
        {
            "pass": pass,
            "passLength": pass.length
        }
    )
})


function generatePass() {
    let x
    let pass = ''
    let sel

    arguments.length === 0 ? x = parseInt(Math.random() * 11 + 10) : x = arguments[0]

    for (let i = 0; i < x; i++) {
        sel = parseInt(Math.random() * 4)

        sel === 0 ? pass += letters[parseInt(Math.random() * 25)] :
            sel === 1 ? pass += letters[parseInt(Math.random() * 25)].toUpperCase() :
                sel === 2 ? pass += numbers[parseInt(Math.random() * 10)] :
                    pass += symbols[parseInt(Math.random() * 18)]
    }
    return pass
}