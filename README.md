# Aklamio Test Automation Project

The purpose of this project is to develop a test automation framework to automate the testing of the Conduit web application, <https://react-redux.realworld.io/>

## Prerequisites 
### 1. System Requirement
* Windows 7 and above 
* MacOS 10.9 and above
* Linux Ubuntu 12.04 and above, Fedora 21 and Debian

### 2. NodeJs and NPM
### 3. An IDE (I used Visual Studio Code) 
<br />


## Installation 
 First, download and install node.js.
<https://nodejs.org/en/download/>

Then install cypress locally using the *npm* command 
``` 
npm install cypress --save-dev
```
Read more about cypress installation and setup via the link;
<https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements>

## Folder Structure
### *fixtures*
The fixtures folder contains two files, *PostAndComments.json* and *Signup.json*, created to store all the external static data for the tests.

### *integration*
The integration folder contains the spec files. The five spec files are listed below.

* VisitConduit
* SignUp
* CreatePost
* PostComment
* Delete Post
* SignOut

### *support*
In order declutter each spec file, several functions are created as custom commands in *support/commands.js* file which are referenced from the individual spec files. <br /> 
<br /> Also, the user-defined json files in the *fixtures* folder are referenced from the commands.js file using the code below.

```javascript
import user from '../fixtures/Signup.json'
import data from '../fixtures/PostAndComment.json'
```

### *cypress.json* 
The base Url is defined in the cypress.json file and referenced with the ```cy.visit('/') ``` command in the spec files.

```yaml
{
   "baseUrl": "https://react-redux.realworld.io/", 
}
```

### *package.json*
The commands to execute the tests on a single browser and on two different browsers, in headed and headless modes, are defined in scripts section of the package.json file.

```yaml
{
   "run:chrome:headed": "cypress run --headed --browser chrome",
   "run:firefox:headed": "cypress run --headed --browser firefox",
   "run:edge:headed": "cypress run --headed --browser edge",
   "run:chrome": "cypress run --browser chrome",
   "run:firefox": "cypress run --browser firefox",
   "run:edge": "cypress run --browser edge",
   "run:twobrowsers": "npm run run:chrome && npm run run:firefox"
}
```


## Test Strategy

### Entry Criteria:
* AUT or SUT is available
* *Features to be Tested* are explicitly stated/defined
* Test data is available
* An optimal amount of test cases have been written
* Test environment is ready and the necessary set-up/configuration done

### Test Case Design:
The test cases are prepared based on exploratory testing since there was no test basis i.e. no requirement specification document. Also the the test cases are defined in specs files contained in the integration folder.

### Test Data Creation:
The test data is prepared based on the Aklamio test scenarios and the written test cases.
 
### Test Case Execution:
A *Test Readiness Checklist* will checked before the execution Test scripts and the following testing types will be executed.
* Functional testing
* Sanity testing
* Smoke testing
* Regression testing


### Exit Criteria: 
* All test cases designed for the project have been executed.
* Sufficient coverage of the features to be tested.
* Every identified bug has been fixed and closed
* No high priority or severity bug exists in the SUT/AUT
* Order from sponsor/executive management to close all pending tasks and end the project 
* Budget for the project has been depleted

### Test Reporting: 
The *mochawesome reporter* will be used as the reporting tool for the test results. The test results are stored in this directory, *cypress/reports/mocha*. Follow these links for details on how to install and configure Mocahwesome reporter. <https://www.npmjs.com/package/mochawesome>. <https://www.linkedin.com/pulse/cypress-test-automation-reporting-mochawesome-amarasiri-/>

### Source Control: 
A private repository, *AklamioAutomation*, will be created in GitHub. All commits will be pushed to this remote repository .

### Continous Integration/Continuous Delivery:  
A CircleCI platform will be used for CI/CD. <br /> Use this link for details on how to integrate CircleCI with Cypress.
<https://testdriven.io/blog/running-cypress-tests-in-parallel/#circleci-setup>

## Observations/Bugs
### Sign Up:
* Email Address: 
An email address consists of a local part, the @ symbol, and a domain part. However, the Conduit application accepts email address in the format, *abcxyz@gmail*, without a Top-Level Domain (.com, .net etc.) in the domain part. Since the email field accepted both valid and invalid email address it was considered not stable enough to automate multiple scenarios. The only scenario tested was if the email field was left blank.<br />

* Wrong label: 
The button on the Sign Up page is wrongly labelled as *Sign in* instead of Sign up. <br /> 

### Create Post: 
* Required fields are not explicitly marked/indicated
* The *tag* field is not a required field
* The *About* and *Tag* fields are not shown when a user creates a post. They only see the *Title* and *Main*.

### Post Comment: 
The comment box is empty, the user clicks the *Post Comment* button but no validation hint e.g. *This field cannot be empty* or error message is shown. 

### Delete Post: 
The *trash/bin icon* is inactive and no action is performed when it is clicked 

## Glossary
* *NPM:* Node Package Manager
* *AUT:* Application Under Test
* *SUT:* System Under Test
* *CI/CD:* Continuous Integration/Continuous Delivery