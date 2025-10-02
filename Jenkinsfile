pipeline {
    agent any

    tools {
        nodejs "node16"   // Matches the name you gave in Jenkins tools
    }

    environment {
        RENDER_URL   = 'https://moringa-assisgnment.onrender.com/'
        SLACK_CHANNEL = '#gallery-assignment'
        EMAIL        = 'daddymarto01@gmail.com'
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Daddymarto01/moringa_assisgnment.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build || echo "No build script, skipping..."'
            }
        }

        stage('Deploy to Render') {
            steps {
                echo "Code pushed. Render auto-deploy will handle deployment."
            }
        }
    }

    post {
        failure {
            mail to: "${env.EMAIL}",
                 subject: "Build/Test Failed: #${env.BUILD_NUMBER}",
                 body: "Build ${env.BUILD_NUMBER} failed. Check Jenkins logs: ${env.BUILD_URL}"
        }
        success {
            slackSend(
                channel: "${env.SLACK_CHANNEL}",
                message: "✅ Build #${env.BUILD_NUMBER} succeeded! Site live at: ${env.RENDER_URL}"
            )
        }
    }
}