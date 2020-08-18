# sls-git-template
Template for creating a serverless application

# example serverless api
This is the struture for setting up a serverless application:

## serverless.yaml
This is the main aws config file - used to define the various properties of the app 
(environments, functions etc.)

## tsconfig.json
Specifies which files should/should not be compiled from ts

## src/handlers
Where the handler functions should go

## serverless partials
This contains 'sub-config' refefrenced in the main serverless.yaml file -
- functions
- tables
- etc.
