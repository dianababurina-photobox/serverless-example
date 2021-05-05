import { APIGatewayProxyResult } from 'aws-lambda';
import middy from '@middy/core';
import inputOutputLogger from '@middy/input-output-logger';

const handler = middy(
  (): Promise<APIGatewayProxyResult> => {
    return Promise.resolve({
      statusCode: 200,
      body: 'Hello from Photobox team!',
    });
  },
);

handler.use(inputOutputLogger());

export default handler;
