import { AwsFunctionHandler } from 'serverless/aws';

const helloFunctionConfiguration: AwsFunctionHandler = {
  handler: '/dist/src/handlers/hello/handler.default',
  events: [
    {
      http: {
        path: 'hello',
        method: 'get',
      },
    },
  ],
};

export default helloFunctionConfiguration;
