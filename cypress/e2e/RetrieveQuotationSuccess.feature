@quotation @regressions @login
Feature: Retreive Quotation Page Successful
    Scenario: Verify Retrieve Quotation page by entering customer identification number with incident value
        Given I click Retrieve Quotation button
        When I enter identification number
        And I click on Retrieve button it redirects to Retrieve Quotation page
        And I check Windscreenrepair is present
        And I check Incidents field is present
        And I check Annual mileage field is present
        And I check Estimated value field is present
        And I check Parking location is present
        And I check Start of policy is present
        Then I check Breakdowncover is present

    Scenario: Verify Retrieve Quotation page by entering customer identification number without incident value
        Given I click the Retrieve Quotation button in homepage
        When I search the textbar and enter identification number
        And I click on the Retrieve button and it redirects to the Retrieve Quotation page
        And I verify Windscreenrepair is present
        And I verify Incidents field should be zero
        And I verify Annual mileage field is present
        And I verify Estimated value field is present
        And I verify Parking location is present
        And I verify Start of policy is present
        Then I verify Breakdowncover is present

