/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import userData from "../userData";

Given("I click on the Request Quotation button", () => {
  cy.get("#ui-id-2").click();
});

When("I can select any breakdowncover", () => {
  cy.get("#quotation_breakdowncover").select(
    userData.breakDownCoverType.european
  );
});

When("I select the windscreenrepair as yes", () => {
  cy.get("#quotation_windscreenrepair_t").check("Yes");
});

When("I am leaving incident field blank", () => {
  cy.get("#quotation_incidents");
});

When("I enter the registration", () => {
  cy.get("#quotation_vehicle_attributes_registration").type(
    userData.vehicleRego
  );
});

When("I enter the annual mileage", () => {
  cy.get("#quotation_vehicle_attributes_mileage").type(userData.mileage);
});

When("I enter no value for estimated value field", () => {
  cy.get("#quotation_vehicle_attributes_value");
});

When("I select the Parking Location", () => {
  cy.get("#quotation_vehicle_attributes_parkinglocation").select(
    userData.parkingType.garage
  );
});

When("I select the start of policy", () => {
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

When("I click Calculate Premium", () => {
  cy.get(".btn-default").click();
});

Then("Premium should not be displayed", () => {
  cy.get("#calculatedpremium").should("not.be.visible");
});

Given("I click on a Request Quotation button", () => {
  cy.get("#ui-id-2").click();
});

When("I select any breakdowncover", () => {
  cy.get("#quotation_breakdowncover").select(
    userData.breakDownCoverType.european
  );
});

When("I select the windscreenrepair as no", () => {
  cy.get("#quotation_windscreenrepair_f").check("No");
});

When("I kept incident field as blank", () => {
  cy.get("#quotation_incidents");
});

When("I enter the registration number", () => {
  cy.get("#quotation_vehicle_attributes_registration").type(
    userData.vehicleRego
  );
});

When("I enter the annual mileage for the vehicle", () => {
  cy.get("#quotation_vehicle_attributes_mileage").type(userData.mileage);
});

When("I enter character as value for estimated value field", () => {
  cy.get("#quotation_vehicle_attributes_value").type("test");
});

When("I select Parking Location", () => {
  cy.get("#quotation_vehicle_attributes_parkinglocation").select(
    userData.parkingType.garage
  );
});

When("I select start of policy", () => {
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

When("I click on the Calculate Premium", () => {
  cy.get(".btn-default").click();
});

Then(
  "Premium should not be displayed if the estimated value is invalid",
  () => {
    cy.get("#calculatedpremium").should("not.be.visible");
  }
);

Given("I click on the Request Quotation button in the home page", () => {
  cy.get("#ui-id-2").click();
});

When("I select breakdowncover option from dropdown", () => {
  cy.get("#quotation_breakdowncover").select(
    userData.breakDownCoverType.european
  );
});

When("I select the windscreenrepair No for the cover", () => {
  cy.get("#quotation_windscreenrepair_f").check("No");
});

When("I enter no value to the incident field", () => {
  cy.get("#quotation_incidents").type("test");
});

When(
  "I enter numeric value less than three digit in the estimated value field",
  () => {
    cy.get("#quotation_vehicle_attributes_value").type("99");
  }
);

When("I select Parking Location options as preferred", () => {
  cy.get("#quotation_vehicle_attributes_parkinglocation").select(
    userData.parkingType.garage
  );
});

When("I select start date of the policy as user preferred", () => {
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

When("I click on the Calculate Premium button", () => {
  cy.get(".btn-default").click();
});

Then(
  "Premium should not be displayed if the estimated value is less than hundred",
  () => {
    cy.get("#calculatedpremium").should("not.be.visible");
  }
);

Given("I click on a Request Quotation button in the home page", () => {
  cy.get("#ui-id-2").click();
});

When("I select any breakdowncover option from dropdown", () => {
  cy.get("#quotation_breakdowncover").select(
    userData.breakDownCoverType.european
  );
});

When("I select windscreenrepair as yes", () => {
  cy.get("#quotation_windscreenrepair_f").check("No");
});

When("I enter characters to the incident field", () => {
  cy.get("#quotation_incidents").type("test");
});

When("I enter numeric value to the estimated value field", () => {
  cy.get("#quotation_vehicle_attributes_value").type(userData.vehilceValue);
});

When("I select Parking Location options", () => {
  cy.get("#quotation_vehicle_attributes_parkinglocation").select(
    userData.parkingType.garage
  );
});

When("I select start date of the policy", () => {
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

When("I click on the Calculate Premium option button", () => {
  cy.get(".btn-default").click();
});

Then("Premium should not be displayed if the incident value is invalid", () => {
  cy.get("#calculatedpremium").should("not.be.visible");
});

Given("I click on a Request Quotation button in the homepage", () => {
  cy.get("#ui-id-2").click();
});

When("I click on the Save quotation button directly", () => {
  cy.get("#new_quotation > .actions > .btn-success").click();
});

Then("It should not allow to save quotation", () => {
  cy.url().should("not.eq", userData.quoteUrl);
});

Given("I clicked on the Request Quotation button in the homepage", () => {
  cy.get("#ui-id-2").click();
});

When("I typed in value to the estimated value field", () => {
  cy.get("#quotation_vehicle_attributes_value").type(userData.vehilceValue);
});

When("I click on the Calculate Premium button directly", () => {
  cy.get(".btn-default").click();
});

When("Premium should displayed", () => {
  cy.get("#calculatedpremium").should("be.visible");
});

When("I click on the Reset Form button directly", () => {
  cy.get("#resetquote").click();
});

Then("Premium should not displayed and call field should be resetted", () => {
  cy.get("#quotation_vehicle_attributes_value").should("be.empty");
  cy.get("#calculatedpremium").should("not.be.visible");
});
