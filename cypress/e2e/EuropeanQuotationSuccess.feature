@quotation @regressions @login @saveQuote
Feature: European Quotation
    Scenario: European quotation With windscreenrepair and without incident
        Given European Quote With windscreenrepair and without incident I click on the Request Quotation button
        When European Quote With windscreenrepair and without incident I select breakdowncover as European
        And European Quote With windscreenrepair and without incident I select the windscreenrepair as yes
        And European Quote With windscreenrepair and without incident I dont enter the Incident
        And European Quote With windscreenrepair and without incident I enter the registration
        And European Quote With windscreenrepair and without incident I enter the annual mileage
        And European Quote With windscreenrepair and without incident I enter the estimated value
        And European Quote With windscreenrepair and without incident I select the Parking Location
        And European Quote With windscreenrepair and without incident I select the start of policy
        And European Quote With windscreenrepair and without incident I click Calculate Premium
        Then European Quote With windscreenrepair and without incident Premium will be displayed

    Scenario: European quotation Without windscreenrepair and without incident
        Given European Quote Without windscreenrepair and without incident I click on the Request Quotation button
        When European Quote Without windscreenrepair and without incident I select breakdowncover as European
        And European Quote Without windscreenrepair and without incident I select the windscreenrepair as no
        And European Quote Without windscreenrepair and without incident I dont enter the Incident
        And European Quote Without windscreenrepair and without incident I enter the registration
        And European Quote Without windscreenrepair and without incident I enter the annual mileage
        And European Quote Without windscreenrepair and without incident I enter the estimated value
        And European Quote Without windscreenrepair and without incident I select the Parking Location
        And European Quote Without windscreenrepair and without incident I select the start of policy
        And European Quote Without windscreenrepair and without incident I click Calculate Premium
        Then European Quote Without windscreenrepair and without incident Premium will be displayed

    Scenario: European quotation Without windscreenrepair and with incident
        Given European Quote Without windscreenrepair and with incident I click on the Request Quotation button
        When European Quote Without windscreenrepair and with incident I select breakdowncover as European
        And European Quote Without windscreenrepair and with incident I select the windscreenrepair as no
        And European Quote Without windscreenrepair and with incident I enter the Incident
        And European Quote Without windscreenrepair and with incident I enter the registration
        And European Quote Without windscreenrepair and with incident I enter the annual mileage
        And European Quote Without windscreenrepair and with incident I enter the estimated value
        And European Quote Without windscreenrepair and with incident I select the Parking Location
        And European Quote Without windscreenrepair and with incident I select the start of policy
        And European Quote Without windscreenrepair and with incident I click Calculate Premium
        Then European Quote Without windscreenrepair and with incident Premium will be displayed

    Scenario: European quotation With windscreenrepair and with incident
        Given European With windscreenrepair and with incident I click on the Request Quotation button
        When European With windscreenrepair and with incident I select breakdowncover as European
        And European With windscreenrepair and with incident I select the windscreenrepair as yes
        And European With windscreenrepair and with incident I enter the Incident
        And European With windscreenrepair and with incident I enter the registration
        And European With windscreenrepair and with incident I enter the annual mileage
        And European With windscreenrepair and with incident I enter the estimated value
        And European With windscreenrepair and with incident I select the Parking Location
        And European With windscreenrepair and with incident I select the start of policy
        And European With windscreenrepair and with incident I click Calculate Premium
        Then European With windscreenrepair and with incident Premium will be displayed

