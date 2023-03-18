@registerv1 @regressions
Feature: Registration Homepage validation
    Scenario Outline: Validate registration page submission
        Given I go to Broker Insurance registration page
        When I select the title <title>
        And I enter the firstname <firstname>
        And I enter the Surname <surname>
        And I enter the phone number <phone>
        And I select the year <year>
        And I select the month <month>
        And I select the date <date>
        And I select insurance type <insuranceType>
        And I select the Licence period <licencePeriod>
        And I select the occupation <occupation>
        And I enter street <street>
        And I enter city <City>
        And I enter country <Country>
        And I enter postcode <postcode>
        And I enter email <email>
        And I enter password <password>
        And I enter confirm password <confirmPassword>
        And I select create button
        Then I should see the login page

        Examples:
            | title | firstname | surname | phone     | year | month | date | insuranceType | licencePeriod | occupation | street       | City   | Country   | postcode | email          | password | confirmPassword | message                  |
            | Mr    | John      | test    | 123456789 | 1995 | June  | 11   | Full          | 1             | Academic   | great street | Sydney | Australia | 2145     | test@test1.com | test123  | test123         | redirected to login page |
