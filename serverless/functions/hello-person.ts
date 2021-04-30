import { AwsFunctionHandler } from 'serverless/aws';

const helloPersonFunctionConfiguration: AwsFunctionHandler = {
  handler: '/dist/src/handlers/hello-person/handler.default',
  events: [
    {
      http: {
        path: 'hello/{personName}',
        method: 'get',
      },
    },
  ],
};

export default helloPersonFunctionConfiguration;
