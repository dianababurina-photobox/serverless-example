/**
 * This is where you define your lamba function(s) that will interact with an 
 * incoming request/event in AWS (e.g. result of hitting an endpoint). From here you can perform various actions -
 * - call into a pbx api
 * - listen on an sqs queue
 * - read/write data to an aws table (e.g. dynamo)
 */
import { APIGatewayProxyResult } from 'aws-lambda'; //represents a response from lambda

export const handler = async (): Promise<APIGatewayProxyResult> => {
  //extract data from request here etc.

  try {
    //e.g. attempt action (e.g. db read/write)
    const result: APIGatewayProxyResult = {
      statusCode: 200,
      body: 'this is a simple lambda handler',
    };

    return result;
  } catch (error) {
    //process/return any error
  }
};
