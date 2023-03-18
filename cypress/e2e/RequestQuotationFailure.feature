@quotation @regressions @login
Feature: Request Quotation Failure scenarios
    Scenario: verify the request quotation page behaviour for trying to calculate premium for a blank estimated value field
        Given  I click on the Request Quotation button
        When  I can select any breakdowncover
        And  I select the windscreenrepair as yes
        And  I am leaving incident field blank
        And  I enter the registration
        And  I enter the annual mileage
        And  I enter no value for estimated value field
        And  I select the Parking Location
        And  I select the start of policy
        And  I click Calculate Premium
        Then  Premium should not be displayed

    Scenario: verify the request quotation page behaviour for trying to calculate premium for an invalid data in estimated value field
        Given  I click on a Request Quotation button
        When  I select any breakdowncover
        And  I select the windscreenrepair as no
        And  I kept incident field as blank
        And  I enter the registration number
        And  I enter the annual mileage for the vehicle
        And  I enter character as value for estimated value field
        And  I select Parking Location
        And  I select start of policy
        And  I click on the Calculate Premium
        Then  Premium should not be displayed if the estimated value is invalid

    Scenario: verify the request quotation page behaviour estimated value is less then 100
        Given  I click on the Request Quotation button in the home page
        When  I select breakdowncover option from dropdown
        And  I select the windscreenrepair No for the cover
        And  I enter no value to the incident field
        And  I enter numeric value less than three digit in the estimated value field
        And  I select Parking Location options as preferred
        And  I select start date of the policy as user preferred
        And  I click on the Calculate Premium button
        Then  Premium should not be displayed if the estimated value is less than hundred

    Scenario: verify the request quotation page behaviour for trying to calculate premium for a invalid data in Incident value field
        Given  I click on a Request Quotation button in the home page
        When  I select any breakdowncover option from dropdown
        And  I select windscreenrepair as yes
        And  I enter characters to the incident field
        And  I enter numeric value to the estimated value field
        And  I select Parking Location options
        And  I select start date of the policy
        And  I click on the Calculate Premium option button
        Then  Premium should not be displayed if the incident value is invalid


    Scenario: verify the request quotation page behaviour without filling any fields and try to save the Quotation
        Given  I click on a Request Quotation button in the homepage
        When  I click on the Save quotation button directly
        Then It should not allow to save quotation


    Scenario: verify the reset form by filling the form and try to reset the form
        Given I clicked on the Request Quotation button in the homepage
        When I typed in value to the estimated value field
        And I click on the Calculate Premium button directly
        And Premium should displayed
        And  I click on the Reset Form button directly
        Then Premium should not displayed and call field should be resetted