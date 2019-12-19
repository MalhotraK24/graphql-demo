const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    questions: [Question]!
  }

  type Question {
      id: ID!
      title: String
      answers: [Answer]!
  }

  type Answer{
      id: ID!
      title: String
      value: String
  }
  `;

module.exports = typeDefs;