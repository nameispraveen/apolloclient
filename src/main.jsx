import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainApp from './MainApp'
const client=new ApolloClient({
  uri:"https://khoros-graphql-api.vercel.app/api/graphql",
  cache:new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <MainApp />
  </ApolloProvider>
)
