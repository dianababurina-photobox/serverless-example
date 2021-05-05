/* eslint-disable no-template-curly-in-string */
import { Serverless } from 'serverless/aws';
import functions from './src/handlers';

const serverlessConfiguration: Serverless = {
  service: 'sls-git-template',
  disabledDeprecations: ['LAMBDA_HASHING_VERSION_V2', 'AWS_API_GATEWAY_NAME_STARTING_WITH_SERVICE'],
  plugins: ['serverless-deployment-bucket', 'serverless-offline', 'serverless-prune-plugin'],
  provider: {
    name: 'aws',
    runtime: "${opt:runtime, 'nodejs12.x'}",
    region: '${self:custom.region}',
    profile: 'photobox-dev',
  },
  custom: {
    region: '${opt:region, "eu-west-1"}',
    environment: '${opt:stage, "development"}',
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
  functions,
};

module.exports = serverlessConfiguration;
