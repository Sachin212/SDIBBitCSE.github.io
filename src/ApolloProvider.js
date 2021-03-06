import React from 'react'
import App from './App'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'

const httpLink = createHttpLink({
    uri: "https://sdi-survey.herokuapp.com"
})

const authLink = setContext(() =>{
    const token = localStorage.getItem('jwtToken')

    return{
        headers:{
            Authorization: token ? `Bearer ${token}`: ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export default(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)