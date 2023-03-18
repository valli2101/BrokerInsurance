/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import userData from "../userData";

Given(
  "I click on the Retrieve Quotation button in home page and text box will appear",
  () => {
    cy.get("#ui-id-3").click();
  }
);

When("I enter invalid identification number", () => {
  cy.get('form > [type="text"]').type("abcdef23123");
});

When("I click on Retrieve button it should go to another page", () => {
  cy.get("#getquote").click();
  cy.url().should("eq", userData.retrieveQuoteUrl);
});

Then("I check the error message present", () => {
  cy.get("body > :nth-child(5)").should(
    "contain",
    "Wrong Retrieve Quotation ID. Please Check..."
  );
});

Given("I click Retrieve Quotation button and text box should appear", () => {
  cy.get("#ui-id-3").click();
});

When("I enter the invalid identification number along with text", () => {
  cy.get('form > [type="text"]').type("23186yeryfdhhf");
});

Then(
  "I click on the Retrieve button it should not go to retrieve quotation page",
  () => {
    cy.get("#getquote").click();
    cy.url().should("not.eq", userData.retrieveQuoteUrl);
  }
);

Given(
  "I click on the Retrieve Quotation button a text box should appear",
  () => {
    cy.get("#ui-id-3").click();
  }
);

Then("I click Retrieve button it should go to Home page", () => {
  cy.get("#getquote").click();
  cy.url().should("eq", userData.homePageUrl);
});
