const express = require("express")
const app = express()

app.get("/:url", (_req, _res) => {
  return "Foo"
})

module.exports = app
