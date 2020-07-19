##### Protractor Starter Suite
A General purpose framework comprises functionalities for UI and API services

###### Framework Setup
```properties
- Download and install node js
- Install protractor: np install -g protractor 
- Check version: protractor --version
- Run cmd: webdriver-manager update
- Type: cmd+shift+g and search: /usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.26.0
- For mac: Go to cd /usr/local/lib/node_modules/protractor/example and type: `protractor conf.js` (chrome instance will open)
- Protractor uses Jasmine test framework by default. if you need to install Jasmine type: npm install --save-dev jasmine
```

###### Run Tests
Run all tests with protractor: 
```properties
protractor ./conf/conf.js
```

Run with node:
```properties
node ./tests/some_test.js
```

###### Development
```properties
npm run build
npm test
npm version 0.0.0
npm view pkg-name versions
```

###### Generate Allure Report from Allure cmd line 
```properties
protractor ./conf/conf.js
allure serve allure-results

Note: First run the tests, then use allure cmd in CLI to generate the report 
```

###### Start Server
```properties 
webdriver-manager update
webdriver-manager start
```

###### Contributors
```properties
Anurag Muthyam <anu.drumcoder@gmail.com>
```