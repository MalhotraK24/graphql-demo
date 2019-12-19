const { RESTDataSource } = require('apollo-datasource-rest');

const contentful = require('contentful');

const SPACE_ID = 'yzv6k9csp5ed';
const ACCESS_TOKEN = 'SEiOkbOFmibKerSLTNMc9oUrVY2dQ6kXsEOVwXQjneQ';

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
});

class ContenfulAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://cdn.contentful.com/spaces/' + SPACE_ID + '?access_token=' + ACCESS_TOKEN;
  }

  async getAllQuestions() {
    const response = await client.getEntries({content_type: 'questions'});
    return Array.isArray(response.items)
      ? response.items.map(entry => this.resultOptimizer(entry))
      : [];
  }
 
  async resultOptimizer(entry) {
    return {
      id: entry.sys.id,
      title: entry.fields.question,
      answers: await Array.isArray(entry.fields.answers) ? entry.fields.answers.map(answer => this.answerOptimizer(answer)) : [],
    };
  }

  answerOptimizer(answer) {
    return {
      id: answer.sys.id,
      title: answer.fields.title,
      value: answer.fields.answer.content[0].content[0].value,
    };
  }
}

module.exports = ContenfulAPI;