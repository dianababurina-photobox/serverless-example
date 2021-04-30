import { APIGatewayProxyResult } from 'aws-lambda';

export const handler = (): Promise<APIGatewayProxyResult> => {
  return Promise.resolve({
    statusCode: 200,
    body: 'Hello from Photobox team',
  });
};
