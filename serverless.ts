import { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  service: 'sls-git-template',
  disabledDeprecations: ['LAMBDA_HASHING_VERSION_V2', 'AWS_API_GATEWAY_NAME_STARTING_WITH_SERVICE'],
  plugins: ['serverless-deployment-bucket', 'serverless-offline', 'serverless-prune-plugin'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
  },
  custom: {
    'serverless-offline': {
      port: 5000,
      noPrependStageInUrl: true,
      useChildProcesses: true,
    },
    prune: {
      automatic: true,
      includeLayers: true,
      number: 1, // TODO: should be env specific
    },
  },
  functions: {
    example: {
      handler: 'dist/src/handlers/exampleHandler.handler',
      events: [
        {
          http: {
            path: 'some/path/',
            method: 'get',
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
