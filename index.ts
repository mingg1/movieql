import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async () => {
  const { url } = await server.listen();
  console.log('Graphql server running at 🍿', url);
})();
