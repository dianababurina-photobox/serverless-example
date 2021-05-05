/* eslint-disable no-template-curly-in-string */
import { AwsFunctionHandler } from 'serverless/aws';
import { handlerPath } from '../../lib/handlerResolver';

const definition: AwsFunctionHandler = {
  name: '${self:service}-${self:custom.envSpecific.${self:custom.environment}.serviceShortName}-hello',
  handler: handlerPath(__dirname, 'hello'),
  events: [
    {
      http: {
        path: 'hello',
        method: 'get',
      },
    },
  ],
};

export default definition;
