# sls-git-template
This is a template for creating a serverless application (e.g. service/api)
You can use this as the boiler plate when creating your own repo!

As you can see, about 70/80% of the content is just config files - as these are what
'drive' the serverless app and development - e.g. linting, prettier, typescript etc.
The only code that you really need is the lamda handlers (in `src/handlers` - the code that is run when hitting an endpoint), plus any utils that you want to create

### How to run this example app
This template comes with a simple lamba which you can run:
1. Clone repo
2. Run `yarn` (or similar) to install dependencies
3. Run `yarn start` to start up the local lamba service
4. Browse to http://localhost:3001/some/path - you should see `this is a simple lambda handler` displayed on the page!

# a serverless app
These are the basic elements that make up a serverless application:

## serverless.yaml
This is the main aws config file - used to define the various properties of the app 
(environments, functions etc.). This file is used to create the service and lambas in aws

## tsconfig.json
Specifies which files should/should not be compiled from ts

## src/handlers
Where the handler functions should go. These handler functions form the lambdas

## serverless partials
This contains 'sub-config' refefrenced in the main serverless.yaml file -
- functions
- tables
- etc.
