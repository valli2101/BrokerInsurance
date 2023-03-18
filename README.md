###Assessment - Insurance Project

##Installation

    Clone this repository:
    ```shell
        Git clone
    ```
    Install dependencies:
    ```shell
        Npm install
    ```
    Make sure Node is installed in machine: Recommended version for this project is v14.17.1

##Running tests

    To run Cypress tests, use the following command:
    ```shell
        npx cypress open
    ```
    This will open the Cypress Test Runner, where you can select and run tests.

    To run the full integration tests, use the following command(to generate the report):

    ```shell
        npm run full-regression-headed-chrome
    ```

    To run the all the integration tag test cases, use the following command:

    ```shell
        npm run regression
    ```

##Writing Tests

    Cypress tests can be found in the cypress/support/step_definitions folder. And the features are present in cypress/e2e folder.

##Reporting

    Cypress generates test results and screenshots automatically. These can be found in the cypress/screenshots and cypress/videos folders respectively.
