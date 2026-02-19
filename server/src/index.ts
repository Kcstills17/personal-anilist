import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import express from 'express';
import { gql } from 'graphql-tag';

// ---------------------------------------------------------------------------
// Placeholder GraphQL schema — will be expanded in Phase 5
// ---------------------------------------------------------------------------
const typeDefs = gql`
  type Query {
    health: String!
  }
`;

const resolvers = {
  Query: {
    health: () => 'ok',
  },
};

// ---------------------------------------------------------------------------
// Bootstrap
// ---------------------------------------------------------------------------
async function bootstrap(): Promise<void> {
  const app = express();

  app.use(express.json());

  // Health check REST endpoint (useful for Docker / load balancers)
  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  const apollo = new ApolloServer({ typeDefs, resolvers });
  await apollo.start();

  // Mount Apollo at /graphql
  app.use('/graphql', expressMiddleware(apollo));

  const port = process.env['PORT'] ?? 4000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`GraphQL endpoint: http://localhost:${port}/graphql`);
  });
}

bootstrap().catch((err: unknown) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
