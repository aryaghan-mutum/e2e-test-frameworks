##### Cypress Automation Starter Suite

###### Download `node.js` and `npm`
- Download `node.js` `.pkg` installer from: `https://nodejs.org/en/download/` & Verify version: `node -v`
- Generate Cypress directory
- Generate `package.json`
- Install Cypress
- Install TypeScript
- Download IDE: VS Code, IntelliJ, Emacs or VIM

###### Generate package.json
```properties
npm init to customize the package.json
npm init -y creates the package.json automatically
```

```json
{
  "name": "cypress-automation",
  "version": "1.0.0",
  "description": "an automation framework to validate ui and api functionalities",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "who am i?",
  "license": "ISC"
}
```

###### Install Cypress 
```shell
npm install cypress or npm install cypress --save-dev
```

###### TypeScript Installation
```shell
npm install -g typescript  check version: `tsc -v`
npm uninstall -g typescript
```

###### Development 
```shell
npm install
npm run build
```

###### Launch Test Runner from Cypress 
```shell
npx cypress open
```

###### Run Tests 
Run all tests in the project:
```shell
npx cypress run or npm test
```

Run tests on different envs (generates test results in CLI!): 
```shell
npx cypress run --env configFile=dev
npx cypress run --env configFile=stage
npx cypress run --env configFile=qa
```

Run tests on Test Runner for different envs (mostly used for testing):
```shell
cypress open --env configFile=dev
cypress open --env configFile=stage
cypress open --env configFile=qa
```

Run specific tests:
```shell
cypress run --spec cypress/integration/ui/regression/somedir/some_file.spec.js
cypress run --spec cypress/integration/microservices/regression/somedir/some_file.spec.js
```

Run tests by directories:
```shell
cypress run --spec "cypress/integration/ui/regression/somedir/**"
cypress run --spec "cypress/integration/microservices/regression/somedir/**"
```

Run using Tags:
```shell
npx cypress-tags run -e TAGS='@smoke'
```

Run tests on a specific browser:
```shell
cypress run --browser chrome
cypress run --browser firefox
cypress run --browser edge
```
(note: install a browser before running tests or install [Docker Images](https://docs.cypress.io/examples/examples/docker.html#Images))


###### Cypress Project Structure
- `features` - Used to hold external pieces of static data that is used in tests
- `integration` - Location of all test files with `.js` or `.ts` extensions
- `plugins` - Contains `index.js` file used to load plugins
- `support` - Contains `command.js` & `index.js` files. 
	- `commands.js` - Used to write custom commands and overrides exisiting commands. 
	- `index.js` - Used to store global configurations and behaviours that modify cypress. This file automatically loads before the test files
- `cypress.json` - Located under the root directory. Used to store project configurations such as `baseUrl`, `port`, `env` etc.
