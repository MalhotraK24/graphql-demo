const resolvers = {
  Query: {
    questions: async (_, __, { dataSources }) =>  await dataSources.contentfulAPI.getAllQuestions()
  }
}

module.exports = resolvers;