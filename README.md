# photo-services-hello-world

This is a template for creating a serverless typescript application (e.g. service/api)
You can use this as the boiler plate when creating your own repo!

As you can see, about 70/80% of the content is just config files - as these are what
'drive' the serverless app and development - e.g. linting, prettier, typescript etc.
The only code that you really need is the lamda handlers (in `src/handlers` - the code that is run when hitting an endpoint), plus any utils that you want to create

This template is making use of serverless framework.
Docs [here](https://www.serverless.com/framework/docs/)

### Pre requisites
Make sure to have a role in the AWS account were to deploy the app.
If needed to define a new one you can probably start with `JenkinsRoleExample.yml` by replacing `xx-foo-bar-xx` with a meaningful string to identify the new serverless app.

## How to use the template
Search and replace any string occurency of `example` within this repo with a meaningul name for your new serverless application.
Please make sure accounts are role name are set correctly in `Jenkinsfile` before to push the initial commit to avoid creating resource under unwanted accounts.

### How to run this example app
This template comes with a simple lamba which you can run:
1. Clone repo
2. Run `yarn` (or similar) to install dependencies
3. Run `yarn start` to start up the local lamba service
4. Browse to http://localhost:3001/some/path - you should see `this is a simple lambda handler` displayed on the page!

## The serverless app
These are the basic elements that make up a serverless application:

### serverless.yaml
This is the main aws config file - used to define the various properties of the app
(environments, functions etc.). This file is used to create the service and lambas in aws

### tsconfig.json
Specifies which files should/should not be compiled from ts

### src/handlers
Where the handler functions should go. These handler functions form the lambdas

### serverless
This contains 'sub-config' refefrenced in the main serverless.yaml file -
- domains
- env
- roles
- functions
- tables
- etc.
