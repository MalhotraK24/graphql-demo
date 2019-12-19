// import { useQuery } from 'react-hooks';
// import gql from 'graphql-tag';

// const { useQuery } = require('@apollo/react-hooks');
// const gql = require('graphql-tag');

// const GET_QUESTIONS = gql`
// {
//     questions {
//         id
//         title
//         answers
//     }
// }
// `;

// module.exports = function Questions() {
//     const { data, loading, error } = useQuery(GET_QUESTIONS);
//     if (loading) return NULL;
//     if (error) return NULL;
//     return data;
// }

// export default function Questions() {
//     const { data, loading, error } = useQuery(GET_QUESTIONS);
//     if (loading) return <p>LOADING</p>;
//     if (error) return <p>ERROR</p>;
//     return data;
// };