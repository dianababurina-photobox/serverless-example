import { APIGatewayProxyResult } from 'aws-lambda';

export default (event): Promise<APIGatewayProxyResult> => {
  const { personName = 'Anonymous' } = event.pathParameters;

  return Promise.resolve({
    statusCode: 200,
    body: `Hello from ${personName}!`,
  });
};
