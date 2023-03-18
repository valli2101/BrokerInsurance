/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import userData from "../userData";

Given("I click Retrieve Quotation button", () => {
  cy.get("#ui-id-3").click();
});

When("I enter identification number", () => {
  cy.get('form > [type="text"]').type("23185");
});

When(
  "I click on Retrieve button it redirects to Retrieve Quotation page",
  () => {
    cy.get("#getquote").click();
    cy.url().should("eq", userData.retrieveQuoteUrl);
  }
);

When("I check Windscreenrepair is present", () => {
  cy.get("tbody > :nth-child(3) > :nth-child(2)").should("not.be.empty");
});

When("I check Incidents field is present", () => {
  cy.get(":nth-child(5) > :nth-child(2)").should("not.be.empty");
});

When("I check Annual mileage field is present", () => {
  cy.get(":nth-child(7) > :nth-child(2)").should("not.be.empty");
});

When("I check Estimated value field is present", () => {
  cy.get(":nth-child(8) > :nth-child(2)").should("not.be.empty");
});

When("I check Parking location is present", () => {
  cy.get(":nth-child(9) > :nth-child(2)").should("not.be.empty");
});

When("I check Start of policy is present", () => {
  cy.get(":nth-child(10) > :nth-child(2)").should("not.be.empty");
});

Then("I check Breakdowncover is present", () => {
  cy.get("tbody > :nth-child(2) > :nth-child(2)").should("not.be.empty");
});

Given("I click the Retrieve Quotation button in homepage", () => {
  cy.get("#ui-id-3").click();
});

When("I search the textbar and enter identification number", () => {
  cy.get('form > [type="text"]').type("23186");
});

When(
  "I click on the Retrieve button and it redirects to the Retrieve Quotation page",
  () => {
    cy.get("#getquote").click();
    cy.url().should("eq", userData.retrieveQuoteUrl);
  }
);

When("I verify Windscreenrepair is present", () => {
  cy.get("tbody > :nth-child(3) > :nth-child(2)").should("not.be.empty");
});

When("I verify Incidents field should be zero", () => {
  cy.get(":nth-child(5) > :nth-child(2)").should("contain", "0");
});

When("I verify Annual mileage field is present", () => {
  cy.get(":nth-child(7) > :nth-child(2)").should("not.be.empty");
});

When("I verify Estimated value field is present", () => {
  cy.get(":nth-child(8) > :nth-child(2)").should("not.be.empty");
});

When("I verify Parking location is present", () => {
  cy.get(":nth-child(9) > :nth-child(2)").should("not.be.empty");
});

When("I verify Start of policy is present", () => {
  cy.get(":nth-child(10) > :nth-child(2)").should("not.be.empty");
});

Then("I verify Breakdowncover is present", () => {
  cy.get("tbody > :nth-child(2) > :nth-child(2)").should("not.be.empty");
});
