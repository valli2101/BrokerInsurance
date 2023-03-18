/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import userData from "../userData";

Given("No Cover I click on the Request Quotation button", () => {
  cy.get("#ui-id-2").click();
});

When("No Cover I select breakdowncover as No cover", () => {
  cy.get("#quotation_breakdowncover").select(
    userData.breakDownCoverType.noCover
  );
});

When("No Cover I select the windscreenrepair as yes", () => {
  cy.get("#quotation_windscreenrepair_t").check("Yes");
});

When("No Cover I dont enter the Incident", () => {
  cy.get("#quotation_incidents");
});

When("No Cover I enter the registration", () => {
  cy.get("#quotation_vehicle_attributes_registration").type(
    userData.vehicleRego
  );
});

When("No Cover I enter the annual mileage", () => {
  cy.get("#quotation_vehicle_attributes_mileage").type(userData.mileage);
});

When("No Cover I enter the estimated value", () => {
  cy.get("#quotation_vehicle_attributes_value").type(userData.vehilceValue);
});

When("No Cover I select the Parking Location", () => {
  cy.get("#quotation_vehicle_attributes_parkinglocation").select(
    userData.parkingType.garage
  );
});

When("No Cover I select the start of policy", () => {
  cy.get("#quotation_vehicle_attributes_policystart_1i").select(
    userData.policyDate.year
  );
  cy.get("#quotation_vehicle_attributes_policystart_2i").select(
    userData.policyDate.month
  );
  cy.get("#quotation_vehicle_attributes_policystart_3i").select(
    userData.policyDate.date
  );
});

When("No Cover I click Calculate Premium", () => {
  cy.get(".btn-default").click();
});

Then("No Cover Premium will be displayed", () => {
  cy.get("#calculatedpremium").should("contain", "NaN");
});
