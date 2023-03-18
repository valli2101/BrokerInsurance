@regressions
Feature: Broker Insurance - Login Page
    Scenario Outline: Validate valid login credentials
        Given Go to the Broker Insurance homepage
        When I type an email Address <emailAddress>
        And I type a password <password>
        And I click on the log in button
        Then I should be moved to another page which contains text

        Examples:
            | emailAddress   | password |
            | test@gmail.com | test123  |
