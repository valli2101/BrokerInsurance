@register @regressions
Feature: Registration Homepage validation Failure
    Scenario Outline: Validate registration page submission Failure
        Given I go to Broker Insurance registration page
        When I select title from dropdown <title>
        And I gave firstName <firstname>
        And I gave surName <surname>
        And I gave phone number of user <phone>
        And I gave year of birth <year>
        And I gave month of birth <month>
        And I gave date of birth <date>
        And I choose insurance type as <insuranceType>
        And I enter Licence period as <licencePeriod>
        And I select occupation from dropdown <occupation>
        And I gave street name as <street>
        And I gave city name as <City>
        And I gave country name as <Country>
        And I gave postcode <postcode>
        And I gave email id as <email>
        And I gave password <password>
        And I gave confirmPassword as <confirmPassword>
        And I click on the create button
        Then I should stay in the same page

        Examples:
            | title | firstname | surname | phone    | year | month | date | insuranceType | licencePeriod | occupation | street       | City   | Country   | postcode | email               | password | confirmPassword |
            | Miss  | clare     | test    | 90783223 | 1993 | March | 16   | Full          | 2             | Academic   | great street | Sydney | Australia | 2145     | testtest1.com       | test123  | test123         |
            | Mr    | John      | claire  | 90783223 | 1991 | May   | 19   | Full          | 1             | Academic   | great street | Sydney | Australia | 2145     | testtest1@gmail.com | test123  | test123453      |

    Scenario: Validate Register page should not accept empty password and should not create account for the email Id
        Given Given I visit Broker Insurance registration page
        And  In the Rego page I entered emailid
        And  I click on the create button without password entered
        Then  It should not be moved to login page