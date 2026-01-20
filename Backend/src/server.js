import express from "express"
import SupabaseClient from "../db/client.js"
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const LocalhostPort = 4040

async function ConnectDataBase() {
  try {
    await SupabaseClient.connect()
    console.log('Connect to supabase successfully')
  } catch (err) {
    console.log('Connection to supabase fail please check db', err)
  }
}

await ConnectDataBase()

function startServer() {
  app.listen(LocalhostPort, () => {
    console.log(`Connect to server at http://localhost:${LocalhostPort}`)

  })



  app.get('/', function (req, res) {
    res.send('hello world')
  })

}


startServer()