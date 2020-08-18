/**
 * This is where you define your lamba function(s) that will interact with an 
 * incoming request/event in AWS. From here you perform various actions -
 * - push data to a pbx api
 * - listen on an sqs queue
 * - read/write data to an aws table (e.g. dynamo)
 */
import { APIGatewayProxyResult } from 'aws-lambda'; //represents a lambda response

export const handler = async (): Promise<APIGatewayProxyResult> => {
  //extract data from request here

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
