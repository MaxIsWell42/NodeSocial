const express = require('express')
const app = express()
const path = require("path")
const format = require('date-format')
const PORT = process.env.port || 4000

// swagger docs
const swaggerUI = require('swagger-ui-express')
const YAML = require("yamljs")
const swaggerDocument = YAML.load('./swagger.yaml')

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))


// Home
app.get("/", (req,res) => {
    res.status(200).send("<h1>OuterAct</h1>")
})

app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token)
    res.status(200).json({ param: req.params.token })
})

app.get("/api/v1/instagram", (req,res) => {
    const instaSocial = {
        username: 'MaxIsWell',
        followers: 432,
        following: 30,
        date: format.asString('', new Date())
    }

    res.status(200).json(instaSocial)
})

/**
 * @openapi
 * /LinkedIn
 */

app.get("/api/v1/linkedIn", (req,res) => {
    const instaSocial = {
        username: 'MaxIsWell',
        connections: 70,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    }

    res.status(200).json(instaSocial)
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})


