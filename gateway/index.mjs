import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: 'registries', url: 'http://registry:3031/graphql' },
      { name: 'papers', url: 'http://paper:3032/graphql' },
    ],
  })
});

const server = new ApolloServer({ gateway });

const { url } = await startStandaloneServer(server);

console.log(`Server ready at url: ${url}`);
