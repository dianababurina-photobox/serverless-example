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
    SLS_DEBUG = "*"
    HOME = "${env.WORKSPACE}"
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'cd $WORKSPACE'
        sh 'yarn --frozen-lockfile'
      }
    }

    stage('Static checks') {
      steps {
        sh 'yarn lint'
      }
    }

    stage('Unit tests') {
      steps {
        sh 'yarn test'
      }
    }

    stage('Deploy: development') {
      steps {
        }
      }
    }

    stage('Deploy: staging') {
      when { branch 'master' }
      steps {
      }
    }

    stage('Confirm Production deployment') {
      when { branch 'master' }
      steps {
        input("Ready to proceed ?")
      }
    }

    stage('Deploy: production') {
      when { branch 'master' }
      steps {
      }
    }
  }
}

def onMasterBranch(block) {
  if (env.BRANCH_NAME == 'master') {
    return block.call()
  }
}
