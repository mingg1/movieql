import { gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
    rating: Float!
    description_intro: String
    year: Int!
    url: String!
    runtime: Int!
    summary: String!
    medium_cover_image: String
    genres: [String]
    language: String!
    background_image: String!
  }

  type Query {
    movies(limit: Int = 40, rating: Float = 8.0): [Movie]!
    movie(id: ID!): Movie
    suggestions(id: ID!): [Movie]!
  }
`;

export default typeDefs;
