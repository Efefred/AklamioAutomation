# Aklamio Automation Test Project

This project describes the process to develop the test automation solution for the testing   of the Conduit web application, https://react-redux.realworld.io/

## Prerequisites 

#### System Requirement
* Windows 7 and above 
* MacOS 10.9 and above
* Linux Ubuntu 12.04 and above, Fedora 21 and Debian

#### NodeJs and NPM
#### A reliable IDE (My IDE of choice is VS Code) 
<br />

## Installation 
What things you need to install the software and how to install them

```
Give examples
```



A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

## **Test Automation Framework** 

*Cypress* test automation solution used for web automationis used for the test automation framework while *Visual Studio Code (VS Code)* as the IDE.
Alhough not as popular as Selenium, Cypress is rapidly gaining grounds as a worthy competitor and it's only a matter of time before it 
becomes the industry standard for web testing automation. Below are some key benefits of using Cypress.

* Ease of installation 
* Unlike Selenium, test execution happens in browser and drivers are unnecessary
* Application JS objects are easily accessible since test code and application run in the same browser*
* Dashboard support for detailed reporting
* Support for BDD and TDD testing
* Auto-wait features make test execution more reliable
* Superlative documentation with detailed explanation of commands and assertions, and best practices for test automation
* Makes life easy for front-end developers with respect to writing unit tests
* Cypress has an excellent documentation. See the link below 
<https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell>

## Test Execution
<br />


## Bugs/Observations
### Sign Up:
* Email Address: <br />
An email address consists of a local part, the @ symbol, and a domain part. However, the Conduit application accepts email address in the format, *abcxyz@gmail*, without a Top-Level Domain (.com, .net etc.) in the domain part. <br />
<br />
Since the email field accepted both valid and invalid email address it was considered not stable enough to automate multiple scenarios. The only scenario tested was if the email field was left blank.<br />

* Wrong label: <br /> 
The button on the Sign Up page is wrongly labelled as *Sign in* instead of Sign up. <br /> 

### Create Post: <br/>
* Required fields are not explicitly marked/indicated
* The *tag* field is not a required field
* The *About* and *Tag* fields are not shown when a user creates a post. They only see the *Title* and *Main*.

### Post Comment: <br /> 
The comment box is empty, the user clicks the *Post Comment* button but no validation hint e.g. *This field cannot be empty* or error message is shown. 

### Delete Post: <br/>
The *trash/bin icon* is inactive and no action is performed when it is clicked 