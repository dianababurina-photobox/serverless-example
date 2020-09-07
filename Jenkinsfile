pipeline {
  agent {
    docker {
      image 'quay.io/photobox/serverless-build:12.14.0-git'
      label 'amazon-ecs-docker-default'
    }
  }

  options {
    timeout(time: 1, unit: 'HOURS')
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '20'))
  }

  environment {
    SLS_DEBUG = '*'
    HOME = "${env.WORKSPACE}"
  }

  stages {

    stage('install') {
      steps {
        sh 'cd $WORKSPACE'
        sh 'yarn install'
      }
    }

    stage('build') {
      steps {
        sh 'cd $WORKSPACE'
        sh 'yarn build'
      }
    }

    stage('test') {
      steps {
        sh 'cd $WORKSPACE'
        sh 'yarn test'
      }
    }

    stage('deploy feature') {
      when {
          not {
              branch 'master'
          }
      }
      steps {
        sh 'cd $WORKSPACE'
        withAWS(role: 'apps-orchestration-deployment-role-development', roleAccount: '855439869752') {
          awsIdentity()
          sh 'yarn deploy:feature'
        }
      }
    }

    stage('deploy development') {
      when {
        branch 'master'
      }
      steps {
        sh 'cd $WORKSPACE'
        withAWS(role: 'apps-orchestration-deployment-role-development', roleAccount: '855439869752') {
          awsIdentity()
          sh 'yarn deploy:development'
        }
      }
    }

    stage('deploy staging') {
      when {
        branch 'master'
      }
      steps {
        sh 'cd $WORKSPACE'
        withAWS(role: 'apps-orchestration-deployment-role-staging', roleAccount: '855439869752') {
          awsIdentity()
          sh 'yarn deploy:staging'
        }
      }
    }

    stage('Confirm Production deployment') {
      when { branch 'master' }
      steps {
        input("Ready to proceed ?")
      }
    }

    stage('deploy production') {
      when {
        branch 'master'
      }
      steps {
        sh 'cd $WORKSPACE'
        withAWS(role: 'apps-orchestration-deployment-role-production', roleAccount: '024157097554') {
          awsIdentity()
          sh 'yarn deploy:production'
        }
      }
    }
  }
}
