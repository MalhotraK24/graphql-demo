const gql = require('graphql-tag');

const GET_QUESTIONS = gql`
  query getQuestions {
    questions {
        id
        title
        answers {
          id
          title
          value
        }
    }
  }
`;

module.exports = { GET_QUESTIONS }