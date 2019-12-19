const { ApolloClient } = require('apollo-client');
const { ApolloServer } = require('apollo-server');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { SchemaLink } = require('apollo-link-schema');
const { HttpLink } = require('apollo-link-http');

const fetch = require('node-fetch');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');
const ContentfulAPI = require('./datasources/contentful.js');

const initApollo = () => {
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources:() => ({
      contentfulAPI: new ContentfulAPI()
    })
  });
  
  // Trying something to see if it works
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });

  const client = new ApolloClient({
    //link: new HttpLink({ uri: 'http://localhost:4000/', fetch: fetch }),
    link: new HttpLink({ fetch: fetch }),
    //link: new SchemaLink({server}),
    cache: new InMemoryCache(),
  });
  //console.dir(HttpLink);
  return client;
};

module.exports = { initApollo };