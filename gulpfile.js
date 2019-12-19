var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
const { initApollo } = require('./client/graphql-wrapper-rest/src/app.js');
const { GET_QUESTIONS } = require('./client/graphql-wrapper-rest/src/queries.js')

gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('client/app/pages/**/*.+(html|njk)')
    .pipe(data(async function() {
      const client = await initApollo();
      console.log("Sending the query....");
      const questions = await client.query({
        query: GET_QUESTIONS
      });
      
      return questions.data;
    }))
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['client/app/templates']
      }))
    // output files in app folder
    .pipe(gulp.dest('dist'))
  });