import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { VendorModule } from './vendor.module';
import { Vendor } from './models/vendor';

@Module({
  imports: [
    VendorModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: {
          version: 2,
          directives: ['key', 'extends', 'external'],
        },
      },
      buildSchemaOptions: {
        orphanedTypes: [Vendor]
      },
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
