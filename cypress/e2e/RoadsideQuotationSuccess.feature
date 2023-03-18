@quotation @regressions @login @saveQuote
Feature: Roadside Quotation
    Scenario: Roadside quotation with windscreenrepair and without incident
        Given With windscreenrepair and without incident I click on the Request Quotation button
        When With windscreenrepair and without incident I select breakdowncover as Roadside
        And With windscreenrepair and without incident I select the windscreenrepair as yes
        And With windscreenrepair and without incident I dont enter the Incident
        And With windscreenrepair and without incident I enter the registration
        And With windscreenrepair and without incident I enter the annual mileage
        And With windscreenrepair and without incident I enter the estimated value
        And With windscreenrepair and without incident I select the Parking Location
        And With windscreenrepair and without incident I select the start of policy
        And With windscreenrepair and without incident I click Calculate Premium
        Then With windscreenrepair and without incident Premium will be displayed

    Scenario: Roadside quotation without windscreenrepair and without incident
        Given Without windscreenrepair and without incident I click on the Request Quotation button
        When Without windscreenrepair and without incident I select breakdowncover as Roadside
        And Without windscreenrepair and without incident I select the windscreenrepair as no
        And Without windscreenrepair and without incident I dont enter the Incident
        And Without windscreenrepair and without incident I enter the registration
        And Without windscreenrepair and without incident I enter the annual mileage
        And Without windscreenrepair and without incident I enter the estimated value
        And Without windscreenrepair and without incident I select the Parking Location
        And Without windscreenrepair and without incident I select the start of policy
        And Without windscreenrepair and without incident I click Calculate Premium
        Then Without windscreenrepair and without incident Premium will be displayed

    Scenario: Roadside quotation without windscreenrepair and with incident
        Given Without windscreenrepair and with incident I click on the Request Quotation button
        When Without windscreenrepair and with incident I select breakdowncover as Roadside
        And Without windscreenrepair and with incident I select the windscreenrepair as no
        And Without windscreenrepair and with incident I enter the Incident
        And Without windscreenrepair and with incident I enter the registration
        And Without windscreenrepair and with incident I enter the annual mileage
        And Without windscreenrepair and with incident I enter the estimated value
        And Without windscreenrepair and with incident I select the Parking Location
        And Without windscreenrepair and with incident I select the start of policy
        And Without windscreenrepair and with incident I click Calculate Premium
        Then Without windscreenrepair and with incident Premium will be displayed

    Scenario: Roadside quotation with windscreenrepair and with incident
        Given With windscreenrepair and with incident I click on the Request Quotation button
        When With windscreenrepair and with incident I select breakdowncover as Roadside
        And With windscreenrepair and with incident I select the windscreenrepair as yes
        And With windscreenrepair and with incident I enter the Incident
        And With windscreenrepair and with incident I enter the registration
        And With windscreenrepair and with incident I enter the annual mileage
        And With windscreenrepair and with incident I enter the estimated value
        And With windscreenrepair and with incident I select the Parking Location
        And With windscreenrepair and with incident I select the start of policy
        And With windscreenrepair and with incident I click Calculate Premium
        Then With windscreenrepair and with incident Premium will be displayed

