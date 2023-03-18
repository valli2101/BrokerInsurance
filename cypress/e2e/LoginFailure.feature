@regressions
Feature: Broker Insurance - Login Page
    Scenario Outline: Validate invalid email credentials
        Given Go to Broker Insurance homepage
        When I enter an email Address <emailAddress>
        And I enter a password <password>
        And I click on log in button
        Then I should be shown error message

        Examples:
            | emailAddress  | password |
            | testgmail.com | test123  |

    Scenario: Validate Login page should not allow to sign in the email Id which created from register page without password
        Given Given I go to the Broker Insurance Login page
        When I give email id that I got from register page without password
        And  I click on the Log in button without password entered
        Then  It should be not be moved to Broker Insurance WebPage
