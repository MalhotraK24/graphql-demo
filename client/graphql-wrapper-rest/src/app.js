const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { SchemaLink } = require('apollo-link-schema');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');

const initApollo = () => {

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
  });

  return client;
};

module.exports = { initApollo };