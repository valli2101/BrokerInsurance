@quotation @regressions @login @saveQuote
Feature: AtHome Quotation
    Scenario: AtHome quotation With windscreenrepair and without incident
        Given AtHome Quote With windscreenrepair and without incident I click on the Request Quotation button
        When AtHome Quote With windscreenrepair and without incident I select breakdowncover as AtHome
        And AtHome Quote With windscreenrepair and without incident I select the windscreenrepair as yes
        And AtHome Quote With windscreenrepair and without incident I dont enter the Incident
        And AtHome Quote With windscreenrepair and without incident I enter the registration
        And AtHome Quote With windscreenrepair and without incident I enter the annual mileage
        And AtHome Quote With windscreenrepair and without incident I enter the estimated value
        And AtHome Quote With windscreenrepair and without incident I select the Parking Location
        And AtHome Quote With windscreenrepair and without incident I select the start of policy
        And AtHome Quote With windscreenrepair and without incident I click Calculate Premium
        Then AtHome Quote With windscreenrepair and without incident Premium will be displayed

    Scenario: AtHome quotation Without windscreenrepair and without incident
        Given AtHome Quote Without windscreenrepair and without incident I click on the Request Quotation button
        When AtHome Quote Without windscreenrepair and without incident I select breakdowncover as AtHome
        And AtHome Quote Without windscreenrepair and without incident I select the windscreenrepair as no
        And AtHome Quote Without windscreenrepair and without incident I dont enter the Incident
        And AtHome Quote Without windscreenrepair and without incident I enter the registration
        And AtHome Quote Without windscreenrepair and without incident I enter the annual mileage
        And AtHome Quote Without windscreenrepair and without incident I enter the estimated value
        And AtHome Quote Without windscreenrepair and without incident I select the Parking Location
        And AtHome Quote Without windscreenrepair and without incident I select the start of policy
        And AtHome Quote Without windscreenrepair and without incident I click Calculate Premium
        Then AtHome Quote Without windscreenrepair and without incident Premium will be displayed

    Scenario: AtHome quotation Without windscreenrepair and with incident
        Given AtHome Quote Without windscreenrepair and with incident I click on the Request Quotation button
        When AtHome Quote Without windscreenrepair and with incident I select breakdowncover as AtHome
        And AtHome Quote Without windscreenrepair and with incident I select the windscreenrepair as no
        And AtHome Quote Without windscreenrepair and with incident I enter the Incident
        And AtHome Quote Without windscreenrepair and with incident I enter the registration
        And AtHome Quote Without windscreenrepair and with incident I enter the annual mileage
        And AtHome Quote Without windscreenrepair and with incident I enter the estimated value
        And AtHome Quote Without windscreenrepair and with incident I select the Parking Location
        And AtHome Quote Without windscreenrepair and with incident I select the start of policy
        And AtHome Quote Without windscreenrepair and with incident I click Calculate Premium
        Then AtHome Quote Without windscreenrepair and with incident Premium will be displayed

    Scenario: AtHome quotation With windscreenrepair and with incident
        Given AtHome With windscreenrepair and with incident I click on the Request Quotation button
        When AtHome With windscreenrepair and with incident I select breakdowncover as AtHome
        And AtHome With windscreenrepair and with incident I select the windscreenrepair as yes
        And AtHome With windscreenrepair and with incident I enter the Incident
        And AtHome With windscreenrepair and with incident I enter the registration
        And AtHome With windscreenrepair and with incident I enter the annual mileage
        And AtHome With windscreenrepair and with incident I enter the estimated value
        And AtHome With windscreenrepair and with incident I select the Parking Location
        And AtHome With windscreenrepair and with incident I select the start of policy
        And AtHome With windscreenrepair and with incident I click Calculate Premium
        Then AtHome With windscreenrepair and with incident Premium will be displayed

