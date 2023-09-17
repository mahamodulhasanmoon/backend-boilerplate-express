import app from "./src/app/app"

const port =process.env.PORT ||3000

// database connection 




app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`)
})