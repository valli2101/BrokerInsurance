@quotation @regressions @login
Feature: No cover Quotation
    Scenario: No cover quotation submission
        Given No Cover I click on the Request Quotation button
        When No Cover I select breakdowncover as No cover
        And No Cover I select the windscreenrepair as yes
        And No Cover I dont enter the Incident
        And No Cover I enter the registration
        And No Cover I enter the annual mileage
        And No Cover I enter the estimated value
        And No Cover I select the Parking Location
        And No Cover I select the start of policy
        And No Cover I click Calculate Premium
        Then No Cover Premium will be displayed