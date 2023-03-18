@quotation @regressions @login
Feature: Retreive Quotation Page Unsuccessful
    Scenario: Verify Retrieve Quotation page by entering invalid characters before customer identification number
        Given I click on the Retrieve Quotation button in home page and text box will appear
        When I enter invalid identification number
        And I click on Retrieve button it should go to another page
        Then I check the error message present

    Scenario: Verify Retrieve Quotation page by entering invalid characters after customer identification number
        Given I click Retrieve Quotation button and text box should appear
        When I enter the invalid identification number along with text
        Then I click on the Retrieve button it should not go to retrieve quotation page

    Scenario: Verify Retrieve Quotation page by entering empty customer identification number
        Given I click on the Retrieve Quotation button a text box should appear
        Then I click Retrieve button it should go to Home page