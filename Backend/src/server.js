import express from "express"
import SupabaseClient from "../db/client.js"
import http from 'http'
import cors from 'cors'
import bodyParser from "body-parser";
import { ApolloServer } from '@apollo/server'
import dotenv from 'dotenv'
import MergeTypeDefs from "./graphql/schema/merge.js"
import QueryResolvers from "./graphql/resolvers/query.js"
import { MutationResolvers } from "./graphql/resolvers/mutation.js"
import { mergeResolvers } from "@graphql-tools/merge"
import { expressMiddleware } from '@as-integrations/express4'


const MergeResolvers = mergeResolvers([QueryResolvers, MutationResolvers])
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

async function startServer() {
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    typeDefs: [MergeTypeDefs],
    resolvers: MergeResolvers,
  })


  await server.start()


  app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server, {
    context: async () => ({
      db: SupabaseClient
    }),

    formatError: (error) => {
      return {
        message: error.message,
        code: error.extensions.code || "INTERNAL_SERVER_ERROR",
        path: error.path
      }
    },
  }))

  app.get('/', function (req, res) {
    res.send('hello world')
  })

  httpServer.listen(LocalhostPort, () => {
    console.log(`Connect to server at http://localhost:${LocalhostPort}/graphql`)

  })


}


startServer()