import { APIGatewayProxyResult } from 'aws-lambda';

export default (): Promise<APIGatewayProxyResult> => {
  return Promise.resolve({
    statusCode: 200,
    body: 'Hello from Photobox team!',
  });
};
