const ContentfulAPI = require('./datasources/contentful.js');

const resolvers = {
  Query: {
    questions: async (root, args, context, info) =>  await new ContentfulAPI().getAllQuestions()
  }
}

module.exports = resolvers;