#!/usr/bin/env groovy
pipeline{
    agent any

    //Define stages for the build process
    stages{
        //Define the test stage
//        stage('Test'){
//            //Define the docker image to use for the test stage
//            agent{
//                docker{ image 'node:9' }
//            }
            //Write the scripts to run in the node Docker container to test the Angular application.
            //Since this is a groovy file we use the '''string''' syntax to define multi-line formatting.
            //Groovy will use the string EXACTLY as written in between the ''' characters. In this instance each
            //line between the ''' characters will be treated as separate lines of a shell script.
//            steps{
//                sh '''npm i --save-dev karma-phantomjs-launcher
//$(npm bin)/ng test --watch=false'''
//            }
//        }

        //Define the deploy stage
        stage('Deploy'){
            steps{
                //The Jenkins Declarative the Pipeline does not provide functionality to deploy to a private
                //Docker registry. In order to deploy to the HDAP Docker registry we must write a custom Groovy
                //script using the Jenkins Scripting Pipeline. This is done by placing Groovy code with in a "script"
                //element. The script below registers the HDAP Docker registry with the Docker instance used by
                //the Jenkins Pipeline, builds a Docker image of the project, and pushes it to the registry.
                script{
                    docker.withRegistry('https://build.hdap.gatech.edu'){
                        def applicationImage = docker.build("patient-survey-ui:1.0","-f Dockerfile .")
                        applicationImage.push('latest')
                    }
                }
            }
        }
		//Define stage to notify rancher
        stage('Notify'){
            steps{
                script{
                    //Notify rancher to pull down the image
                    //UNIQUE_NAME_FOR_SERVICE_STACK/NAME_FOR_CONTAINER tells rancher to create a service stack in the swarm named UNIQUE_NAME_FOR_SERVICE_STACK that contains your application container named NAME_FOR_CONTAINER 
                    //Please change UNIQUE_NAME_FOR_SERVICE_STACK/NAME_FOR_CONTAINER to something unique for your project
                    rancher confirm: true, credentialId: 'rancher-server', endpoint: 'https://rancher.hdap.gatech.edu/v2-beta', environmentId: '1a7', environments: '', image: "build.hdap.gatech.edu/patient-survey-ui:latest", ports: '', service: 'patient-survey-service/patient-survey-container', timeout: 60
                }
            }
		}
	}
}
